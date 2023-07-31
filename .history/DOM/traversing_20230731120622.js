// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove();
// 2. nextElementSibling: tìm tới phần tử kế tiếp vs previousElementSibling: tìm tới 
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 3. childNode vs children
