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
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// replaceChild
// node.replaceChild(newnode, oldnode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// covert HTML Collection, NodeList to Array
const li = document.getElementsByTagName("li");
// console.log(li);
// li.forEach((item) => item);
// Array.from(HTML collection or NodeList)
// [...HTMLCOLLECT], [...NodeList]
[...li].forEach((item) => item);
console.log(li);
// selector