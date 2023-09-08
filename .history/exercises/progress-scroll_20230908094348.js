window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset;
    // tính ra chiều cao thật của document
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(`{document.documentElement.scrollHeight}`);
    console.log(`{document.documentElement.clientHeight}`);
})