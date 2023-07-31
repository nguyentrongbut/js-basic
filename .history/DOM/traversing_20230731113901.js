// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const h3 = document.querySelector("h3");
const span = document.querySelector("span");
h3.removeChild()
console.log(span.parentNode.parentNode);
console.log(span.parentElement);
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.parentNode.removeChild(span);
// span.remove();
