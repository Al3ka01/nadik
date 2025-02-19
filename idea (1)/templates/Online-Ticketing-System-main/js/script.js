document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".gallery-wrapper");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // Дублируем элементы в начале и в конце
    function duplicateItems() {
        const items = Array.from(wrapper.children);
        items.forEach((item) => {
            let clone = item.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    duplicateItems(); // Вызываем функцию дублирования

    let scrollAmount = 300; // Шаг прокрутки
    let isScrolling = false;

    function scrollNext() {
        if (isScrolling) return;
        isScrolling = true;
        wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });

        setTimeout(() => {
            if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
                wrapper.scrollLeft = 0; // Перемещаемся в начало
            }
            isScrolling = false;
        }, 600);
    }

    function scrollPrev() {
        if (isScrolling) return;
        isScrolling = true;
        wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });

        setTimeout(() => {
            if (wrapper.scrollLeft <= 0) {
                wrapper.scrollLeft = wrapper.scrollWidth / 2; // Перемещаемся в конец
            }
            isScrolling = false;
        }, 600);
    }

    nextBtn.addEventListener("click", scrollNext);
    prevBtn.addEventListener("click", scrollPrev);

    // 🔄 Автоматическая прокрутка
    let autoScroll = setInterval(scrollNext, 3000);

    // Останавливаем автопрокрутку при наведении мыши
    wrapper.addEventListener("mouseenter", () => clearInterval(autoScroll));
    wrapper.addEventListener("mouseleave", () => autoScroll = setInterval(scrollNext, 3000));
});
