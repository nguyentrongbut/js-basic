// 1. selector.classList.add("abc")
const container = document.querySelector(".container");
container.classList.add("is-active");
// 2. selector.classList.remove("abc")
container.classList.remove("container");
// 3. selector.classList.contains("container")
console.log(container.classList.contains("container")); // false
console.log(container.classList.contains("is-active")); // true
// 4. selector.classList.toggle("is-active");
if (container)