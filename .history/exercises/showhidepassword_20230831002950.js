window.addEventListener("load", (e) => {
    const togglePassword = document.querySelector(".toggle");
    togglePassword.addEventListener("click", function (e) {
        const input = this.previousElementSibling;
        // this dùng trong fn bình thường k dùng đc trong arrow fn
        const inputType = input.getAttribute("type");
        if(inputType === "password") 
    });
});