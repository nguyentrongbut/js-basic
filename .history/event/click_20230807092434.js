// addEventListener
const button = document.querySelector(".button");
function handleClick() {
    console.log("click me")
}
button.addEventListener("click", function() {
    console.log("click me");
});