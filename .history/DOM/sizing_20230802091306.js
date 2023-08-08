//  
function log(value) {
    console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của phần tử
log(boxed.offsetHeight); // chiều cao của phần tử
log(boxed.offsetLeft); // vị trí của nó so với bên trái (m)
log(boxed.offsetTop); // vị trí của nó so với phía trên
log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha