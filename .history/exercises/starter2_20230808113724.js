const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu (e) {
    e.target.classList.add("fa-times");
    e.target.classList
    menu.classList.toggle("is-show");
}