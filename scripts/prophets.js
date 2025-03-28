const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);

    DisplayProphets(data.prophets);
    
}

getProphetData();

const DisplayProphets = (prophets) =>{
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname} `;
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(birthplace);

        cards.appendChild(card);
        
    });

}






















