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
  let companyDiv = document.querySelector('.company');
  let schoolDiv = document.querySelector('.school');

  if (selected === 'education') {
      capsule.style.left = "50%";
      companyDiv.style.display = "none"; 
      schoolDiv.style.display = "flex";
  } else {
      capsule.style.left = "0%";
      companyDiv.style.display = "flex"; 
      schoolDiv.style.display = "none"; 
  }
}

