var newButton = document.getElementById("newButton");
var list = document.getElementById("ft_list");


/* Create a new TO DO */
newButton.addEventListener("click", function() {

    var todoText = prompt("Create a new TO DO:");

    // ถ้ากด Cancel หรือไม่ได้กรอกอะไร
    if (todoText === null || todoText.trim() === "") {
        return;
    }

    createTodo(todoText);

    saveTodos();
});


/* Create TO DO element */
function createTodo(text) {

    var todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;


    /* Click TO DO to delete */
    todo.addEventListener("click", function() {

        var remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();

            saveTodos();
        }
    });


    // เพิ่ม TO DO ไว้ด้านบนสุด
    list.prepend(todo);
}


/* Save TO DO list into Cookie */
function saveTodos() {

    var todos = document.querySelectorAll(".todo");

    var todoList = [];


    for (var i = 0; i < todos.length; i++) {

        todoList.push(todos[i].textContent);
    }


    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todoList)) +
        "; path=/; max-age=31536000";
}


/* Load TO DO list from Cookie */
function loadTodos() {

    var cookies = document.cookie.split("; ");


    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].split("=");


        if (cookie[0] === "todos") {

            var todoList = JSON.parse(
                decodeURIComponent(cookie[1])
            );


            // สร้าง TO DO กลับมาแสดง
            for (var j = todoList.length - 1; j >= 0; j--) {

                createTodo(todoList[j]);
            }
        }
    }
}


/* Load saved TO DOs when page opens */
loadTodos();