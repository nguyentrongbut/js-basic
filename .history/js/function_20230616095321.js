// function (hàm)
// Khai báo function
// Cú pháp (Syntax): function functionName (parameters) tham số {
// Your code here
// }
function sum(a = 0, b = 0) {
    const total = a + b;
    return total;
    // return value
    // return function trả về gì đó nếu không viết return thì kết quả trả về undefined
}
// function sum(parameter = defaultValue) {}
// sum() : invoke function
console.log(sum(5));
// invoke function sum(arguments) Đối số
// Tham số là function
// Lưu function