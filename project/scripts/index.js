
// Get hamburger icon and navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the menu when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

