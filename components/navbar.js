function getActivePage (){
    // TODO : Refactor this into an utils ?
    return window.location.href.split("/").at(-1).split(".").at(0);
}

function setupNavbar(activePage) {
    return `
        <!-- TODO : Put on top of the wallpaper and use a liner gradient to white to put the navbar into the clouds -->
        <!-- TODO : Cacher logo quand utilisateur sur la page d'accueil avec le logo déjà affiché ? -->
        <div>
            <img src="assets/images/qd_logo_blue.svg" alt="Logo de Quantic Dream">
        </div>
        <div>
            <!-- TODO : Quand déjà sur la page, faire scroll vers la 1ere section !-->
            <a href="index.html" class=${activePage === "index" ? "active" : ""}>Accueil</a>
            <a href="histoire.html" class=${activePage === "histoire" ? "active" : ""}>Histoire</a>
            <a href="studios.html" class=${activePage === "studios" ? "active" : ""}>Studios</a>
            <a href="oeuvres.html" class=${activePage === "oeuvres" ? "active" : ""}>Œuvres</a>
            <!-- TODO : Rename to "Évolutions des résultats financier ?? (feedback questionnaire)"-->
            <a href="economie.html" class=${activePage === "economie" ? "active" : ""}>Résultats financiers</a>
            <a href="ecologie.html" class=${activePage === "ecologie" ? "active" : ""}>Écologie</a>
        </div>
    `
}

export default function insertNavbar() {
    const navElement = document.getElementById("navbar");
    navElement.innerHTML = setupNavbar(getActivePage());
}