window.addEventListener("load", function () {
    const input = this.document.querySelector(".input-search");
    const items = this.document.querySelectorAll(".dropdown-item");
    input.addEventListener("input", handleHighlight);
    // input nó sẽ lấy giá trị hiện tại mỗi khi chúng ta gõ 
    function handleHighlight(e) {
        let filter = e.target.value;
        filter = filter.toLowerCase();
        [...items].forEach((item) => {
            const text = item.textContent;
            const index = text.toLowerCase().indexOf(filter);
            console.log(index);
            if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
                console.log(`text.substring(0,index): ${text.substring(0,index)}`);
                item.innerHTML = `${text.substring(
                    0,
                    index
                )}<span class="primary">${text.substring(
                    index,
                    index + filter.length
                )}</span>${text.substring(index + filter.length)}`;
            }
        });
    }
});
