// =====================================
// MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a navigation link is clicked
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for contacting MJF SL Limited. We will get back to you soon.");

        contactForm.reset();

    });

}