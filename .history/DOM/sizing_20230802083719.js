// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
    console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của phần tử
log(boxed.offsetHeight); // chiều cao của phần tử
log(boxed.offset)