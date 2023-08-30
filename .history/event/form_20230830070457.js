// 1. keydown: hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.which);
    // ascii
    // e.key: key nhập vào
    if (e.key == "Enter") {
        console.log("")
    }
})

// 2. keyup: 