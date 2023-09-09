// window.addEventListener("load", function () {
//     // variables declaration
//     const form = document.querySelector(".todo-form");
//     const todoList = document.querySelector(".todo-list");
//     let todos = localStorage
//         ? JSON.parse(localStorage.getItem("todo-list"))
//         : [];
//     if (Array.isArray(todos) && todos.length > 0) {
//         [...todos].forEach((item) => createTodoItem(item));
//     }
//     function createTodoItem(title) {
//         const template = `<div class="todo-item">
//         <span class="todo-text">${title}</span>
//         <i class="fa fa-trash todo-remove"></i>
//     </div>`;
//         todoList.insertAdjacentHTML("beforeend", template);
//     }
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const todoVal = this.elements["todo"].value;
//         // main code
//         createTodoItem(todoVal);
//         todos.push(todoVal);
//         localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
//         // save to localStorage
//         this.elements["todo"].value = "";
//     });
// });
window.addEventListener("load", function () {
    // Variables declaration
    const form = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    let todos = JSON.parse(localStorage.getItem("todoList")) || [];
    // console.log("localStorage", localStorage);

    // console.log("todos", todos);
    if (Array.isArray(todos) && todos.length > 0) {
      [...todos].forEach((item) => createTodoItem(item));
    }
    function createTodoItem(title) {
      const template = `<div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="fa fa-trash todo-remove"></i>
    </div>`;
      todoList.insertAdjacentHTML("beforeend", template);
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const todoVal = this.elements["todo"].value;
      if (!todoVal) return;
      // Main code
      createTodoItem(todoVal);
      todos.push(todoVal);
      localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
      // save to localStorage
    this.elements["todo"].value = "";
});