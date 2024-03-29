console.log("Array.slice");
// Tạo ra 1 mảng copy của mảng ban đầu
const animal = ["tiger", "lion", "horse", "elephant"];
// slice() tạo ra mảng mới y hệt mảng ban đầu
const animal2 = animal.slice(); 
console.log(animal2); // ['tiger', 'lion', 'horse', 'elephant']
// slice(start) start -> vị trí index ở trong mảng
const animal3 = animal.slice(1);
console.log(animal3); // ['lion', 'horse', 'elephant']
// slice(start, end) start là vị trí bắt đầu, end là vị trí kết thúc
// nó sẽ sao chép từ phần tử start đến phần tử end -1
const animal4 = animal.slice(1, 3); 
console.log(animal4); // ['lion', 'horse']
const animal5 = animal.slice(-2); 
console.log(animal5); // ['horse', 'elephant']

console.log("Array.splice");
// Nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
// const pets2 = pets.splice(0);
// console.log(pets2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa hoặc thay thế
// const pets3 = pets.splice(0, 1);
console.log(pets);
// splice(start, deleteCount, item1, item2, item3, itemN, ...) 
const pets4 = pets.splice(0, 2, "dinasour", "pig");
console.log(pets);
// Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 10, 5, 9];
console.log(random.sort()); // [1, 10, 5, 9, 9999]
// sort(function(a,b))
// function(callback)
const random2 = random.sort(function(a, b) {
    if (a > b) return 1; // sắp xếp theo tăng dần
    if (a < b) return -1; // sắp xếp theo giảm dần
});
const random3 = random.sort((a,b) => a > b ? 1 : -1);
console.log(random3);

console.log("Array.find()");
// nó sẽ trả về phần tử đầu tiên trong mảng thỏa điều kiện
const numbers = [1, 9999, 10, 5, 9];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
// Nếu không tìm thấy thì nó sẽ trả ra kết quả undefined
console.log(findYourNumber); // 9999

console.log("Array.findIndex()");
// nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện
const findYourIndex = numbers.findIndex((element) => element > 10);
// Nếu không tìm thấy thì sẽ trả ra kết quả là -1
console.log(findYourIndex);

// sort bổ sung
const random4 = random.sort((a,b) => a > b ? -1 : 1);
console.log(random4); // [9999, 10, 9, 5, 1]

console.log("Array.map()");
// Duyệt qua các phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// Trả về mảng mới mà các số (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function(value, index, array) {
    return value * 2;
});
console.log(listNumberDouble);

const listFilter = listNumber.map()
console.log("Array.forEach");
// .forEach(callback(value, index, array))
const listNumberTripple = listNumber.forEach((value, index, array) => {
    return value * 3;
});
console.log(listNumberTripple);
// khác nhau giữa map và forEach 
// map return được còn forEach thì không
// map trả ra mảng mới dựa vào mảng ban đầu còn forEach thì không
// forEach không có return nên sẽ chạy mãi thường dùng trong DOM (không có cách nào để dừng forEach)

console.log("Array.filter");
// Dùng để filter (sàng lọc) các phần tử trong mảng thỏa 1 điều kiện nào đó
// .filter(callback(value, index, array))
const greaterThanThree = listNumber.filter(item => item > 3);
console.log(greaterThanThree);