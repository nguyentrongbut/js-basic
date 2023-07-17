// 1. Đảo ngược 1 chuỗi. vd: "My name is Cloly" -> "Cloly is name My";
function reverseString(str) {
    if(!str) return null;
    // split(" ")
    return str.split(" ").reverse().join()
}
reverseString("My name is Cloly");