// document.getElementById("hamburger").addEventListener("click", function () {
//     document.getElementById("navMenu").style.display = "block";
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.getElementById("hamburger");
//     const navMenu = document.getElementById("navMenu");

//     if (hamburger && navMenu) {
//         hamburger.addEventListener("click", function () {
//             // Toggle visibility
//             navMenu.classList.toggle("show");
//         });
//     } else {
//         console.error("Error: Navigation elements not found!");
//     }
// });


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});