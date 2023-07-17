// 1. Đảo ngược 1 chuỗi. vd: "My name is Cloly" -> "Cloly is name My";
function reverseString(str) {
    if(!str) return null;
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Cloly"));

// 2. Đảo ngược 1 chuỗi bao gồm các kí tự. vd: "i love" -> "evol i"
function reverseWord(str) {
    if(!str) return null;
    const arrStr = str.split(" ").map(item => item.split("").reverse().join("")).reverse().join(" ");
    console.log(arrStr);
}
reverseWord("i love");

// 3. In hoa chữ cái đầu trong chữ ví dụ: "my name is cloly" -> "My Name Is Cloly"
function capitalizeWord(word = "") {
    if (word.length === 0) return null;
    // covert to lower case first
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    // console.log(newWord);
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`
}
function capitalizeStr(str) {
    if(!str) return null;
    // str.split(" ").map(item => capitalizeWord(item)).join(" ")
    const result = str
    .split(" ")
    .map(capitalizeWord)
    // .map(item => capitalizeWord(item))
    .join(" ");
    console.log(result);
}
capitalizeStr("My name is cloly");
