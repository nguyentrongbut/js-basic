const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach(item => item.addEventListener("click", handleClickAccordion));
const activeStr = "is-active";
function handleClickAccordion (e) {
    // console.log(e.target);
    const content = e.target.nextElementSibling;
    console.log(content.sc)
    content.classList.toggle(activeStr);
    const icon = e.target.querySelector(".icon");
    // console.log(icon);
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}