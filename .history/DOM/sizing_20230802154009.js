// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
    console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của phần tử
log(boxed.offsetHeight); // chiều cao của phần tử
log(boxed.offsetLeft); // vị trí của nó so với bên trái
log(boxed.offsetTop); // vị trí của nó so với phía trên
log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha
// 2. clientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth);  // độ rộng của phần tử trừ đi border và thanh cuộn (scrollbar) nếu có.
log(boxed.clientHeight);  // chiều cao của phần tử trừ đi border và thanh cuộn (scrollbar) nếu có.
log(boxed.clientLeft);  //  vị trí của nó so với bên trái border    
log(boxed.clientTop);  //  vị trí của nó so với phía trên border    
// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log(window.innerHeight); 
log(window.outerHeight);
log(window.innerWidth); 
log(window.outerWidth);
// 4. selector.getBoundingClientRect() -> lấy tọa độ, kích thước của phần tử
log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái (margin)
// top: vị trí của khối so với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối cộng left
// width: độ rộng
// height: chiều cao
// Sự khác nhau giữa Node List và HTML Collection
const li = document.getElementsByTagName("li");
const li2 = document.querySelectorAll("li");
log(li);
log(li2);
// Điểm giống: có thể truy cập bằng index, có độ dài(length)
// HTML Collection: không sử dụng được forEach sử dụng được for
for (let i = 0; i < li.length)
// NodeList: sử dụng được forEach