// Regular expression : Biểu thức chính quy
// 1. 2 cách khai báo với Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
// regex.test(value) -> true or false
console.log(re1.test("hello world")); //true
// 2. Anchor ^ $
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó
/hi/.test("hi"); // true
/hi$/.test("welcome to hi"); // true
/hi$/.test("welcome to hello"); // false
/^hi/.test("hi welcome to hi"); // true
/^hi/.test("welcome to hi"); // false
// 3. ranges []
// [a-z]: các kí tự từ a đến z in thường
// [A-Z]: các kí tự từ A đến Z in HOA
// [0-9]: các số từ 0 đến 9
// [a-z0-9A-Z]: các số từ 0 đến 9 hoặc a -> z hoặc A -> Z
/[a-z]/.test("a"); //true 
/[a-z]/.test("A"); //false 
/[A-Z]/.test("Z"); // true
/[A-Z]/.test("x"); // false
/[0-9]/.test("1000"); // true
/[0-9]/.test("abc1000xyz"); // true
/[0-9]/.test("abc"); // false
