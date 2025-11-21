
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    // Change icon (☰ → ✖)
    hamburger.textContent =
        mobileMenu.classList.contains("open") ? "✖" : "☰";
});

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".c-grid");
    const dots = document.querySelectorAll(".dot");

    grid.addEventListener("scroll", () => {
        const cardWidth = grid.querySelector(".c-card").offsetWidth;
        const scrollLeft = grid.scrollLeft;
        const index = Math.round(scrollLeft / cardWidth);

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    });
});

// MAIN ACCORDIONS
document.querySelectorAll(".accordion").forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("open");
        
        let content = acc.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// SUB ACCORDIONS
document.querySelectorAll(".sub-accordion").forEach(sub => {
    sub.addEventListener("click", () => {
        sub.classList.toggle("open");
        
        let content = sub.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const scrollBtn = document.getElementById("scrollToggleBtn");

    if(!scrollBtn){
        console.error("Scroll button not found!");
        return;
    }

    function updateScrollButton() {
        const currentY = window.scrollY || window.pageYOffset;
        const fullHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Change arrow depending on position
        if (currentY < fullHeight - 10) {
            scrollBtn.innerHTML = "⬇";
        } else {
            scrollBtn.innerHTML = "⬆";
        }
    }

    scrollBtn.addEventListener("click", () => {
        const fullHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollBtn.innerHTML === "⬇") {
            window.scrollTo({ top: fullHeight, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // Update arrow continuously
    window.addEventListener("scroll", updateScrollButton);
    window.addEventListener("touchmove", updateScrollButton, { passive: true });

    updateScrollButton();
});



