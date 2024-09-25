function setupNavbar() {
    return `
        <!-- TODO : Cacher logo quand utilisateur sur la page d'accueil avec le logo déjà affiché -->
        <div>
            <img src="assets/images/qd_logo_blue.svg" alt="Logo de Quantic Dream">
        </div>
        <div>
            <a href="index.html" class="active">Accueil</a>
            <a>Histoire</a>
            <a>Studios</a>
            <a href="oeuvres.html">Œuvres</a>
            <a>Résultats financiers</a>
            <a>Écologie</a>
        </div>
    `
}

export default function insertNavbar() {
    const navElement = document.getElementById("navbar");
    navElement.innerHTML = setupNavbar();
}