var left = document.getElementById("left");
var operator = document.getElementById("operator");
var right = document.getElementById("right");
var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function() {

    var leftValue = left.value;
    var rightValue = right.value;
    var op = operator.value;

    if (leftValue === "" || rightValue === "") {
        alert("Error :(");
        return;
    }

    var a = Number(leftValue);
    var b = Number(rightValue);

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && b === 0) {
        alert("It's over 9000!");
        return;
    }

    var result;

    if (op === "+") {
        result = a + b;
    }
    else if (op === "-") {
        result = a - b;
    }
    else if (op === "*") {
        result = a * b;
    }
    else if (op === "/") {
        result = a / b;
    }
    else if (op === "%") {
        result = a % b;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);