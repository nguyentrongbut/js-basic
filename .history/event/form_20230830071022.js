// 1. keydown: hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.which);
    // ascii
    // e.key: key nhập vào
    if (e.key == "Enter") {
        console.log("you hit enter");
        // e.defaultPrevented(); 
        // return;
    } else {
        console.log(e.key);
    }
})

// 2. keyup: sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function(e) {
    cons
})