// addEventListener
const button = document.querySelector(".button");
function handleClick() {
    console.log("click me")
}
// Lỗi sai khi dùng fun
button.addEventListener("click", handleClick);