console.log("Array.slice");
// Tạo ra 1 mảng copy của mảng ban đầu
const animal = ["tiger", "lion", "horse", "elephant"];
// slice() tạo ra mảng mới y hệt mảng ban đầu
const animal2 = animal.slice(); 
console.log(animal2); // ['tiger', 'lion', 'horse', 'elephant']
// slice(start) start -> vị trí index ở trong mảng
const animal3 = animal.slice(1);
console.log(animal3); // ['lion', 'horse', 'elephant']
// 