window.addEventListener("load", function() {
    // variables declaration
    const form = document.querySelector(".todo-form");
    form.addEventListener("submit", function(e)) {
        e.preventDefault();
        const todoVal = this.element["todo"].value;
        this.element["todo"].value = "";
    }
})