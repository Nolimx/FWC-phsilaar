$("#colorButton").on("click", function() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    $("body").css("background-color", color);
});