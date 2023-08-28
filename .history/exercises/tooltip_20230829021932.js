window.addEventListener("load", function() {
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter", (e) => {
        const title = e.target.dataset.tooltip;
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "tooltip-text";
        tooltipDiv.textContent = title;
        document.body.appendChild(tooltipDiv);
    const cords = e.target.getBoundingClientRect();
    const {top, left} = cords;
    const top = cords.top;
    })
});