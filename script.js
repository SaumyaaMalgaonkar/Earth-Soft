document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name && email) {
            alert(`Thank you, ${name}! We will contact you shortly at ${email}.`);
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Add to cart button functionality
    document.querySelectorAll('#products button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});
