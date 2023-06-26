//viết fn so sánh 2 số a b tìm ra số lớn hơn

function compareNumber(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please enter a valid number");
        return 0; // undefined nếu để return; nếu không để return khi đk đúng thì vẫn chạy math.max
    } 
    return Math.max(a, b);
}

console.log(compareNumber("abc"));

// in hoa chữ cái đầu trong chữ ví dụ: cloly -> Cloly
// capitalize
function capitalize(word = "") {
    if (word.length === 0) return null;
    // covert to lower case first
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    // console.log(newWord);
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`
}
console.log(capitalize("CLOLY"));

// viết hàm sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
function useCallback(a, b, callback) {
    let max = compareNumber(a, b);
    callback(max);
}
function print