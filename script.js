const PASSWORD = document.querySelector("#password");
const REPASSWORD = document.querySelector("#repassword");

const ERROR = document.querySelector(".same-pass");

REPASSWORD.onkeyup = function() {
    if (PASSWORD.value === REPASSWORD.value) {
        ERROR.textContent = "";
    } else {
        ERROR.textContent = "Password does not match.";
    }
}