// document.title -> thẻ title của trang web
console.log(document.title); // JS
document.title = "Welcome to JS course";
// document.head 
console.log(document.head);
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("name", "width=device-width", intial-scale=1.0);
document.head.appendChild(meta);