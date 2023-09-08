// window.addEventListener("load", function () {
//     const input = this.document.querySelector(".input-search");
//     const items = this.document.querySelectorAll(".dropdown-item");
//     input.addEventListener("input", handleHighlight);
//     // input nó sẽ lấy giá trị hiện tại mỗi khi chúng ta gõ 
//     function handleHighlight(e) {
//         let filter = e.target.value;
//         filter = filter.toLowerCase();
//         [...items].forEach((item) => {
//             const text = item.textContent;
//             const index = text.toLowerCase().indexOf(filter);
//             if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
//                 item.innerHTML = `${text.substring(
//                     0,
//                     index
//                 )}<span class="primary">${text.substring(
//                     index,
//                     index + filter.length
//                 )}</span>${text.substring(index + filter.length)}`;
//             }
//         });
//     }
// });
window.addEventListener("load", function () {
    const input = this.document.querySelector(".input-search");
    const items = this.document.querySelectorAll(".dropdown-item");
    input.addEventListener("input", handleHighlight);

    function handleHighlight(e) {
        let filter = e.target.value;
        filter = filter.toLowerCase();
        
        const keywords = filter.split(" "); // Tách chuỗi thành các từ
        
        [...items].forEach((item) => {
            const text = item.textContent;
            let shouldHighlight = true; // Xác định xem có nên tô sáng item hay không

            // Kiểm tra mỗi từ khóa
            keywords.forEach(keyword => {
                if (!text.toLowerCase().includes(keyword)) {
                    shouldHighlight = false;
                }
            });

            if (shouldHighlight) {
                const highlightedText = text.replace(new RegExp(keywords.join("|"), "gi"), match => `<span class="primary">${match}</span>`);
                item.innerHTML = highlightedText;
            } else {
                item.innerHTML = text;
            }
        });
    }
});
