document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('.navigation');
    const gallery = document.querySelector(".temples-gallery");
    const filterButtons = document.querySelectorAll("nav a");
  
    const temples = [
      { templeName: "Taylorsville Utah", location: "Taylorsville, Utah", dedicated: "2024, June, 4", area: 43560, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-44959-main.jpg" },
      { templeName: "Orem Utah", location: "Orem, Utah", dedicated: "2024, January, 21", area: 67388, imageUrl: "https://i.pinimg.com/736x/f3/44/74/f3447408bd863cefb964be09434516ce.jpg" },
      { templeName: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicated: "1893, April, 6-24", area: 382207, imageUrl: "https://i.pinimg.com/736x/e0/24/20/e024203034b730ad809ec0ec1173c2c2.jpg" },
      { templeName: "San Diego", location: "San Diego, California", dedicated: "1993, April, 25-30", area: 72000, imageUrl: "https://i.pinimg.com/736x/85/39/89/853989ae6fdcdf48ff77f786f8e88fac.jpg" },
      { templeName: "Washington D.C.", location: "Kensington, Maryland", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://i.pinimg.com/736x/e0/55/16/e0551622ba7b900cf12e7e6ac654eadf.jpg" },
      { templeName: "Nauvoo Illinois", location: "Illinois, United States", dedicated: "2002, June, 27-309", area: 54000, imageUrl: "https://i.pinimg.com/736x/97/5b/6c/975b6c54a12e359f9547c9ca56c988a2.jpg" },
      { templeName: "Provo City Center", location: "Utah, United States", dedicated: "2016, March, 20", area: 85084, imageUrl: "https://i.pinimg.com/736x/93/4f/b8/934fb87f892d84f9c173123d3579838e.jpg" },
      { templeName: "Saratoga Springs", location: "Utah, United States", dedicated: "2023, August, 13", area: 97836, imageUrl: "https://i.pinimg.com/736x/76/df/38/76df384182c181bb8a8db00199a121af.jpg" },
      { templeName: "Mount Timpanogos", location: "Utah, United States", dedicated: "1996, October, 13-16", area: 107240, imageUrl: "https://i.pinimg.com/736x/84/55/de/8455dee5bb384c5ca86acc811be79d18.jpg" },
      { templeName: "Oakland California", location: "California, United States", dedicated: "1964, November, 17-19", area: 80157, imageUrl: "https://i.pinimg.com/736x/8c/e1/1f/8ce11f82fcbca093759139139f91a759.jpg" },
      { templeName: "Draper Utah Temple", location: "Utah, United States", dedicated: "2009, March, 20-22", area: 58300, imageUrl: "https://i.pinimg.com/736x/be/83/45/be83455338e6c04d3e63cbb833105ef2.jpg" },
      { templeName: "Layton Utah Temple", location: "Utah, United States", dedicated: "2016, June, 16", area: 93539, imageUrl: "https://i.pinimg.com/736x/22/bc/4d/22bc4d129def6aa6347ea3476c48950d.jpg" }
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
  