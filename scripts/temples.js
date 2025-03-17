document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu");
    const nav = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuButton.innerHTML = nav.classList.contains("show") ? "✖" : "☰";
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && event.target !== menuButton) {
            nav.classList.remove("show");
            menuButton.innerHTML = "☰";
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            nav.classList.remove("show");
            menuButton.innerHTML = "☰"; 
        }
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('lastModified').textContent = `Last modified: ${currentDate.toLocaleDateString('en-US', dateOptions)}`;
});