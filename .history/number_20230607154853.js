// Số nguyên 1 2 3 999 
// Số thập phân 3.4 4.5
console.log(5 + 7);
// string console màu đen, number màu xanh
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1));//5
console.log(parseInt(number2));//4.8
console.log(parseFloat(number1));//5
console.log(parseFloat(number2));//4.8
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3));//10
console.log(Math.floor(number2));//4
console.log(Math.ceil(number2));//5
console.log(Math.round(number2));//5
console.log(Math.round(number2));//5
console.log(parseFloat((1 / 3).toFixed(2)));//0.33
console.log(Math.ceil(Math.random() * 10)); // trả về số ngẫu nhiên từ 1 - 9
console.log(`Max: ${Math.max(1,2,3)}`); // 3
console.log(`Min: ${Math.min(1,2,3)}`); // 1
console.log(Math.max()); // -Infinity
console.log(Math.min()); //Infinity
console.log(Math.pow(3, 2)); //3^2
cú pháp
Math.pow(base, exponent)
Sao chép vào clipboard
Thông số
base
Số cơ sở.

exponent
Số mũ.

Giá trị trả về
Một số đại diện basecho sức mạnh của exponent. Trả về NaNmột trong các trường hợp sau:

exponentlà NaN.
baselà NaNvà exponentkhông phải là 0.
baselà ±1 và exponentlà ± Infinity.
base < 0và exponentkhông phải là số nguyên.
Sự miêu tả
Math.pow()tương đương với **toán tử, ngoại trừ Math.pow()chỉ chấp nhận số.

Math.pow(NaN, 0)(và tương đương NaN ** 0) là trường hợp duy nhất NaNkhông lan truyền thông qua các phép toán — nó trả về 1mặc dù toán hạng là NaN. Ngoài ra, hành vi trong đó baselà 1 và exponentkhông hữu hạn (±Infinity hoặc NaN) khác với IEEE 754, quy định rằng kết quả phải là 1, trong khi JavaScript trả về NaNđể duy trì khả năng tương thích ngược với hành vi ban đầu của nó.

Bởi vì pow()là một phương thức tĩnh của Math, hãy sử dụng nó như Math.pow()một phương thức của một Mathđối tượng bạn đã tạo ( Mathkhông phải là một hàm tạo).

ví dụ
Sử dụng Math.pow()
// Simple cases
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Fractional exponents
Math.pow(4, 0.5); // 2 (square root of 4)
Math.pow(8, 1 / 3); // 2 (cube root of 8)
Math.pow(2, 0.5); // 1.4142135623730951 (square root of 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (cube root of 2)

// Signed exponents
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Signed bases
Math.pow(-7, 2); // 49 (squares are positive)
Math.pow(-7, 3); // -343 (cubes can be negative)
Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real
Math.pow(-7, 1 / 3); // NaN

// Zero and infinity
Math.pow(0, 0); // 1 (anything ** ±0 is 1)
Math.pow(Infinity, 0.1); // Infinity (positive exponent)
Math.pow(Infinity, -1); // 0 (negative exponent)
Math.pow(-Infinity, 1); // -Infinity (positive odd integer exponent)
Math.pow(-Infinity, 1.5); // Infinity (positive exponent)
Math.pow(-Infinity, -1); // -0 (negative odd integer exponent)
Math.pow(-Infinity, -1.5); // 0 (negative exponent)
Math.pow(0, 1); // 0 (positive exponent)
Math.pow(0, -1); // Infinity (negative exponent)
Math.pow(-0, 1); // -0 (positive odd integer exponent)
Math.pow(-0, 1.5); // 0 (positive exponent)
Math.pow(-0, -1); // -Infinity (negative odd integer exponent)
Math.pow(-0, -1.5); // Infinity (negative exponent)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: only Math.pow(NaN, 0) does not result in NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN




