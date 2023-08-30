window.addEventListener("load", (e) => {
    const togglePassword = document.querySelector(".toggle");
    togglePassword.addEventListener("click", () => {
        const input = this.previousElementSibling;
        console.log(input);
    });
});