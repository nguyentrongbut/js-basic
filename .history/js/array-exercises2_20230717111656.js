// 1. Cho 1 mảng gồm nhiều giá trị [1, 1000, false, null, "cloly", "", undefined, "javascript", [1, 2, 3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
// 2. Cho 1 mảng phức tạp [[1, 2, 3], [false, null], [1, 5, 6, ["javascript"]], [888, 666, [98]]]. Và kết quả mong muốn là [1, 2, 3, false, null, 1, 5, 6, javascript, 888, 666, 98]
const array = [1, 1000, false, null, "cloly", "", undefined, "javascript", [1, 2, 3], NaN];
// new Boolean 
// Boolean
const filterFalsy = array.filter(Boolean);
console.log(filterFalsy);

const complexArray = [[1, 2, 3], [false, null], [1, 5, 6, ["javascript"]], [888, 666, [98]]];
// flat(number)
const result = complexArray.flat(999);
console.log(result);
// 3. Đảo ngược số nguyên. ví dụ 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
// covert to string
// split("") -> [value]
// reverse
// john("")
function reverseNumber(number) {
    const value = (number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(value);
}
reverseNumber(-1234);
reverseNumber(1234);
// 4. Viết chương trình có tên là fizzBuzz với đầu vào là 1 số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho cả 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 2 ===0) {
            console.log("FizzBuzz");
        } else if (i % 2 === 0) {
            console.log("Fizz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        }
    }
}
fizzBuzz(15);
// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự 'vowels' có trong chuỗi.
// vowels là các kí tự u e o a i
// ví dụ "cloly" -> 1
