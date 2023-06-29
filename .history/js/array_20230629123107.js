//  Mảng 
const a = "a";
const b = "b";
const c = "c";
const d = "d";
// 2 cách tạo mảng 
// array literal
const students1 = ["cloly", "lily", "clover"];
// array constructor
const students2 = new Array();
// ví dụ 1 mảng 
// Mảng phức tạp [0, false, undefined, null, "cloly", ["cloly", false, 1200, []] ]
// Mảng đơn giản [0, false, undefined, null, "cloly"]
// [1,2,3,4,5] ["a", "b", "c"] [false, true, true]
// [] : empty array -> mảng rỗng
const students = ["cloly", "lily", "clover"];
// 0, 1, 2
// index : vị trí của phần tử (giá trị) trong mảng và nó bắt đầu từ 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng -> student1[index]
console.log(students1[0]);
console.log(students1[1]);
console.log(students1[3]); // undefined
// Lấy phần tử cuối cùng trong mảng = độ dài của mảng - 1 -> array.length - 1
console.log(students1[students1.length - 1]); // lấy phần tử cuối trong mảng
// students1.length = 0;
console.log(students1);
// Phương thức hay dùng của mảng
// arrayName.method

// length -> trả độ dài của mảng
console.log(`array.length: ${students1.length}`);

// reverse() -> đảo ngược giá trị trong mảng
console.log("array.reverse:");
console.log(students1.reverse());

// join -> nối các phần tử trong mảng thành string
console.log("array.join:");
console.log(students1.join());
console.log(students1.join(" "));

// includes -> kiểm tra mảng đó có chứa phần tử nào đó không
console.log("array.includes:");
console.log(students1.includes("cloly")); // true
console.log(students1.includes("abc")); // false

// indexOf -> trả về vị trí của phần tử tìm thấy đầu tiên
console.log("array.indexOf():");
console.log(students1.indexOf("cloly"));

// lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log("array.lastIndexOf():");
console.log(students1.lastIndexOf("cloly"));

// push -> thêm phần tử vào cuối mảng
console.log("array.push():");
console.log(students1.push("charon"));
console.log()