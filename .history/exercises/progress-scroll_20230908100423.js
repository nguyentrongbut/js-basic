const progress = document.querySelector(".progress");
window.addEventListener("scroll", function() {
    // khoảng cách của scrollbar so với 
    const scrollTop = window.pageYOffset;
    // tính ra chiều cao thật của document
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const width = scrollTop / height * 100;
    progress.style.width = `${width}%`;
})