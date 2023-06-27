const now = new Date(); // khởi tạo 1 đối tượng liên quan đến ngày tháng năm
// built-in object (những cái nó đã có sẵn trong js)
console.log(now); //Tue Jun 27 2023 09:23:20 GMT+0700 (Indochina Time)
// Timezone: GMT+0700 (Indochina Time)
// Second: 20
// Minute: 23
// Hour: 9
// Year: 2023
// Month: Jun
// Day: 27
// Day of the week: Tue

// Timestamp & Epoch time
// unix time
// timestamp tính ra kết quả là miliseconds
console.log(now.getTime()); // timestamp 1687833258336
console.log(new Date(0)); // Thu Jan 01 1970 07:00:00 GMT+0700 (Indochina Time)

// 4 cách sử dụng new Date
// new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giỡ
// new Date(date string) -> 
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1687833258336)); //Tue Jun 27 2023 09:34:18 GMT+0700 (Indochina Time)
console.log(new Date("Tue Jun 27 2023 09:34:18 GMT+0700 (Indochina Time)")); //Tue Jun 27 2023 09:34:18 GMT+0700 (Indochina Time)
console.log(new Date(2023, 5, 27, 9, 45))

// Các hàm get trong Date (get có nghĩa là truy xuất lấy thông tin)
const birthday = new Date(2003, 10, 28);
// in ra năm
console.log(birthday.getFullYear()); // 2003
// in ra tháng
// getMonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12(Dec)
console.log(birthday.getMonth()); // 10
// in ra ngày của tháng 1 -> 31
console.log(birthday.getDate()); // 28
// in ra thứ của tuần 
// 0-6: 0: chủ nhật, 6: thứ bảy
console.log(birthday.getDay()); // 5 -> thứ 6
// in ra giờ
console.log(birthday.getHours()); // 0
// in ra phút 
console.log(birthday.getMinutes()); // 0
// in ra giây
console.log(birthday.getSeconds());
// in ra mili giây
console.log(birthday.getMilliseconds()); // 0
// in ra timestamp
console.log(birthday.getTime()); // 1069952400000

// Các hàm set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2000);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after update: ${birthday}`);
console.log(birthday.setTime(1069952400000));

// UTC
console.log(`birthday.getUTCFullYear()); 
console.log(birthday.getUTCMonth()); 
console.log(birthday.getUTCDate()); 
console.log(birthday.getUTCDay()); 
console.log(birthday.getUTCHours()); 
console.log(birthday.getUTCMinutes()); 
console.log(birthday.getUTCSeconds());
console.log(birthday.getUTCMilliseconds());  