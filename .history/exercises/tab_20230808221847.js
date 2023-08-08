const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach(item => item.addEventListener("click", handleTabClick));
function handleTabClick (e) {
    // console.log(e.target);
    // xóa hết tất cả class ở các tab-item  
    [...tabItems].forEach(item => item.classList.remove("active"));
    // sau đó add class active vào tab hiện tại
    e.target.classList.add("active");
    const tabNumber = e.target.dataset.tab;
    console.log(tabNumber);
    [...tabContents].forEach(item => item.classList.remove("active"));
    [...tabContents].
}