// 1. Đảo ngược 1 chuỗi. vd: "My name is Cloly" -> "Cloly is name My";
function reverseString(str) {
    if(!str) return null;
    // split(" ")
    const newStr = str.split(" ");
    console.log(newStr);
}
reverseString("My name is Cloly");