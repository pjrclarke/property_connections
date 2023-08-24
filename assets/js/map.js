function loadGoogleMaps() {
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvrbFBWMTIzzPDcYAUZOW2aieQqQBaVOE&libraries=places&callback=initMap";
  document.body.appendChild(script);
}

function initMap() {
    const officeLocation = { lat:55.9025464773935, lng:-3.6423688104284135 }; // Replace with your office coordinates

    const map = new google.maps.Map(document.getElementById("map"), {
        center: officeLocation,
        zoom: 15
    });
    const marker = new google.maps.Marker({
        position: officeLocation,
        map: map,
        title: "Property Connections",
    });
}

loadGoogleMaps();

