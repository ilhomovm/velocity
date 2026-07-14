// ==============================
// AUTH GUARD
// ==============================

if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}


// ==============================
// INDUSTRY TABS
// ==============================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels  = document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabPanels.forEach(panel => panel.classList.remove("active"));

        button.classList.add("active");

        const tab = button.getAttribute("data-tab");
        const target = document.querySelector(`.tab-panel[data-panel="${tab}"]`);

        if (target) target.classList.add("active");

    });

});


// ==============================
// FAQ ACCORDION
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        faqItems.forEach(i => i.classList.remove("active"));

        if (!isOpen) {
            item.classList.add("active");
        }

    });

});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
});

revealElements.forEach(el => observer.observe(el));
