// by value vs by referrences
// by value -> giá trị thực sự của bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 == num2); // true
// by referrences 
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 == arr2); // false