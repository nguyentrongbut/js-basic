window.addEventListener("load", function() {
    const link = [...document.querySelectorAll(".menu-link")];
    link.forEach(item => item.addEventListener("mouseenter", handleHoverLink));
    const line = document.c
    function handleHoverLink (e) {
        console.log(e.target);
    }
})