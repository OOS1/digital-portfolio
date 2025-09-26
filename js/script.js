// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const body = document.body;

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            // Toggle active class on nav
            nav.classList.toggle('active');
            
            // Toggle active class on button for animation
            navToggle.classList.toggle('active');
            
            // Add menu-open class to body for overlay
            body.classList.toggle('menu-open');
            
            // Prevent body scroll when menu is open
            body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a nav link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside (on overlay)
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = '';
            }
        });
    }

    // Update current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});