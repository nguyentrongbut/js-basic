// Cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
    name: "Cloly",
    age: 21,
    male: true,
    "last-name": "but",
    hi: function() {
        console.log("Hello Cloly");
    },
};
// properties
// method
// 2 cách truy xuất giá trị của object 
// 1. Dot notation .
console.log(student.name);
// 2. Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// Thay đổi giá trị của object
student.age = 20;
student.male = "male";
// Thêm 
student.isDeveloper = true;
// is-developer
student["is-developer"] = false;
student.hello = function() {
    console.log("hello");
}
console.log(student);
// Cách xóa giá trị trong Object
delete student["last-name"];
// for in hay dùng cho object for of hay dùng cho mảng
for (let key in student) {
    if(key === "name") {
        console.log("hello name");
    }
    const value = student[key];
    console.log(`${key}:${value}`);
}

// Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// Object.values(object) -> trả về 1 mảng chứa tất cả các value của object
const values = Object.values(student);
console.log(values);
// Object.entries(object) -> trả về 1 mảng nested gồm có key và value
const entries = Object.entries(student);
console.log(entries);
// Object.assign(object)
const a = {
    firstName : "But",
};
const b = {
    lastName: "Trong",
};
const c = Object.assign(a, b);
console.log(c);
// ...
const d = {...a, ...b};
console.log(d);
// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
    brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);
// Object.seal(object) -> cho phép chỉnh sửa key value nhưng không được thêm key value mới
const user = {
    userName: "cloly",
    school: {
        name: "FPT",
        room: {
            name: "IT", 
        },
    },
};
// const newUser = Object.seal(user);
// newUser.userName = "nguyen trong but";
// console.log(newUser);
const newUser = {...user};
// Object.assign()
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// clone nested object
const newUser3 = JSON.parse(JSON.stringify(user));
