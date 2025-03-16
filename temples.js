document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu");
    const nav = document.querySelector(".navigation");

    // Toggle menu on small screens
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuButton.innerHTML = nav.classList.contains("show") ? "✖" : "☰";
    });

    // Close the menu on resize (for large screens)
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            nav.classList.remove("show");
            menuButton.innerHTML = "☰"; 
        }
    });

    // Dynamically update footer content

    // Get current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get current date and time
    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
    const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);

    // Set the footer date and time
    document.getElementById('lastModified').textContent = `Last time modified: ${formattedDate} ${formattedTime}`;
});
