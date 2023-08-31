window.addEventListener("load", function() {
    const link = [...document.querySelectorAll(".menu-link")];
    link.forEach(item => item.addEventListener("mouseenter", handleHoverLink));
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    function handleHoverLink (e) {
        const { left, top, width, height } = e.target.getBoundingClient
    }
})