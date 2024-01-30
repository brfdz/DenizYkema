/*
    Made by Manon Ykema
    Handed in on: 16-02-2023
 */

let activities = document.getElementsByClassName("activity");
let checkbox = document.getElementsByClassName("checkbox-pop");
let museum = document.getElementsByClassName('museum');
let sightSeeing = document.getElementsByClassName('sight-seeing');
let restaurant = document.getElementsByClassName('restaurant');
let noDisplay = "none";
let display = "block";

const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

$(document).ready(function () {
    assignRandomOrder();
});

function assignRandomOrder() {
    for (var i = 0; i < activities.length; i++) {
        activities[i].style.order = String(generateRandomInteger());
    }
}

function generateRandomInteger() {
    return Math.floor(Math.random() * grid.length);
}

document.addEventListener("click", function () {
    let checkedValues = $('.checkbox-pop:checkbox:checked').map(function () {
        return this.value;
    }).get();

    if (checkedValues.includes("show-all")
        && checkedValues.includes("museum")
        || checkedValues.includes("sight-seeing")
        || checkedValues.includes("restaurant")) {
        checkbox[0].checked = false;
        setDisplayStyles(activities, noDisplay);

        if (checkedValues.includes("museum")) {
            setDisplayStyles(museum, display);
        }
        if (checkedValues.includes("sight-seeing")) {
            setDisplayStyles(sightSeeing, display);
        }
        if (checkedValues.includes("restaurant")) {
            setDisplayStyles(restaurant, display);
        }
    } else {
        checkbox[0].checked = true;
        setDisplayStyles(activities, display);
    }
});

function setDisplayStyles(museum, noDisplay) {
    for (var i = 0; i < museum.length; i++) {
        museum[i].style.display = noDisplay;
    }
}



