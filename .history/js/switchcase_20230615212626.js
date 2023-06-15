const fruit = "orange";
switch (fruit) {
    case "apple":
        console.log("U like to eat apple");
        break;
    case "watermelon": // có thể viết chung nếu 1 trong 2 đúng sẽ thực hiện câu lệnh
    case "lemon":
        console.log("U like to eat lemon and watermelon");
        break;
    default: //khác 
        console.log("U like to eat orange");
        break;
}
// nếu không có break tất cả câu lệnh sẽ chạy (nhảy)
//Ternary operator
const yourAge = 18;
let message = yourAge >= 18 ? "U are adult" : "U are still a child";
console.log(message);
let message2 = yourAge >=18 ? ""