window.addEventListener("load", function () {
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleHoveImage);
    const imageWrapper = document.querySelector(".image-wrapper");
    const image = document.querySelector(".image");
    let imageWrapperWidth = imageWrapper.offsetWidth;
    let imageWrapperHeight = imageWrapper.offsetHeight;
    function handleHoveImage(e) {
        const pX = e.pageX;
        const pY = e.pageY;
        image.style = "width: auto; height: auto; max-height: unset";
        let imageWidth = image.offsetWidth;
        let imageHeight = image.offsetHeight;
        let x = pX;
        let y = pX;
        console.log(x);
        image.style = `left: ${0}px; top: ${0}px; width: auto; height: auto; max-height: unset`;
        // console.log(imageWidth, imageHeight);
        // console.log(imageWrapperWidth, imageWrapperHeight);
    }
});
