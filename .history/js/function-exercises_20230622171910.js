//viết fn so sánh 2 số a b tìm ra số lớn hơn

function compareNumber(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") return 0;
    return Math.max(a, b);
}
result = compareNumber();
const a = prompt("Enter your fist number:", "");
const b = prompt("Enter your second number:", "");
console.log(`biggest number is {ré}`)

