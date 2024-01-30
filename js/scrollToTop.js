/*
    Made by Elif Berfin Deniz
    Handed in on: 16-02-2023
 */


$(document).ready(function () {
    let topButton = document.getElementById("toTopBtn");

    window.onscroll = function () {
        topButton.addEventListener('click', function onClick() {
            toTop();
        });

        showButton()

        function showButton() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topButton.style.display = "block";

            } else {
                topButton.style.display = "none";

            }
        }

        function toTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    };
});

