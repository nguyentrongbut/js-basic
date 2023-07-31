// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
span.parentNode.removeChild(span);
// span.remove();
// 2. nextElementSi