// thêm xóa sửa node trong js
// 1, Tạo ra Element trong Js : document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> body
// document.querySelector("body")
const body = document.querySelector("body");
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quisquam! Ad nobis qui ipsam tenetur laudantium commodi perferendis nesciunt repellat esse hic aliquam, reiciendis rerum. Deleniti molestiae odit quo aspernatur!";
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "cloly");
// Bài tập tạo ra HTML như đã minh họa ở file HTML
const card = document.createElement("div");
card.classList.add("card");
const cardImg = document.createElement("img");
cardImg.setAttribute("src", "https://source.unsplash.com/random");
cardImg.setAttribute("class", "card-img");
card.appendChild(cardImg);
body.appendChild(card);
// 3. document.createTextNode
const text = document.createTextNode("Hello my name is cloly");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);
// 4. element.cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);
// 5. element.hasChildNodes -> kiểm tra có phần tử con hay không, có -> true, không thì trả về false
console.log(document.querySelector)