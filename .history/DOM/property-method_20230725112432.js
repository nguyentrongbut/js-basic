// 1. selector.getAttribute("attribute")
// selector: 1 cái
// attribute -> thuộc tính href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach(item => {
    console.log(item.getAttribute("class"));
})
console.log(li);

// 1. selector.setAttribute("attribute", value) -> set giá trị cho attribute 

