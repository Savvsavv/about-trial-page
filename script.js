// --- MOBILE NAVIGATION TOGGLE ---

const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarOverlay = document.getElementById("nav-overlay");
const navbarCloseButton = document.getElementById("mobile-close-button");
const mobileMenu = document.getElementById("navbar-links");

/**
 * Opens the mobile navigation menu and the overlay.
 */
hamburgerBtn.addEventListener("click", () => {
    // Note: The visibility of the menu is best handled by toggling a CSS class (e.g., 'active')
    // in conjunction with CSS transitions, but for simplicity based on the original example's style
    // properties, we'll continue using display: 'flex'.
    mobileMenu.style.display = "flex";
    navbarOverlay.style.display = "block";
});

/**
 * Closes the mobile navigation menu and the overlay.
 */
function closeNavBar() {
    mobileMenu.style.display = "none";
    navbarOverlay.style.display = "none";
}

// Close menu when clicking overlay or the dedicated close button
navbarOverlay.addEventListener("click", closeNavBar);
navbarCloseButton.addEventListener("click", closeNavBar);


// --- EXAMPLE: FUNCTIONALITY FOR NAV LINKS ---
// Since the 'View Products' and 'Contact Us' buttons from the old Hero section were removed, 
// we'll add basic event listeners to the Products and Services links in the main navbar for demonstration.

const productLink = document.querySelector('.nav-links a[href="/products"]');
const servicesLink = document.querySelector('.nav-links a[href="/services"]');

if (productLink) {
    productLink.addEventListener('click', (e) => {
        // Prevent default navigation to demonstrate an action
        e.preventDefault();
        alert("You clicked 'Products'. (In a live app, this would take you to the products page!)");
        // Also close the mobile menu if active
        closeNavBar();
    });
}

if (servicesLink) {
    servicesLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert("You clicked 'Services'. (In a live app, this would take you to the services page!)");
        closeNavBar();
    });
}

// --- REMOVED OBSOLETE CODE ---
/*
The following variables and functions were removed because the corresponding HTML elements
(the Contact Us form and the Hero buttons) no longer exist in the updated About Page structure:
- contactUsButton
- contactUsSection
- contactUsDarkCover
- contactUsSectionCloseButton
- revertBackContactUs()
- handleSubmit(e)
*/