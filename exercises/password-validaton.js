window.addEventListener("load", function () {
    const passwordInput = document.querySelector(".input");
    passwordInput.addEventListener("input", function (e) {
        const value = e.target.value;
        const checkLengthClass =
            e.target.parentNode.querySelector(".check-length");
        const checkUpperClass =
            e.target.parentNode.querySelector(".check-upper");
        const checkNumberClass =
            e.target.parentNode.querySelector(".check-number");
        const checkSpecialClass =
            e.target.parentNode.querySelector(".check-special");
        const checkItems = e.target.parentNode.querySelectorAll(".check-item");
        if (!value) {
            [...checkItems].forEach((item) => {
                item.classList.remove("active");
                item.classList.remove("unactive");
            });
            return;
        }
        if (value.length < 8) {
            checkLengthClass.classList.add("unactive");
            checkLengthClass.classList.remove("active");
        } else {
            checkLengthClass.classList.add("active");
            checkLengthClass.classList.remove("unactive");
        }

        passwordInputClass(checkUpperClass, value, /[A-Z]/);
        passwordInputClass(checkNumberClass, value, /[0-9]/);
        passwordInputClass(checkSpecialClass, value, /[$@%^&*(){}!.[\]]/);
    });

    function passwordInputClass(selector, value, regex) {
        if (!regex.test(value)) {
            selector.classList.add("unactive");
            selector.classList.remove("active");
        } else {
            selector.classList.add("active");
            selector.classList.remove("unactive");
        }
    }
});