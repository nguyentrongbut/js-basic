// Viết 1 function tạo ra thông báo
function createNotification (title = "Welcome to notification") {
    const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image">
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, amet.
        </p>
    </div>
</div>`
// insertAdjacentHTML
    document.body.insertAdjacentHTML("afterbegin", template);
}
const randomData = ["Welcome to js course", "Welcome to this tutorial", "Today is a good day", "My name is Cloly", "I am frontend developer"];
// createNotification();
let lastTitle;
const timer = setInterval(function () {
    const item = document.querySelector(".noti");
    if (item) item.parentNode.removeChild(item);
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    if (lastTitle !== title) {

        createNotification(title);
    }
    
    // createNotification();
    lastTitle = title;
}, 5000);