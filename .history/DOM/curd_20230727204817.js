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
div.textContent = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quisquam! Ad nobis qui ipsam tenetur laudantium commodi perferendis nesciunt repellat esse hic aliquam, reiciendis rerum. Deleniti molestiae odit quo aspernatur!"