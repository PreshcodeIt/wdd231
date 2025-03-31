// async function getMembers() {
//   try {
//     const response = await fetch('data/members.json');
//     const data = await response.json();
//     displaySpotlights(data.members);
//   } catch (error) {
//     console.error('Error loading members:', error);
//   }
// }

// function displaySpotlights(members) {
//   const spotlightContainer = document.querySelector('#spotlights');

//   const spotlightMembers = members
//     .filter(member => member.membershipLevel === 2 || member.membershipLevel === 3)
//     .sort(() => 0.5 - Math.random()) // Shuffle
//     .slice(0, 3); // Pick 2-3

//   spotlightMembers.forEach(member => {
//     const card = document.createElement('section');
//     card.classList.add('spotlight-card');

//     card.innerHTML = `
//       <img src="images/${member.image}" alt="Logo of ${member.name}">
//       <h3>${member.name}</h3>
//       <p>${member.address}</p>
//       <p>${member.phone}</p>
//       <a href="${member.website}" target="_blank">${member.website}</a>
//       <p class="level">${getLevelName(member.membershipLevel)}</p>
//     `;

//     spotlightContainer.appendChild(card);
//   });
// }

// function getLevelName(level) {
//   if (level === 3) return 'Gold Member';
//   if (level === 2) return 'Silver Member';
//   return 'Member';
// }

// getMembers();



document.addEventListener("DOMContentLoaded", async () => {
    const spotlightContainer = document.getElementById("spotlights");

    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filter only Silver (2) and Gold (3) members
        let spotlightMembers = members.filter(member => 
            member.membership === 2 || member.membership === 3
        );

        // Shuffle and select 2-3 random spotlight members
        spotlightMembers = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Display members
        spotlightContainer.innerHTML = spotlightMembers.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.url}" target="_blank">Visit Website</a>
                <p class="level">${member.membership === 3 ? "GOLD" : "SILVER"} MEMBER</p>
            </div>
        `).join('');

    } catch (error) {
        console.error("Error loading members:", error);
        spotlightContainer.innerHTML = "<p>Could not load spotlight members.</p>";
    }
});
