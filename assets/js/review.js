// Load Google Places API asynchronously
function loadGooglePlacesAPI() {
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvrbFBWMTIzzPDcYAUZOW2aieQqQBaVOE&libraries=places&callback=fetchAndDisplayReviews";
    document.body.appendChild(script);
}

// Display star ratings
function getStarRating(rating) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '★'; // Filled star
        } else {
            stars += '☆'; // Empty star
        }
    }
    return stars;
}

// Fetch and display reviews
function fetchAndDisplayReviews() {
    var reviewsCarousel = document.getElementById("reviewsCarousel");

    var service = new google.maps.places.PlacesService(reviewsCarousel);
    var request = {
        placeId: "ChIJtSPv-B52iEgR_DLpO2Zc8to", 
        fields: ['reviews']
    };

    service.getDetails(request, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var reviews = place.reviews;

            
            reviews.forEach(function(review) {
                var carouselItem = document.createElement("div");
                carouselItem.className = "carousel-item text-center";
                carouselItem.innerHTML = `
                    <h4 class="mt-2">${review.author_name}</h4>
                    <p class="star-colour">${getStarRating(review.rating)}</p>
                    <p>${review.text}</p>
                `;
                reviewsCarousel.appendChild(carouselItem);
            });
            
            reviewsCarousel.firstElementChild.classList.add("active");
        }
    });
}

loadGooglePlacesAPI();