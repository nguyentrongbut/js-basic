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
// nó có thể loop: forEach
// nó giống array