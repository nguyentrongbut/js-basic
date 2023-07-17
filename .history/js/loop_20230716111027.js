// Vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (let i = 0; i < numbers.length; i++) {
    body code
}
*/
for (let i = 0; i < numbers.length; i++) {
    // console.log(`The index is ${i}`);
}
/*
length: 5
i = 0;
i < 5 -> true
i++ -> 1 
result: 0 

i = 1;
1 < 5 -> true
i++ -> 2 
result: 1

i = 2;
2 < 5 -> true
i++ -> 3 
result: 2

i = 3;
3 < 5 -> true
i++ -> 4 
result: 3

i = 4;
4 < 5 -> true
i++ -> 5 
result: 4

i = 5;
5 < 5 -> false
loop end
*/
for (let i = 0; i < numbers.length; i++) {
    // console.log(`The index is ${i}`);
    // console.log(`The value ${numbers[i]}`);
    // Nếu giá trị là 8 thì dừng vòng lặp
    // console.log(`The value ${numbers[i]}`);
    // if (numbers[i] === 8) {
    //     break;
    // }
    if (numbers[i] === 8) {
        continue;
    }
    // console.log(`The value ${numbers[i]}`);
    // Nếu giá trị là 8 thì bỏ qua giá trị đó và chạy nốt phần còn lại
}
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`The value ${numbers[i]}`);
}
// 1. Sao chép mảng dùng vòng lặp for
const cloneArr = [];
for (let i = 0; i < numbers.length; i++) {
    cloneArr.push(numbers[i]);
}
console.log(cloneArr);
// 2. Đảo ngược từ 
const reverseStr = "";
for (let i = )
