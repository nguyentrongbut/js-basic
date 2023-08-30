// 1. keydown: khi nhấn xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.keyCOde)
    // e.key: key nhập vào
})