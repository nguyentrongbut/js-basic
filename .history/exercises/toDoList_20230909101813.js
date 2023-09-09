window.addEventListener("load", function() {
    // variables declaration
    function createTodoItem () {
        const template = `<div class="todo-item">
        <span class="todo-text">$</span>
        <i class="fa fa-trash todo-remove"></i>
    </div>`;
    }
    const form = document.querySelector(".todo-form");
    form.addEventListener("submit", function(e)) {
        e.preventDefault();
        const todoVal = this.element["todo"].value;
        // main code
        this.element["todo"].value = "";
    }
})