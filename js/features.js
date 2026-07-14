// ==============================
// AUTH GUARD
// ==============================

if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}


// ==============================
// CATEGORY FILTER
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const featureCards  = document.querySelectorAll(".feature-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        featureCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

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
