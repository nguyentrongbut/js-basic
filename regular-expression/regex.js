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
/[a-zA-Z0-9]/.test("1abcA"); // true 
/[^a-z]/.test("a"); // false 
// 4. Meta characters
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d tương đương với [^0-9]
/\D/.test("123"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại với \w nó sẽ tương đương  [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các kí tự khoảng trẳng: spaces, tab, newline
/\s/.test(" "); // true
// \S: các kí tự không phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp với newline (xuống hàng)
// \t: khớp với lại tab character
// .:khớp với tất cả mọi thứ ngoại trừ newline(\n)
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n)

// 5. Quantifiers: {n} {n, m} + ? *
// string.match(regex) "abc".match(/\w/) -> []
// {n}: số lượng nhất định
// {n, m}: số lượng trong khoảng từ n đến m 
// +: lấy 1 hoặc nhiều ký tự thỏa điều kiện
const str1 = "Welcome to 2021222";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour?";
// ?: có thể có hoặc không có kí tự nào đó
console.log(str2.match(/colou?r/g)); // ["color", "colour"]
// flag 
// g: global
// i: case insensitive
// m: multipe lines
// *: không có hoặc là nhiều    
const str3 = "12345";
console.log(str3.match(/\d*/g));
// 6. group ()
/(\d{3})(\w+)/.test("123"); // false
/(\d{3})?(\w+)/.test("123"); // true
// 7. Escaping \ / [ ] ( ) { } ? + * | . ^ $ 
// 8. Boundaries \b \B
/\?/.test("?");
/\*/.test("*");
// \b: khi đứng một mình thì sẽ khớp
"my name is cloly".match(/\bcloly/g); // ['cloly']
// \B
"my name iscloly".match(/\Bcloly/g); // ['cloly']
// 9. 
const str4 = "hello welcome to my hello";
console.log(str4.replace("hello", "hi")); // hi welcome to my hello
// string.replace(regex, value);
str4.replace(/hello/g, "cloly"); // cloly welcome to my cloly
"welcome 1234567".match(/\d+/g);