// 1. Viết 1 fn kiểm tra value có phải là object hay không?
// typeof value === "object"
// {} [] null
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value) && va) {
        return true;
    }
    return false;
}
// {}
console.log(isObject(null));