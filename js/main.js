/*
    Made by Manon Ykema
    Handed in on: 16-02-2023
 */

let redirect = false;
let status;

$(document).ready(function () {

    $("#password-check").click(function () {
        checkPassword();
    });

    $("#submit-btn").click(function () {
        let username = $("input[name='username']").val();

        if (username.length > 0){
            checkPassword(username);
            if (redirect){
                var url = window.location.href;
                window.location.href = url.concat("html/home.html");
            }
        }
    });
});

function setStatus(status){
    document.getElementById("password-check").style.color = status;
}

function checkPassword(username) {
    let password = $("input[name='password']").val();
    let upperCase = (password.match(/[A-Z]/g) || []).length;
    let numbers = (password.match(/[0-9]/g) || []).length;

    if (password.length >= 8 && upperCase >= 2 && numbers >= 1) {
        redirect = true;
        setStatus(status = "green");
        localStorage.setItem("user", username);
    } else {

        alert("Incorrect password input." +
            "\n\nMake sure to: " +
            "\n1. Have a minimum of 8 characters. " +
            "\n2. Have two uppercase characters. (A-Z) " +
            "\n3. Have one number. (0-9)");

        setStatus(status = "red");
    }
}

