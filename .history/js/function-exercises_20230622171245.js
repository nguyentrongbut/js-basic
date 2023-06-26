//viết fn so sánh 2 số a b tìm ra số lớn hơn

function compareNumber(a, b) {
    let biggestNumber = "a > b"
    a < b ? "a lớn hơn b" : a == b ? "a bằng b";
    return a, b;
}
const a = prompt("Enter your first number:", "");
const b = prompt("Enter your second number:", "");
const result = compareNumber(a, b);
console.log(`Số lớn hơn là: ${}`)