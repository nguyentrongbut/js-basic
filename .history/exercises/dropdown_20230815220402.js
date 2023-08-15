const dropdownSelect = document.querySelector(".dropdown__select");
const dropdown
dropdownSelect.addEventListener("click", function(e) {
    console.log(e.target);
    const dropdownList = e.target.nextElementSibling;
    if (dropdownList) {
        dropdownList.classList.toggle("show");
    }
})