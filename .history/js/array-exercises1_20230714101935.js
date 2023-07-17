// 1. Đảo ngược 1 chuỗi. vd: "My name is Cloly" -> "Cloly is name My";
function reverseString(str) {
    if(!str) return null;
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Cloly"));

// 2. Đảo ngược 1 chuỗi bao gồm các kí tự. vd: "i love" -> "evol i"
function reverseWord(str) {
    if(!str) return null;
    const arrStr = str.split(" ").map(item => item.split("").reverse().join());

}