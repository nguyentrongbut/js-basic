// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick() {
    console.log("click button")
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick()); click me khi chưa nhấn
// Đúng
button.addEventListener("click", handleClick);
// bubbling: sự nổi bọt
// event: e
span.addEventListener("click", function(e) {
    console.log("click span");
    e.stopImmediatePropagation();
});
span.addEventListener("click", function() {
    console.log("click span 2");
});
// sự kiện click chạy trong ra ngoài
document.body.addEventListener("click", function () {
    console.log("click body");
});