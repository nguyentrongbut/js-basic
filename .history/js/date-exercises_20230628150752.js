// 1. viết chương trình nhập vào năm sinh và in ra số tuổi
// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào. ví dụ thời gian làm bài tập là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`

// 1 currentYear - year
// function getAge(year) {
//     if (typeof year !== "number") return 0;
//     const now = new Date();
//     const currentYear = now.getFullYear(); // 2023
//     return currentYear - Number(year);
// }
// const year = prompt("Enter your Year: ", "");
// const yourAge = getAge(year);
// console.log(`Your are ${yourAge} years old this year`);

// 2
// function countdown(minutes = 1) {
//     let seconds = minutes * 60; // 1800
//     let counter = 0;
//     const timer = setInterval(function() {
//         counter += 1;
//         console.log(counter);
//         if (counter === seconds) {
//             clearInterval(timer);
//             console.log("Your time is end!");
//         }
//     }, 1000);
// }

// countdown(1);

// 3 currentTime - time
function timeSince(date) {
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // in ra số giây
    console.log(seconds);
    let timer = seconds / 31536000;
    console.log(timer);
    if (timer > 1) {
        console.log(`${timer} year ago`);
    }
    timer = seconds / 2678400;
    if (timer > 1) {
        console.log(`${timer} month ago`);

    }
}
// 1 năm = 365 ngày * 24 giờ * 60 phút * 60 giây = 31536000 giây
// 1 tháng = 31 ngày * 24 giờ * 60 phút * 60 giây = 2678400 giây
// 1 tuần = 7 ngày * 24 giờ * 60 phút * 60 giây = 604800 giây
// 1 ngày = 1 ngày * 24 giờ * 60 phút * 60 giây = 86400 giây
// 1 giờ = 1 giờ * 60 phút * 60 giây = 3600 giây
// 1 phút = 60 giây

timeSince("Wed Jun 28 2023 14:00:00 GMT+0700 (Indochina Time)");