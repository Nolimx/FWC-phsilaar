var button = document.getElementById("button");

button.addEventListener("click", function() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
        "rgb(" + red + ", " + green + ", " + blue + ")";
});