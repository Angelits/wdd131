document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".lazy-load");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                console.log(`Loading image: ${img.dataset.src}`); // Debugging log
                img.src = img.dataset.src; // Load the real image
                img.classList.add("fade-in"); // Apply fade-in effect
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    }, { rootMargin: "100px", threshold: 0.1 });

    images.forEach(img => observer.observe(img));
});

// ✅ Footer Date Handling
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});