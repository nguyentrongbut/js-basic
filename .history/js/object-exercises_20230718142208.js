// 1. Viết 1 fn kiểm tra value có phải là object hay không?
// typeof value === "object"
// {} [] null
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
// {}
// plain Object -> tur
console.log(isObject(null));