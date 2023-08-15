const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
dropdownSelect.addEventListener("click", function(e) {
    console.log(e.target);
    const dropdownList = e.target.nextElementSibling;
    if (dropdownList) {
        dropdownList.classList.toggle("show");
    }
});
dropdownItems.forEach(item => item.addEventListener("click", function(e) {
    const text = e.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = text;
}));