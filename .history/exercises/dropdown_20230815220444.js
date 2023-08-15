const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
dropdownSelect.addEventListener("click", function(e) {
    console.log(e.target);
    const dropdownList = e.target.nextElementSibling;
    if (dropdownList) {
        dropdownList.classList.toggle("show");
    }
});
dropdownItems.forEach(item )