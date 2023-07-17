// by value vs by referrences
// by value -> giá trị thực sự của bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 == num2); // true
// by referrences -> nói tới vùng bộ nhớ 
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 == arr2); // false
// JSON : Javascript Object Notation
/*
 "key": value,
 "key": value,
 "key": value
*/
// JSON.stringify (value) -> convert giá trị sang dưới dạng JSON string
// toString()
// [1, 2, 3].toString() -> "1, 2, 3"
// JSON.stringify
// JSON.parse