// 1. insertAdjacentText
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position, text")
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");
// 2. insertAdjacentElement
const strong = 