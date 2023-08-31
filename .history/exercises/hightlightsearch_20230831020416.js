window.addEventListener("load", function () {
    const input = this.document.querySelector(".input-search");
    const items = this.document.
    input.addEventListener("keypress", handleHighlight);
    let filter = "";
    function handleHighlight (e) {
        filter += e.key;
        filter = filter.toLowerCase();
        console.log(filter);
    };
});