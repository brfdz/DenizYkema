$(document).ready(function () {
    let user = localStorage.getItem("user");
    document.getElementById("logged-in-user").innerHTML = "Logged in as: " + user;

    if (!localStorage.getItem("user")){
        window.location.href = "/deniz_ykema_assig1/index.html";
    }
});