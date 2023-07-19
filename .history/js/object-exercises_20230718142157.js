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
// plan
console.log(isObject(null));