"Hello world";
const name = "C";
console.log(name);
console.log(typeof name);
const newStr = "Hello " + name + " !";
console.log(newStr);
// ${variable} 
const newStr2 = `Hello ${name} !`;
console.log(newStr2);
// có ghi nhận xuống hàng
// .length
console.log(newStr2.length);
const myStr = "Frontend Developer";
console.log(myStr.split(""));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Frontend"));
console.log(myStr.endsWith("Developer"));
console.log(myStr.includes("nd"));
console.log(myStr.indexOf("e"));
console.log(myStr.lastIndexOf("e"));
console.log(myStr.replace("Developer", "Designer"));
console.log(myStr.repeat(5));
console.log(myStr.slice(0,8)); // Frontend
console.log(myStr.slice(0));
console.log(myStr.slice(-5));
console.log(myStr.slice(9999)); //
console.log(myStr.trim()); //remove space left and right
console.log(myStr.trimStart()); //remove space left 
console.log(myStr.trimEnd()); //remove space right
console.log(myStr.ch)