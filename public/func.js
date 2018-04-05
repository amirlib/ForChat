/** Copy String to Array **/
/*function strToArr(val, len) {
    var arr = new Array;
    for (var    i = 0; i < len; i++) {
        arr[i] = val.charAt(i);
    }
    return arr;
}*/
/** Checks the input of email **/
/*function checkEmail(val) {
    var countA = 0; //ספירת שטרודלים
    var countDots = 0;
    for (var i = 0; i < val.length; i++) { //חוקיות התווים
        if (val.charCodeAt(i) <= 45 || val.charCodeAt(i) == 47 || (val.charCodeAt(i) >= 58 && val.charCodeAt(i) <= 63)
            || (val.charCodeAt(i) >= 91 && val.charCodeAt(i) <= 96) || val.charCodeAt(i) >= 123) {
            return false;
        }
        if (val.charAt(i) == '@') { //ספירת שטרודלים
            countA++;
        }
        if (val.charAt(i) == '.') { //ספירת נקודות
            countDots++;
        }
    }
    if (countA > 1 || countDots > 2) { //אם יותר מידי שטרודלים ו/או נקודות
        return false;
    }
    return true;
}*/
/** Checks the input for Only english and numeric chars **/
function checkUserChars(val) {
    for (let i = 0; i < val.length; i++) {
        if (val.charCodeAt(i) <= 47 || (val.charCodeAt(i) >= 58 && val.charCodeAt(i) <= 64)
            || (val.charCodeAt(i) >= 91 && val.charCodeAt(i) <= 96) || val.charCodeAt(i) >= 123) {
            return false;
        }
    }
    return true;
}
/** Checks if the input is empty **/
function checkEmpty(val) {
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
}
/** check if the user is not empty before sending he chat  */
function checkUserSend(userName) {
    if (userName === "") {
        $('.messages').append($('<li></li>').addClass("error").text("אין אפשרות להשתתף בצ'אט ללא שם מתשמש תיקני"));
        return false;
    }
    return true;
}
/** Check if the 2 passwords are mach **/
/*function check2Pass(val1, val2) {
    var err = false;
    if (val1 != val2 && val2.length >= 4) { //משווה בין שתי הסיסמאות
        errHandler(5);
    } else {
        errHandler(102);
        err = true;
    }
    return err;
}*/
/** Error handler **/
/*var showErrM = "";
var showErrP = "";
var showErrU = "";
function errHandler(numErr) {
    switch (numErr) {
        case 1:
            showErrU = "שם משתמש לא באורך החוקי"
            $('.errUser').text(showErrU);
            break;
        case 2:
            showErrU = "שם משתמש לא חוקי"
            $('.errUser').text(showErrU);
            break;
        case 3:
            showErrP = "הסיסמא לא באורך החוקי"
            $('.errPass1').text(showErrP);
            break;
        case 4:
            showErrP = "הסיסמא לא חוקית"
            $('.errPass1').text(showErrP);
            break;
        case 5:
            showErrP = "הסיסמאות לא תואמות"
            $('.errPass2').text(showErrP);
            break;
        case 6:
            showErrM = "האימייל לא חוקי"
            $('.errEmail').text(showErrM);
            break;
        case 101:
            showErrU = "";
            $('.errUser').text(showErrU);
            break;
        case 102:
            showErrP = "";
            $('.errPass1').text(showErrP);
            $('.errPass2').text(showErrP);
            break;
        case 103:
            showErrM = "";
            $('.errEmail').text(showErrM);
            break;
    }
}*/

/*function checkButReg() {
    if (errUser == true && errEmail == true && errPass1 == true && errPass2 == true) {
        alert("OK!");
    } else {
        alert("False :(");
    }
}*/