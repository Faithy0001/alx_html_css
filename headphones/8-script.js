// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            // Toggle the 'active' class on both hamburger and nav
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking on a navigation link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
});
