const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach(item => item.addEventListener("click", handleTabClick));
function handleTabClick (e) {
    // console.log(e.target);
    // xóa hết tất cả class ở các tab-item  
    [...tabItems].forEach(item => item.classList.remove("active"));
    // sau đó add class active
    e.target.classList.add("active");
}