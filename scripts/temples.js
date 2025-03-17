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

    
    const lastModifiedDate = new Date(document.lastModified);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };


    const lastModifiedText = `Last modified: ${lastModifiedDate.toLocaleDateString('en-US', dateOptions)} at ${lastModifiedDate.toLocaleTimeString('en-US', timeOptions)}`;
    document.getElementById('lastModified').textContent = lastModifiedText;
});