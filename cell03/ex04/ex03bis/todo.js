var list = $("#ft_list");


/* Create a new TO DO */
$("#ft_new").on("click", function() {

    var text = prompt("Create a new TO DO:");

    /* If Cancel or empty */
    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text.trim());

    saveTodos();
});


/* Create TO DO element */
function createTodo(text) {

    var todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);


    /* Click TO DO to remove */
    todo.on("click", function() {

        var remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();

            saveTodos();
        }
    });


    /* Put new TO DO at the top */
    list.prepend(todo);
}


/* Save TO DOs into cookie */
function saveTodos() {

    var todos = [];

    $(".todo").each(function() {
        todos.push($(this).text());
    });


    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/; max-age=31536000";
}


/* Load TO DOs from cookie */
function loadTodos() {

    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].split("=");

        if (cookie[0] === "todos") {

            var todos = JSON.parse(
                decodeURIComponent(cookie[1])
            );

            /*
             * createTodo() uses prepend(),
             * so load from last to first
             */
            for (var j = todos.length - 1; j >= 0; j--) {
                createTodo(todos[j]);
            }

            break;
        }
    }
}


/* Load saved TO DOs when page opens */
loadTodos();