window.addEventListener("load", (e) => {
    const togglePassword = document.querySelector(".toggle");
    togglePassword.addEventListener("click", function (e) {
        const input = this.previousElementSibling;
        // this dun
        console.log(input);
    });
});