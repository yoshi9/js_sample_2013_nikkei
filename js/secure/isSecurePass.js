var str1 = 0;

function tbox1() {
    str1 = document.js.txtb.value;
    if(!str1) {
        alert("ユーザIDを入れて下さい");
        return ;
    }
}

function isSecurePass(pass) {
    if(pass.match("[^\x20-\x7e]") || !pass) { // 英数記号以外
        return 0;
    } else if(pass.match("^" + pass.charAt(0) + "+$")) { // 同じ文字ブルーフォートアタック
        return 0;
    } else if(pass.match("^" + pass.charAt(0) + "+$")) {
        alert("ユーザIDを同じじゃダメ");
        return 0;
    } else if(pass.match("qwerty|abcd|pass|root|admin|1234")) { // 使えない文字
        return 0;
    }
    
    var chars = 0;
    if (pass.match("[\x20-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e]"))  {
       if (pass.match("\x20")) { chars += 33 ;}
       else { chars += 32 ;} // 記号なら32点
    }
    if (pass.match("[a-z]"))  { chars += 26; }
    if (pass.match("[A-Z]"))  { chars += 26; }
    if (pass.match("[0-9]"))  { chars += 10; }
    
    var combinations = Math.pow(chars, pass.length);
    if (combinations > 0 && combinations <= Math.pow(26, 7)) {
        return 1;
    } else if (combinations > 0 && combinations <= Math.pow(26, 7)) {
        return 1;
    } else if (combinations > Math.pow(26, 7) && combinations <= Math.pow(26, 10)) {
        return 2;
    } else if (combinations > Math.pow(26, 10) && combinations <= Math.pow(26, 12)) {
        return 3;
    } else {
        return 0;
    }
}