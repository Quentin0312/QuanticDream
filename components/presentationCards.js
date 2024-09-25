const data = [
    {
        title: "Histoire",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Studios",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Oeuvres",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Résultats financiers",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Écologie",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    }
]

function createPresentationCard(data) {
    return `
        <div class="presentation-card">
            <div style="width: 30vh; height: 30vh; background-color: green">IMAGE</div>
            <div class="presentation-card-content">
                <h2>${data.title}</h2>
                <div>${data.description}</div>
                <a href=${data.link}>En savoir plus</a>
            </div>
        </div>
    `
}

export default function insertPresentationCard() {
    const presentationCards = document.getElementById('presentation-cards');
    presentationCards.innerHTML = data.map(data => createPresentationCard(data)).join('');
}