window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset;
    // tính ra chiều cao thật của document
    const height =   - document.documentElement.clientHeight;
    console.log(`1: ${document.documentElement.scrollHeight}`);
    console.log(`2: ${document.documentElement.clientHeight}`);
    console.log(height);
})