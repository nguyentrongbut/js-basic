//viết fn so sánh 2 số a b tìm ra số lớn hơn

function compareNumber(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please enter a valid number");
        return; // undefined nếu không để return khi đk đúng thì vẫn chạy math.mã
    } 
    return Math.max(a, b);
}

console.log(compareNumber("abc"));