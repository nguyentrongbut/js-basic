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
// plain Object -> true else return false
console.log(isObject({}));

// 2. {a: 1, b:2} -> [["a", 1], ["b", 2]]
function objectToArray(object) {
    // check nếu không phải object thì dừng
    if (!isObject(object)) return;
    // nếu là object thì xử lý
    // return Object.entries(object);
    // [a, b]
    const values = Object.keys(object)
} 
console.log(objectToArray({a: 1, b: 2}));