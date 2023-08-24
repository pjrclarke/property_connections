function sendValuation(contactForm) {

    document.getElementById("loading-gif").style.display = "block";

    emailjs.send("service_uxofd7r", "template_rsdglqi", {
        "first_name": contactForm.first_name.value,
        "surname":  contactForm.surname.value,
        "email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "first_line":contactForm.address.value,
        "town_city": contactForm.townCity.value,
        "postcode": contactForm.postcode.value,
        "county": contactForm.county.value,
        "property_type": contactForm.propertyType.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("loading-gif").style.display = "none";
            document.getElementById("valuation-form").style.display = "none";
            document.getElementById("thank-you-message-valuation").style.display = "block";
         
        },
        function(error) {
            document.getElementById("loading-gif").style.display = "none";
            console.log("FAILED", error);
        }
    );
    return false;  
}