/*
    <div class="lightbox">
        <div class="lightbox-content">
            <img src="https://plus.unsplash.com/premium_photo-1691960547805-7143654bd06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="" class="lightbox-img">
        </div>
    </div>
*/ 
const images = document.querySelectorAll(".content img");
images.forEach(item => item.addEventListener("click", handleZoomImage));
function handleZoomImage (e) {
    const image = e.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <img src="${image}">
    </div>
</div>`
document.body.insertAdjacentHTML("beforeend", template);
}
document.body.addEventListener("")