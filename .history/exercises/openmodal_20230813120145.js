/* <div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>
*/
const button = document.querySelector(".button");
const template = ` <div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
</div>
</div>`
button.addEventListener("click", function() {
    document.body.insertAdjacentHTML("beforeend", template);    
});
// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener("click", handleCloseModal);
// function handleCloseModal(e) {
//     console.log(e.target);
// }
// 
document.body.addEventListener("click", function(e) {
    if(e.target.matches(".modal-close")) {
        const modal = e.target.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    } else if (e.target.matches(".modal"))
}) 