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
const myStr = "Frontend ;Developer";
const quote= /\s*(?:;|$)\s/;
const strList = myStr.split(quote);
console.log(strList);
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Frontend"));
console.log(myStr.endsWith("Developer"));
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);