window.addEventListener("load", function () {
    const searchInput = document.querySelector(".header__input");
    const items = document.querySelectorAll(".header__hotSearch--link");

    searchInput.addEventListener("input", handleSearch);

    function handleSearch(e) {
        const filter = e.target.value.toLowerCase(); // Chuyển filter về chữ thường

        [...items].forEach((item) => {
            const text = item.textContent.toLowerCase(); // Chuyển text về chữ thường

            // Sử dụng indexOf() để tìm vị trí đầu tiên của filter trong text
            const index = text.indexOf(filter);

            if (index >= 0 && text.startsWith(filter)) {
                // Nếu filter được tìm thấy, hiển thị item và highlight
                item.innerHTML = `${text.substring(
                    0,
                    index
                )}<span class="primary">${item.textContent.substring(
                    index,
                    index + filter.length
                )}</span>${text.substring(index + filter.length)}`;
                item.style.display = "block";
            } else {
                // Nếu không tìm thấy filter, ẩn item
                item.style.display = "none";
            }
        });
    }
});


