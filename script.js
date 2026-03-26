// Complete JavaScript functionality

// Display the current year
document.querySelector('.year-display').textContent = new Date().getFullYear();

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Navbar scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Sticky CTA
const cta = document.querySelector('.sticky-cta');
window.addEventListener('scroll', function() {
    cta.classList.toggle('visible', window.scrollY > 200);
});

// Reveal on scroll animations
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function() {
    revealElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight - 100) {
            element.classList.add('active');
        }
    });
});

// Calculator logic
const calculateButton = document.querySelector('.calculate');
calculateButton.addEventListener('click', function() {
    const inputA = parseFloat(document.querySelector('#inputA').value);
    const inputB = parseFloat(document.querySelector('#inputB').value);
    const result = inputA + inputB;  // Example calculation
    document.querySelector('.result-display').textContent = result;
});

// File input handling
document.querySelector('#fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.file-output').textContent = e.target.result;
        };
        reader.readAsText(file);
    }
});

// Contact form submission
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form.');
        }
    });
});