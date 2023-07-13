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
const animal = animal.slice(1, 3); 
console.log(animal4); // ['lion', 'horse']
