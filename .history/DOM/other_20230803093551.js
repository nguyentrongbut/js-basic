// document.title -> thẻ title của trang web
console.log(document.title); // JS
document.title = "Welcome to JS course";
// document.head 
console.log(document.head);
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
// document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);
// insertBefore
// parentNode.insertBefore(newnode, existingnode)
const ul = document.querySelector
document.body.insertBefore("ul", )