// Viết 1 function tạo ra thông báo
function createNotification () {
    const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image">
    <div class="noti-content">
        <h3 class="noti-title">Welcome to notification</h3>
        <p class="noti-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, amet.
        </p>
    </div>
</div>`
// insertAdjacentHTML
document.body.insertAdjacentHTML("afterbegin", template);
}
// createNotification();
const timer = setInterval(function () {
    const item = document.querySelector(".noti") {
        if (item) {
            
        }
    }
    // createNotification();
}, 4000);