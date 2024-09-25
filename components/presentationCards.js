// TODO : Mettre en place un style individuel pour chaque presention-card => plus d'interet d'utiliser JS ?
//      => largeur image
//      => images utilisé comme background du texte ? (Studios)
//      Garder les composants JS uniquement pour la navbar et le footer !

const data = [
    {
        title: "Histoire",
        imageLink:"TODO",
        imageWidth:"",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Studios",
        imageLink:"assets/images/studios.jpeg",
        imageWidth:"80vh",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Oeuvres",
        imageLink:"assets/images/quantic_dream_games.jpg",
        imageWidth:"80vh",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Résultats financiers",
        imageLink:"TODO",
        imageWidth:"",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    },
    {
        title: "Écologie",
        imageLink:"TODO",
        imageWidth:"",
        description: "Lorem ipsum truc machin chouette",
        link: "TODO"
    }
]

function createPresentationCard(data) {
    console.log(data.imageLink);
    const image = data.imageLink === "TODO" ? `<div style="width: 30vh; height: 30vh; background-color: green">IMAGE</div>`
        :`<img src=${data.imageLink} style="width: ${data.imageWidth}; height: 30vh">`;

    return `
        <div class="presentation-card">
            ${image}
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