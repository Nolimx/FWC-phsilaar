var size = 200;
var color = 0;

var colors = ["red", "green", "blue"];


/* Click balloon */
$("#balloon").on("click", function() {

    size = size + 10;

    /* If bigger than 420px, explode */
    if (size > 420) {
        size = 200;
        color = 0;
    }
    else {
        color = color + 1;

        if (color > 2) {
            color = 0;
        }
    }

    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[color]
    });
});


/* Mouse leaves balloon */
$("#balloon").on("mouseleave", function() {

    /* Size cannot be smaller than 200px */
    if (size > 200) {
        size = size - 5;
    }

    /* Reverse color */
    color = color - 1;

    if (color < 0) {
        color = 2;
    }

    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[color]
    });
});