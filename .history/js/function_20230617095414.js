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
// Lưu function vào 1 biến rồi gọi sau này
function add(a = 0, b = 0) {
    console.log(a + b);
    return a + b;
}
add(500, 1000);
const sum2 = add; // gán function add cho biến sum 2 nhưng chưa được gọi
sum2(300, 400);
// Tham số là function
// Tính trung bình của a và b -> (a + b) / 2
// fn: function
function average(a, b, fn) {
    const total = fn(a, b);
    return total / 2;
}
let result = average(200, 300, sum);
console.log(result);

// function declaration là function có khai báo (ex: fn có tên average, add, ...)
// Anonymous function(function expression) (fn không có tên)
const logName = function () {
    console.log("your name");
}
// đây là anonymous fn
logName();
// anonymous function không bị hoisting

// IIFE -> immediately invoked function execution (gọi hàm ngay lập tức) (viết xong chạy ra luôn)
(function(a = 3, b = 5) {
    console.log("this is IIFE function");
    total = a + b;
    console.log(`total: ${total}`);
    return tao
})();