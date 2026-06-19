// Smooth animation initialization
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle parallax effect on mouse move
    const container = document.querySelector('.container');
    
    document.addEventListener('mousemove', function(e) {
        const x = (window.innerWidth / 2 - e.clientX) / 100;
        const y = (window.innerHeight / 2 - e.clientY) / 100;
        
        container.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', function() {
        container.style.transform = 'translate(0, 0)';
    });
});

// Smooth transitions
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});
