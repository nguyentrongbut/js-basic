// 1. keydown: khi nhấn xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.keyCode)
    // e.key: key nhập vào
})