// Update current year in footer
function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  }
  
  //Mobile navigation functionality//
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const arrowIcon = document.querySelector(".arrow-icon");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    arrowIcon.textContent = navLinks.classList.contains("show") ? "︽" : "︾";
  });
  
   //Carousel elements//
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(-${index * 100}%)`; 
  }

  function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1; 
  } else if (currentIndex >= totalSlides) {
      currentIndex = 0; 
  }
    showSlide(currentIndex);
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }


  setInterval(autoSlide, 3000); 

  //Images gallery//
  const galleryContainer = document.getElementById('gallery-container');

  const galleryData = [
    { url: 'https://i.pinimg.com/736x/98/c9/5d/98c95df876af9448fe3da03c0a9507cc.jpg', alt: 'Pad Thai' },
    { url: 'https://i.pinimg.com/736x/2b/f6/23/2bf623b6c9d89e6cb44f43ed95c111ec.jpg', alt: 'Mango salad' },
    { url: 'https://i.pinimg.com/736x/c1/e1/1a/c1e11aabbae25fb27d3c70bbd9db194b.jpg', alt: 'Walnuts Fried Rice' },
    { url: 'https://i.pinimg.com/736x/8d/52/bc/8d52bcb247cad69f0d26979f0a30adf2.jpg', alt: 'Chicken Curry' },
    { url: 'https://i.pinimg.com/736x/80/eb/a6/80eba652df30da96e768d16ea8a57f89.jpg', alt: 'Tum Yum Pork soup' },
    { url: 'https://i.pinimg.com/736x/12/d2/9c/12d29c949b1af6704a3c9e4f0e0ce4fc.jpg', alt: 'Beef stir-fried noodles' }
  ];
  
  if (galleryContainer) {
    galleryData.forEach(item => {
      const img = document.createElement("img");
      img.src = item.url;
      img.alt = item.alt;
      img.loading = "lazy";
      img.classList.add("gallery-img");
      galleryContainer.appendChild(img);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      confirmation.style.display = "block";

      // Optional: clear form
      form.reset();

      // Hide message after 3 seconds
      setTimeout(() => {
        confirmation.style.display = "none";
      }, 3000);
    });
  });
  