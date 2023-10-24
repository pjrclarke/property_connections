function sendContact(contactForm) {
    document.getElementById("loading-gif").style.display = "block";
    emailjs.send("service_gxyzfa8", "template_cr35n9k", {
        "first_name": contactForm.first_name.value,
        "surname":  contactForm.surname.value,
        "email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("loading-gif").style.display = "none";
            document.getElementById("contact-form").style.display = "none";
            document.getElementById("thank-you-message").style.display = "block";
        },
        function(error) {
            document.getElementById("loading-gif").style.display = "none";
            console.log("FAILED", error);
        }
    );
    return false;  
}