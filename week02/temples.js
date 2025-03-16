document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Functionality
    const menuButton = document.querySelector("#menu");
    const nav = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuButton.innerHTML = nav.classList.contains("show") ? "✖" : "☰";
    });

    // Ensure menu resets in desktop mode
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            nav.classList.remove("show");
            menuButton.innerHTML = "☰"; 
        }
    });
});