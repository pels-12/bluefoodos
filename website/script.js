// BlueFoodOS Website - Interactive Features

// Smooth scroll behavior (already handled by CSS)
// Add any interactive features here

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburgerBtn.setAttribute('aria-expanded', 
                hamburgerBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav')) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
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

    // Image Carousel
    initCarousel();
});

// Add any additional interactivity as needed

// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.farm-image-carousel-bg');
    if (!carousel) return;

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots-bg .dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Auto-rotate carousel every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Initialize first slide
    showSlide(0);
}

// Scroll Down function
function scrollDown() {
    const proofSection = document.querySelector('.proof-band');
    if (proofSection) {
        proofSection.scrollIntoView({ behavior: 'smooth' });
    }
}
