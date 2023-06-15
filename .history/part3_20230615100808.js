//number() -> number
console.log(Number("4.5")); //4.5
console.log(Number("4")); //4
console.log(Number("abcdef")); //NaN
console.log(Number("")); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number(false)); //0
console.log(Number(true)); //1

//string() -> string
console.log(String(4.5)); //"4.5"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(NaN)); //"NaN"
console.log(String(false)); //"false"
console.log(String(true)); //"true"

//boolean() -> true or false
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(false)); //false
//khác những giá trị này trả về true

//type coercion
console.log(10 + 10); //20
console.log(10 + "10"); //1010 js sẽ cố chuyển đổi số sang string 10 -> "10" + "10" -> "1010" 
//trong js console.log(String(10) + "10") 
console.log("10" + 10); //1010
//không phải dấu + thì sẽ cố chuyển đổi sang number
console.log("10" - 10); //0
console.log("10" / 10); //1
console.log("10" * 10); //100
console.log(null + ""); //"null"
console.log(null + undefined); //NaN
console.log("" - 1); //-1
console.log(false - true); //-1
console.log(false + true); //1
console.log(null + 10); //10

// toán tử so sánh > < >= <=
console.log(5 > 7); //false
console.log(50 > 7); //true
console.log(6 >= 6); //true
console.log(6 <= 6); //true

// toán tử logic cơ bản && || !
console.log(5 > 7 && 8 > 3); // false
console.log(5 > 7 || 8 > 3); // true
const amIWrong = false;
console



