// addEventListener
const button = document.querySelector(".button");
function handleClick() {
    console.log("click")
}
button.addEventListener("click", function() {
    console.log("click me");
});