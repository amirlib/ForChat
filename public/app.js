var socket = io();

var model = {
    user: null,
    chatText: null
};

var controller = {
    init: function() {
        userVeiw.init();
        chatVeiw.init();
    },
    setUser: function(val) {
        model.user = val;
    },
    getUser: function() {
        return model.user;
    },
    setMessage: function(val) {
        model.chatText = val;
    },
    getMessage: function() {
        return model.chatText;
    },
};

var userVeiw = {
    init: function() {
        let legalUser = false;
        this.userInput = $("#user");
        this.userBut = $("#saveUser");

        this.userBut.click(function() {
            if (legalUser == true) {
                controller.setUser($("#user").val());
                $('#sendChat').attr('disabled', false);
            } else {
                $('#hint').addClass("error").text("לא הוזן שם משתמש חוקי");
            }
        });

        this.userInput.click(function() {
            $("#user").keyup(function() {
                legalUser = userVeiw.checkUser(this.value);
            });
        });

        this.render();
    },
    checkUser: function(val) {
        if (val.length == 0) { //if the input is empty
            $('#hint').removeClass("error").text("שם המשתמש צריך להיות בין 4 ל-16 תווים מספריים ואותיות אנגליות בלבד");
        } else if (val.length > 16 || val.length < 4) { //אם האורך לא נכון
            $('#hint').addClass("error").text("שם משתמש לא באורך החוקי");
        } else {
            if (userVeiw.checkUserChars(val) == false) {
                $('#hint').addClass("error").text("שם משתמש לא חוקי");
            } else {
                $('#hint').removeClass("error").text("על מנת לשמור את שם המשתמש, יש ללחוץ על הכפתור, שמור משתמש");
                return true;
            }
        }
        return false;
    },
    checkUserChars: function(val) {
        for (let i = 0; i < val.length; i++) {
            if (val.charCodeAt(i) <= 47 || (val.charCodeAt(i) >= 58 && val.charCodeAt(i) <= 64)
                || (val.charCodeAt(i) >= 91 && val.charCodeAt(i) <= 96) || val.charCodeAt(i) >= 123) {
                return false;
            }
        }
        return true;
    },
    render: function() {
        $('#sendChat').attr('disabled', true);
    }
};

var chatVeiw = {
    init: function() {
        this.chatInput = $("#chat");
        this.sendBut = $("#sendChat");

        this.chatInput.click(function() {
            if (controller.getUser() === null) {
                $('.messages').append($('<li>').addClass("error").text("חובה להכניס שם משתמש למערכת"));
                $('.messages').append($('<li>').text(''));
            }
        });

        this.sendBut.click(function() {
            chatVeiw.checkBeforeSendChat();
        });

        this.chatInput.keypress(function(e) {
            if(e.which == 13) {
                e.preventDefault(); /* prevent from '\n' appear */
                chatVeiw.checkBeforeSendChat();
            }
        });
    },
    checkBeforeSendChat: function() {
        if (controller.getUser() === null) {
            $('.messages').append($('<li>').addClass("error").text("אין אפשרות להשתתף בצ'אט ללא שם מתשמש תיקני"));
            $('.messages').append($('<li>').text(''));
        } else if(chatVeiw.checkEmpty(this.chatInput.val()) == true) {
            $('.messages').append($('<li>').addClass("error").text("ההודעה ריקה"));
            $('.messages').append($('<li>').text(''));
        } else {
            controller.setMessage(this.chatInput.val());
            chatVeiw.sendChat();
        }
    },
    checkEmpty: function(val) {
        let i;
        if (val.length == 0) {
            return true;
        }
        for (i = 0; i < val.length; i++) {
            if (val.charCodeAt(i) != 32 && val.charCodeAt(i) != 10) {
                break;
            }
        }
        if (i == val.length) {
            return true;
        }
        return false;
    },
    sendChat: function() {
        socket.emit('chat message', controller.getMessage(), controller.getUser());
        this.chatInput.val('');
    }
};

$(document).ready(function() {
    controller.init();

    socket.on('chat message', function(msg, userName) {
        $('.messages').append($('<li>').addClass("liMsg").text(userName));
        $('.messages').append($('<li>').addClass("liMsg").text(msg));
        if($('#chatMessagesArea')[0].scrollHeight - $('#chatMessagesArea').innerHeight() <= $('#chatMessagesArea').scrollTop() + 49) {
            $('#chatMessagesArea').scrollTop(5000);
        }
    });
});
