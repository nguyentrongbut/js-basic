const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach(item => item.addEventListener("click", handleTabClick));
function handleTabClick (e) {
    // console.log(e.target);
    e.target.classList.add("")
}