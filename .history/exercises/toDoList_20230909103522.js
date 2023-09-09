window.addEventListener("load", function() {
    // variables declaration
    const todoList = document.querySelector(".todo-list");
    let todos = localStorage ? this.localStorage[];
    function createTodoItem (title) {
        const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove"></i>
    </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
    }
    const form = document.querySelector(".todo-form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoVal = this.elements["todo"].value;
        // main code
        createTodoItem(todoVal);
        todos.push(todoVal);
        localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
        // save to localStorage
        this.elements["todo"].value = "";
    })
})