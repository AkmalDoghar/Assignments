// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Scroll to Home section
    document.getElementById("scrollToHome").addEventListener("click", function() {
        window.scrollTo({
            top: 0, // Scrolls to the top of the page
            behavior: "smooth" // Smooth scroll effect
        });
    });

    // Scroll to Services section
    document.getElementById("scrollToServices").addEventListener("click", function() {
        document.querySelector(".services").scrollIntoView({
            behavior: "smooth" // Smooth scroll effect
        });
    });

    // Scroll to Fruit section
    document.getElementById("scrollToFruit").addEventListener("click", function() {
        document.querySelector(".container").scrollIntoView({
            behavior: "smooth" // Smooth scroll effect
        });
    });

    // Scroll to Contact Us section
    document.getElementById("scrollToContact us").addEventListener("click", function() {
        document.getElementById("contact-us").scrollIntoView({
            behavior: "smooth" // Smooth scroll effect
        });
    });
});
