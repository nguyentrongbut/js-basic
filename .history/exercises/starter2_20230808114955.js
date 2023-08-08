const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu (e) {
    e.target.classList.toggle("fa-times");
    e.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu (e) {
    // console.log(e.target);
    // even.target.matches
    // selector.contains: kiểm tra element có chứa elem
    if (!menu.contains(e.target)) {
        console.log("co chua");
    }
}