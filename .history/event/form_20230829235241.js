// 1. keydown: khi nhấn xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
    // e.key là key nhập vào
})