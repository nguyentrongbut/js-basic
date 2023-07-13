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
const pets4 = pets.splice(0, 2, "");

