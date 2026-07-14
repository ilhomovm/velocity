// ==============================
// AUTH GUARD
// ==============================

if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}


// ==============================
// TEAM AVATARS — image fallback
// ==============================

const avatars = document.querySelectorAll(".team-avatar[data-avatar]");

avatars.forEach(avatar => {

    const url = avatar.getAttribute("data-avatar");

    // Set CSS variable for background-image
    avatar.style.setProperty("--avatar-url", `url("${url}")`);

    // Rasm mavjudligini tekshirish (preload orqali)
    const img = new Image();

    img.onload = function () {
        // Rasm muvaffaqiyatli yuklandi — CSS o'zi ko'rsatadi
        avatar.classList.add("has-image");
    };

    img.onerror = function () {
        // Rasm topilmadi — data-avatar ni o'chirib tashlash
        // Bu CSS fallback ni ishga tushiradi (initials ko'rinadi)
        avatar.removeAttribute("data-avatar");
        avatar.style.removeProperty("--avatar-url");
        avatar.style.textIndent = "0";
        avatar.style.color = "white";
    };

    img.src = url;

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
