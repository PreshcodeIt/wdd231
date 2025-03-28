const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");
const hambugerMenu = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks')

//hambuger
hambugerMenu.addEventListener( 'click', () => {
  navElement.classList.toggle('open');
  hambugerMenu.classList.toggle('open')
})



// Display Year
document.getElementById("year").textContent = new Date().getFullYear();

// Display Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle View
gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.remove("grid");
  membersContainer.classList.add("list");
});

// Load Members
async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.url}" target="_blank">Visit Website</a>
      <p><strong>Membership:</strong> ${getMembershipName(member.membership)}</p>
    `;

    membersContainer.appendChild(card);
  });
}

function getMembershipName(level) {
  switch (level) {
    case 3:
      return "Gold";
    case 2:
      return "Silver";
    default:
      return "Member";
  }
}

getMembers();
