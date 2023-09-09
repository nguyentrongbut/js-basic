window.addEventListener("load", function() {
    function renderSweetAlert() {
        const template = `<div class="sweet-alert">
        <i class="fa fa-check swwet-icon"></i>
        <p class="sweet-text">Done</p>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
    }
    const button = document.querySelector(".button");
    button.addEventListener("click", function() {
        renderSweetAlert();
        const swwetItem = document.querySelector(".sweet-ale")
    })
})  