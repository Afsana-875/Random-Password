const passwordBox=document.getElementById("passid");
const length=16;
const UpperCase="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const LowerCase="abcdefghijklmnopqurstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()_+=-/[]{}~";
const allChars=UpperCase+LowerCase+number+symbol;
function createPassword(){
    let password="";
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
