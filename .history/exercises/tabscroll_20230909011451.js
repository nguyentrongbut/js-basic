window.addEventListener("load", function(){
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList = document.querySelector(".tab-list");
    const tab = document.querySelector(".tab");
    const tabOffsetLeft = tab.offsetLeft;
    const tabNext = document.querySelector(".tab-next");
    const tabPrev = document.querySelector(".tab-prev");
    const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;   
    let deltaScroll = 40;
    [...tabItems].forEach(item => item.addEventListener("click", handleTabClick))
    function handleTabClick(e) {
        [...tabItems].forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
        let leftSpacing =  e.target.offsetLeft;
        if (e.target.offsetLeft >= tabOffsetLeft) {
            leftSpacing = e.target.offsetLeft - tabOffsetLeft;
        };
        tabList.scroll(leftSpacing / 2, 0);
    }
    tabList.addEventListener("wheel", function(e) {
        const delta = e.deltaY;
        this.scrollLeft += delta;
        if (this.scrollLeft > 0) {
            tabPrev.classList.remove("disabled");
        } else {
            tab
        }
        if (this.scrollLeft >= tabScrollWidth) {
            tabNext.classList.add("disabled");
        } else if (this.scrollLeft <= 0) {
            tabPrev.classList.add("disabled");
        } 
    });
    tabNext.addEventListener("click", function(e) {
        tabPrev.classList.remove("disabled");
        tabList.scrollLeft += deltaScroll;
        if (tabList.scrollLeft >= tabScrollWidth) {
            this.classList.add("disabled");
        }
    })
    tabPrev.addEventListener("click", function(e) {
        tabNext.classList.remove("disabled");
        tabList.scrollLeft -= deltaScroll;
        if (tabList.scrollLeft <= 0) {
            this.classList.add("disabled");
        }
    })
});