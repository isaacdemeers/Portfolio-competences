
var ressource = document.querySelector(".card--ressources");
var display = document.querySelector(".card--ressources--display");
var close = document.querySelector(".close");


ressource.addEventListener("click", function () {
    if (display.classList.contains("active")) {
        display.classList.remove("active");
    } else {
        display.classList.add("active");
    }
});
close.addEventListener("click", function () {
    if (display.classList.contains("active")) {
        display.classList.remove("active");
    } else {
        display.classList.add("active");
    }
});

