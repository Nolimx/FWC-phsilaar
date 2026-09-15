var balloon = document.getElementById("balloon");

var size = 200;
var color = 0;

var colors = ["red", "green", "blue"];

balloon.addEventListener("click", function() {
    size = size + 10;

    if (size > 420) {
        size = 200;
        color = 0;
    } else {
        color = color + 1;

        if (color > 2) {
            color = 0;
        }
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
});

balloon.addEventListener("mouseleave", function() {
    if (size > 200) {
        size = size - 5;
    }

    color = color - 1;

    if (color < 0) {
        color = 2;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
});