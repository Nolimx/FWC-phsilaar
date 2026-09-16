$(document).ready(function() {

    $("#calculate").on("click", function() {

        var leftValue = $("#left").val();
        var rightValue = $("#right").val();
        var operator = $("#operator").val();

        /* Check empty input */
        if (leftValue === "" || rightValue === "") {
            alert("Error :(");
            return;
        }

        /* Convert to number */
        var a = Number(leftValue);
        var b = Number(rightValue);

        /* Check positive integer >= 0 */
        if (!Number.isInteger(a) ||
            !Number.isInteger(b) ||
            a < 0 ||
            b < 0) {

            alert("Error :(");
            return;
        }

        /* Check division/modulo by zero */
        if ((operator === "/" || operator === "%") && b === 0) {
            alert("It's over 9000!");
            return;
        }

        var result;

        if (operator === "+") {
            result = a + b;
        }
        else if (operator === "-") {
            result = a - b;
        }
        else if (operator === "*") {
            result = a * b;
        }
        else if (operator === "/") {
            result = a / b;
        }
        else if (operator === "%") {
            result = a % b;
        }

        /* Show result */
        alert(result);
        console.log(result);
    });


    /* Alert every 30 seconds */
    setInterval(function() {
        alert("Please, use me...");
    }, 30000);

});