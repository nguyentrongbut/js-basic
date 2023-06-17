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
// Tính trung bình của a và b -> a+
