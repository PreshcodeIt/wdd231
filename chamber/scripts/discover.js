document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".grid-container");

    try {
        const response = await fetch("data/places.json");
        const data = await response.json();

        data.places.forEach(place => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h2>${place.name}</h2>
                <figure>
                    <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
                </figure>
                <address>${place.address}</address>
                <p>${place.description}</p>
                <button class="learn-more">Learn More</button>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading places:", error);
    }
});
