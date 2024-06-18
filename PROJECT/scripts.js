document.addEventListener("DOMContentLoaded", function() {
    // Handle Dropdown Menu
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('open');
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('open');
        });
    });

    // Scroll to Section
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Event listener for "Request a Demo" button
    const demoButton = document.querySelector('.mobile-demo');
    if (demoButton) {
        demoButton.addEventListener('click', (event) => {
            scrollToSection(event, '#request-demo-section');
        });
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navBar = document.querySelector('.nav-bar');

    if (mobileMenuButton && navBar) {
        mobileMenuButton.addEventListener('click', () => {
            navBar.classList.toggle('open');
        });
    }
});
