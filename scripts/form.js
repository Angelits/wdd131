const products = [
    {id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
    {id: "fc-2050", name: "power laces", averagerating: 4.7},
    {id: "fs-1987", name: "time circuits", averagerating: 3.5},
    {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
    {id: "jj-1969", name: "warp equalizer", averagerating: 5.0}
];

// Only run this if the product select exists (form page)
const productSelect = document.getElementById("productName");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review counter logic – only run if on review.html
const reviewCountSpan = document.getElementById("reviewCount");
const urlParams = new URLSearchParams(window.location.search);
const wasSubmitted = urlParams.has("submitted");

if (reviewCountSpan) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;

    if (wasSubmitted && !sessionStorage.getItem("reviewSubmitted")) {
        count++;
        localStorage.setItem("reviewCount", count);
        sessionStorage.setItem("reviewSubmitted", "true");
    }

    reviewCountSpan.textContent = count;
}

// Also, update the review count on form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function() {
        // Prevent counting the review on refresh
        if (!sessionStorage.getItem("reviewSubmitted")) {
            sessionStorage.setItem("reviewSubmitted", "true");
            let count = Number(localStorage.getItem('reviewCount')) || 0;
            localStorage.setItem('reviewCount', count + 1);
        }
    });
}

// Footer year and last modified (shared across all pages)
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;