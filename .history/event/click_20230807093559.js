// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick() {
    console.log("click me")
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick()); click me khi chưa nhấn
// Đúng
button.addEventListener("click", handleClick);
// bubbling: sự nổi bọt
span