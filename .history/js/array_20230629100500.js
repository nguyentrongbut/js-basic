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
// length -> trả độ dài của mảng
console.log(`array.length: ${st}`)