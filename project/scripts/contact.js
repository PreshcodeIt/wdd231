// contact.js
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  localStorage.setItem('contactName', name);
});
