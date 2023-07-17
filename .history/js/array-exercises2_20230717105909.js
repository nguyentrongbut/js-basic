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
function re