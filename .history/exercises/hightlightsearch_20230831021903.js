window.addEventListener("load", function () {
    const input = this.document.querySelector(".input-search");
    const items = this.document.querySelectorAll(".dropdown-item");
    input.addEventListener("keypress", handleHighlight);
    let filter = "";
    function handleHighlight (e) {
        filter += e.key;
        filter = filter.toLowerCase();
        [...items].forEach(item => {
            const text = item.textContent.toLowerCase();
            const index = text.indexOf(filter);
            console.log(index);
            if (index >= 0 && text.startsWith(filter.charAt(0))) {
                item.innerHTML = `${text.substring(0, index)} <span class="primary">${text.substring(index, index + filter.length)}</span> ${}` 
            }
        });
    };
});