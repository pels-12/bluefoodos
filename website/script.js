// BlueFoodOS Website - Interactive Features

// Smooth scroll behavior (already handled by CSS)
// Add any interactive features here

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (if needed)
    // Add mobile menu functionality here if navigation gets complex
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get form data
            const formData = new FormData(this);
            // Here you would typically send to backend
            alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
            this.reset();
        });
    });

    // Details/accordion smooth animation
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
});

// Add any additional interactivity as needed
