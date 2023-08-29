window.addEventListener("load", function () {
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleHoveImage);

    function handleHoveImage (e) {
        const pX = e.pageX;
        const pY = e.pageY;
    }
})