window.addEventListener("load", function(){
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList = document.querySelector(".tab-list");
    const tab = document.querySelector(".tab");
    const tabOffsetLeft = tab.offsetLeft;
    [...tabItems].forEach(item => item.addEventListener("click", handleTabClick))
    function handleTabClick(e) {
        [...tabItems].forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
        if (e.target.offsetLeft)
        let leftSpacing = e.target.offsetLeft - tabOffsetLeft;
        tabList.scroll(leftSpacing / 2, 0);
    }
})