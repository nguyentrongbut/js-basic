// Điều kiện
// if (condition) {
//     your code here
// }
const isRich = false;
const myMoney = 100;
if (isRich) {
    console.log("I will buy a new car");
} else if (myMoney > 1000) {
    console.log("i will save my money");
} else {
    console.log("I poor");  
}

// prompt, confirm, alert
// alert("Danger!!!");
// const yourName = prompt("Enter your name", "");
// console.log(yourName); // trả về những gì mình nhập nếu không nhập trả về chuỗi rỗng nếu cancel trả về null
// const isYourMoney = confirm("Is your money?");
// console.log(isYourMoney); // ok true cancel false

const yourAge = prompt("Enter your age:", "");
consoletypeof(yourAge); //check kiểu dữ liệu
if (Number(yourAge) >= 18) {
    console.log("You are eligible to watch the movie");
} else {
    console.log("You are not eligible to watch the movie");
}