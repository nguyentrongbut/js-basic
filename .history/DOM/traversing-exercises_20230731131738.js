// // Active modal

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
//2. const template = `<div class="modal">
// <div class="modal-content">
//     <div class="modal-close">
//         <i class="fa fa-times"></i>
//     </div>
//     <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, at. Quam voluptatum cupiditate ea. Corrupti odit quaerat aliquam molestias ad. Quam aut quos iste maxime sed fuga corporis repellat, explicabo labore vel, repudiandae deserunt dignissimos doloribus dolores velit commodi. Perspiciatis, excepturi a nisi animi sequi exercitationem aliquid explicabo impedit minus.</div>
//     <div class="modal-action">
//         <button class="modal-submit">Confirm</button>
//         <button class="modal-cancel">Cancel</button>
//     </div>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
// const modal = document.querySelector(".modal");
// if (modal) {
//     setTimeout(function() {
//         modal.classList.add("is-show");
//     }, 3000);
// }
// 3.
const modal = document.createElement("div");
modal.classList.add("modal");   
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("div");
modalClose.classList.add("modal-close");
modalContent.appendChild(modalClose);
const btnClose = document.createElement("i");
btnClose.className = "fa fa-times";
modalClose.appendChild(btnClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, at. Quam voluptatum cupiditate ea. Corrupti odit quaerat aliquam molestias ad. Quam aut quos iste maxime sed fuga corporis repellat, explicabo labore vel, repudiandae deserunt dignissimos doloribus dolores velit commodi. Perspiciatis, excepturi a nisi animi sequi exercitationem aliquid explicabo impedit minus.";
modalContent.appendChild(modalDesc);
modalAction = document.createElement()

document.body.appendChild(modal);

