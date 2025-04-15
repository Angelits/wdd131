//mobile Navigation//
const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuToggle.classList.toggle('open');

  const arrowIcon = menuToggle.querySelector('.arrow-icon');
  arrowIcon.innerHTML = menuToggle.classList.contains('open') ? '&#9650;' : '&#9660;';
});

//Layout functionality//
document.addEventListener("DOMContentLoaded", () => {
    const sectionSelect = document.getElementById("sectionSelect");
  
    sectionSelect.addEventListener("change", () => {
      const sectionId = sectionSelect.value;
      if (sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last updated: ${document.lastModified}`;