// addEventListener
const button = document.querySelector(".button");
function handleClick() {
    console.log("click me")
}
// Lỗi sai khi dùng function vào eventListe
button.addEventListener("click", handleClick);