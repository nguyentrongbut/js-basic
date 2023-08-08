const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = ["#ffa400", "#00aefd", "#07a787", "#ffb86c", "#2979ff", "#e74c3c"];
function handleChangeColor () {
    // document.body.setAttribute("style", "background-color: red");
    // document.body.style.backgroundColor = "red";
    // lấy random màu từ mảng colors
    // yoursArray[Math.floor(Math.random())]
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundClip = color;
}