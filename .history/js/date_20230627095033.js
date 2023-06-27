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

// Các hàm get trong Date
const birthday = new Date(2003, 10, 28);
// in ra năm
console.log(bi)