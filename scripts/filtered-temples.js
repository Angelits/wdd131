document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('.navigation');
    const gallery = document.querySelector(".temples-gallery");
    const filterButtons = document.querySelectorAll("nav a");
  
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "Aba Nigeria Temple"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "Manti Utah Temple"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        alt: "Payson Utah Temple"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "Yigo Guam Temple"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "Washington D.C. Temple"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "Lima Perú Temple"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "Mexico City Mexico Temple"
      },
      {
        templeName: "Taylorsville Utah",
        location: "Taylorsville, Utah",
        dedicated: "2024, June, 4",
        area: 43560,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-44959-main.jpg",
        alt: "Taylorsville Utah Temple"
      },
      {
        templeName: "Orem Utah",
        location: "Orem, Utah",
        dedicated: "2024, January, 21",
        area: 67388,
        imageUrl: "https://i.pinimg.com/736x/f3/44/74/f3447408bd863cefb964be09434516ce.jpg",
        alt: "Orem Utah Temple"
      },
      {
        templeName: "Provo City Center",
        location: "Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://i.pinimg.com/736x/93/4f/b8/934fb87f892d84f9c173123d3579838e.jpg",
        alt: "Provo City Center Temple"
      }
    ];
    
    function displayTemples(filteredTemples) {
      gallery.innerHTML = "";
  
      filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        card.innerHTML = `
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        gallery.appendChild(card);
      });
    }
  
    function filterTemples(filter) {
      let filtered = temples;
  
      if (filter === "Old") {
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      } else if (filter === "New") {
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      } else if (filter === "Large") {
        filtered = temples.filter(t => t.area > 90000);
      } else if (filter === "Small") {
        filtered = temples.filter(t => t.area < 10000);
      }
  
      displayTemples(filtered);
    }
  
    /*menu button*/
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("show");
      menuButton.classList.toggle("close");
    });
  
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        nav.classList.remove("show");
        menuButton.classList.remove("close");
      }
    });
  
    filterButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const filterType = button.textContent.trim();
        filterTemples(filterType);
      });
    });
  
    displayTemples(temples);

  /*footer content*/
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  });
  