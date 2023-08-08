// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick() {
    console.log("click button")
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick()); click me khi chưa nhấn
// Đúng
// button.addEventListener("click", handleClick, {
//     capture: true
// });
// bubbling: sự nổi bọt
// event: e
// span.addEventListener("click", function(e) {
//     console.log("click span");
//     e.stopImmediatePropagation();
// }, {
//     capture: true
// });
// span.addEventListener("click", function() {
//     console.log("click span 2");
// }, {
//     capture: true
// });
// // sự kiện click chạy trong ra ngoài
// document.body.addEventListener("click", function () {
//     console.log("click body");
// }, {
//     capture: true
// });
// target vs currentTarget
button.addEventListener("click", function(e) {
    console.log(`event.target: ${e.target}`);
    // event.target: nó sẽ chọn chính xác element mà mình click tới
    console.log(`event.currentTarget: ${e.currentTarget}`);
    // event.currentTarget: nó sẽ chọn phần tử mà mình click
});
// event.preventDefault();
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("click me");
    // selector.style
    // event.target.style
    console.log(e.target);
    console.log(e.target.style);
    e.target.style.color = "red";
    // background-color -> backgroundColor
    // 
})
