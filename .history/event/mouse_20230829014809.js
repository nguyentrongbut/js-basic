const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mousemove di chuyển đến 1 phần tử 
// button.addEventListener("mousemove", function() {
//     console.log("mousemove");
// });
// mouseover: nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
// button.addEventListener("mouseover", function() {
//     console.log("mouseover");
// });
// mouseenter: nó sẽ chạy khi rê chuột vào phần tử
// button.addEventListener("mouseenter", function() {
//     console.log("mouseenter");
// });
// mouseleave: nó sẽ chạy khi rê chuột vào phần tử ro
button.addEventListener("mouseenter", function() {
    console.log("mouseenter");
});