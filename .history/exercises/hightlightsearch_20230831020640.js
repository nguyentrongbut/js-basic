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
            const index = text
        });
    };
});