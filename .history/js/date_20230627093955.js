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

new Da