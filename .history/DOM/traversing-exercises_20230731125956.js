// // Active modal
// const modal = document.querySelector(".modal");
// if (modal) {
//     setTimeout(function() {
//         modal.classList.add("is-show");
//     }, 3000);
// }
/*
<div class="modal">
        <div class="modal-content">
            <div class="modal-close">
                <i class="fa fa-times"></i>
            </div>
            <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, at. Quam voluptatum cupiditate ea. Corrupti odit quaerat aliquam molestias ad. Quam aut quos iste maxime sed fuga corporis repellat, explicabo labore vel, repudiandae deserunt dignissimos doloribus dolores velit commodi. Perspiciatis, excepturi a nisi animi sequi exercitationem aliquid explicabo impedit minus.</div>
            <div class="modal-action">
                <button class="modal-submit">Confirm</button>
                <button class="modal-cancel">Cancel</button>
            </div>
        </div>
    </div>
*/
const template = `<div class="modal">
<div class="modal-content">
    <div class="modal-close">
        <i class="fa fa-times"></i>
    </div>
    <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, at. Quam voluptatum cupiditate ea. Corrupti odit quaerat aliquam molestias ad. Quam aut quos iste maxime sed fuga corporis repellat, explicabo labore vel, repudiandae deserunt dignissimos doloribus dolores velit commodi. Perspiciatis, excepturi a nisi animi sequi exercitationem aliquid explicabo impedit minus.</div>
    <div class="modal-action">
        <button class="modal-submit">Confirm</button>
        <button class="modal-cancel">Cancel</button>
    </div>
</div>
</div>`;
const body = document.body;
body.insertAdjacentHTML("afterbegin", template);