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
        let spaceX = imageWidth / 2 - imageWrapperWidth ;
        imageWidth = imageWidth + spaceX;
        let ratioX = imageWidth / imageWrapperWidth / 2;
        let ratioY = imageHeight / imageWrapperHeight / 2;
        let x = pX * ratioX;
        let y = pY * ratioY;
        console.log(x);
        image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none`;
        // console.log(imageWidth, imageHeight);
        // console.log(imageWrapperWidth, imageWrapperHeight);
    }
});
