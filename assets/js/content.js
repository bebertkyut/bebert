document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const leftArrow = document.querySelector(".carousel-arrow.left");
  const rightArrow = document.querySelector(".carousel-arrow.right");

  function getVisibleCount() {
    // Use 1 for mobile, 4 for desktop/tablet
    return window.innerWidth <= 430 ? 1 : 4;
  }

  function getItemWidth() {
  if (window.innerWidth <= 430) {
    // 90vw box + 5vw left + 5vw right margin = 100vw
    return window.innerWidth;
  } else {
    return items[0].offsetWidth + 23; // 20px gap for desktop
  }
}

  let currentIndex = 0;

  function updateCarousel() {
    const visibleCount = getVisibleCount();
    const itemWidth = getItemWidth();
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex >= items.length - visibleCount;
  }

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < items.length - getVisibleCount()) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel(); // init state
});

function initMap() {
    const location = [14.574501, 121.013504];

    const map = L.map('map', {
        center: location,
        zoom: 15,
        zoomControl: false 
    });

    L.tileLayer('https://api.maptiler.com/maps/streets-dark/{z}/{x}/{y}.png?key=GEIltVbJSX8aUt6tBw0j', {
        attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
    }).addTo(map);

    L.marker(location).addTo(map)
        .bindPopup("Makati, Philippines")
        .openPopup();
}

document.addEventListener("DOMContentLoaded", initMap);

function toggleCapsule(selected) {
    let capsule = document.querySelector('.capsule');
    let experienceSection = document.getElementById("experience-section");
    let educationSection = document.getElementById("education-section");

    if (selected === 'education') {
        capsule.style.left = "50%";
        experienceSection.style.display = "none";
        educationSection.style.display = "block";
    } else {
        capsule.style.left = "0%";
        experienceSection.style.display = "block";
        educationSection.style.display = "none";
    }
}


