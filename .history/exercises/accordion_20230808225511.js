const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach(item => item.addEventListener("click", handleClickAccordion));
const activeStr = "is-active";
function handleClickAccordion (e) {
    // console.log(e.target);
    e.target.nextElementSibling.classList.toggle(activeStr);
    const icon = e.target.querySelector(".icon");
    // console.log(icon);
    
}