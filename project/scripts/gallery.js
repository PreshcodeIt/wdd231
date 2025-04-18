// // gallery.js
// import { wigs } from './data.js';

// const galleryContainer = document.getElementById('gallery');

// wigs.forEach(wig => {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.innerHTML = `
//     <img src="${wig.image}" alt="${wig.name}" loading="lazy">
//     <h2>${wig.name}</h2>
//     <p>${wig.description}</p>
//     <button class="view-btn" data-name="${wig.name}">View More</button>
//   `;
//   galleryContainer.appendChild(card);
// });

// // Modal setup
// galleryContainer.addEventListener('click', (e) => {
//   if (e.target.classList.contains('view-btn')) {
//     const wigName = e.target.getAttribute('data-name');
//     alert(`More details about: ${wigName}`); // Example modal action
//   }
// });

import { wigs } from './data.js';

const galleryContainer = document.getElementById('gallery');

// Create the modal element
const modal = document.createElement('div');
modal.id = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <h2 id="modal-title"></h2>
    <p id="modal-description"></p>
    <p id="modal-long-description"></p>
    <img id="modal-image" src="" alt="">
  </div>
`;
document.body.appendChild(modal);

// Function to open modal with wig data
// function openModal(wig) {
//   document.getElementById('modal-title').textContent = wig.name;
//   document.getElementById('modal-description').textContent = wig.longDescription || wig.description;
//   const modalImage = document.getElementById('modal-image');
//   modalImage.src = wig.image;
//   modalImage.alt = wig.name;
//   modal.style.display = 'block';
// }

function openModal(wig) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLongDescription = document.getElementById('modal-long-description');

  modalImage.src = wig.image;
  modalImage.alt = wig.name;
  modalTitle.textContent = wig.name;
  modalDescription.textContent = wig.description;
  modalLongDescription.textContent = wig.longDescription;

  modal.style.display = 'block';
}


// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Build gallery cards
wigs.forEach(wig => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${wig.image}" alt="${wig.name}" loading="lazy">
    <h2>${wig.name}</h2>
    <p>${wig.description}</p>
    <button class="view-btn" data-id="${wig.id}">View More</button>
  `;
  galleryContainer.appendChild(card);
});

// Event listeners
// galleryContainer.addEventListener('click', (e) => {
//   if (e.target.classList.contains('view-btn')) {
//     const wigName = e.target.getAttribute('data-name');
//     const selectedWig = wigs.find(wig => wig.name === wigName);
//     if (selectedWig) {
//       openModal(selectedWig);
//     }
//   }
// });

galleryContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-btn')) {
    const wigId = parseInt(e.target.getAttribute('data-id'));
    const wig = wigs.find(w => w.id === wigId);

    if (wig) {
      openModal(wig);
    }
  }
});


modal.querySelector('.close-btn').addEventListener('click', closeModal);

// Optional: Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

