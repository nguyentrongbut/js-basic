"Hello world";
const name = "C";
console.log(name);
console.log(typeof name);
const newStr = "Hello " + name + " !";
console.log(newStr);
// ${variable} 
const newStr2 = `Hello ${name} !`;
console.log(newStr2);
// có ghi nhận xuống hàng
// .length
console.log(newStr2.length);
// Hello C ! -> 0 - 8 -> length: 9
// index là vị trí của từng ký tự trong chuỗi bao gồm cả khoảng trắng 