// 1. viết chương trình nhập vào năm sinh và in ra số tuổi
// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào. ví dụ thời gian làm bài tập là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`

// 1 currentYear - year
function getAge(year) {
    if (typeof year)
    const now = new Date();
    const currentYear = now.getFullYear(); // 2023
    return currentYear - Number(year);
}
const year = prompt("Enter your Year: ", "");
const yourAge = getAge(year);
console.log(`Your are ${yourAge} years old this year`);