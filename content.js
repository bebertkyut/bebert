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


