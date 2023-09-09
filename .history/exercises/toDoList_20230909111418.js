// window.addEventListener("load", function () {
//     // variables declaration
//     const form = document.querySelector(".todo-form");
//     const todoList = document.querySelector(".todo-list");
//     let todos = localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
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
//         localStorage.length > 0 && localStorage.setItem("todoList", JSON.stringify(todos));
//         // save to localStorage
//         this.elements["todo"].value = "";
//     });

//     // handle remove todo
//     todoList.addEventListener("click", function(e) {
//         if (e.target.matches(".todo-remove")) {
//             const todo = e.target.parentNode;
//             todo.parentNode.removeChild(todo);
//             // remove todo in DOM
//             const todoNext = e.target.previousElementSibling.textContent;
//             const newTodos = todos.filter((item) => item !== todoNext);
//             localStorage.setItem("todoList", JSON.stringify(newTodos));
//         }
//     })
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
  
    // Handle remove todo
    todoList.addEventListener("click", function (e) {
      if (e.target.matches(".todo-remove")) {
        // remove todo in DOM
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
        // remove todo in localStorage
        const todoText = e.target.previousElementSibling.textContent;
        const index = todos.findIndex((item) => item === todoText);
        todos.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todos));
      }
    });
  });