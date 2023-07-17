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
// JSON.stringify([1, 2, 3]) -> "[1, 2, 3]"
// [1, 2, 3]
// JSON.parse (value)
// JSON.parse("[1, 2, 3]") -> [1, 2, 3]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1, 2, 3]"))
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str == arr2Str); // true

// clone
const student = ["a", "b", "c", "d", "e"];
// student.pop(); 
// console.log(student); // ['a', 'b', 'c', 'd']
// 1.sử dụng phương thức slice()
const sliceStudents = student.slice();
console.log(sliceStudents);
// 2. spread operator [...array]
const spreadStudents = [...student];
console.log(spreadStudents);
const fromStudents = Array.from(student);
console.log(fromStudents);
const concatStudents = student.concat([]);
console.log(concatStudents);
// [1, 2] [3, 4] [5, 6] -> [1, 2, 3, 4, 5, 6]
// concat
// 1. array1.concat(array2, array3, arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2. spread operator
// [...array]

const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);

// destructuring array
const toys = ["ball", ] 