// 1. keydown: hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
// input.addEventListener("keydown", (e) => {
//     console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.which);
    // ascii
    // e.key: key nhập vào
    // if (e.key == "Enter") {
    //     console.log("you hit enter");
    //     // e.defaultPrevented(); không sử dụng được
    //     // return;
    // } else {
    //     console.log(e.key);
    // }
    // if (e.key === "Shift") {
    //     console.log("working-keydown");
    // }
// })

// 2. keyup: sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
// input.addEventListener("keyup", function(e) {
//     console.log(e.key);
    // e.defaultPrevented(); không sử dụng được vì không hiểu hành động nhả ra 
// })

// 3. keypress: sự kiện này xảy ra khi nhấn phím
// Thứ tự ưu tiên keydown -> keypress -> keyup
// keypress sẽ ignore các phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
// input.addEventListener("keypress", function(e) {
//     console.log(e.key);
//     if (e.key === "Shift") {
//         console.log("working-keypress");
//     }
// })
// 4. change : xảy ra khi gõ xong rồi nhấn Enter hoặc nhấn chuột ra ngoài 1 lần  
// input.addEventListener("change", (e) => {
//     console.log("working");
// })

// // 5. focus nhấn vào trong
// input.addEventListener("focus", function(e) {
//     console.log("input is focusing");
// });

// // 6. blur nhấn vào trong rồi nhấn ra ngoài
// input.addEventListener("blur", function(e) {
//     console.log("input is blur");
// });
// 7. submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function(e) {

});