// 1. DOM là gì?
// Document Object Model
// DOM attribute
// DOM node
// 2. Selecting nodes
// 2.1 document.querySelector("selector") -> Trả về 1 node nếu tồn tại selector đó, ngược lại trả về null
// selectors: .header, p, body, #heading
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector("#heading");
console.log(singleNode4);
// 2.2 document.query.SelectorAll("selector") -> trả về 1 nodelist chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng forEach
// nó giống array là có thể loop nhưng không sử dụng được các phương thức như push, pop, shift, ...
const multiNodes = document.querySelectorAll(".items");
for (let i = 0; i < multiNodes.length; i++) {
    if (i == 2)  console.log(multiNodes[i]);
}
// console.log(multiNodes);
// 2.3 document.getElementByClassName("className") -> trả về 1 HTMLCollection chứa danh sách các node, nếu không trả về empty
const classNode = document.getElementsByClassName("items");
console.log(classNode);
// 2.