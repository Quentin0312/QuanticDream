export function getActivePage (){
    // TODO : Clean ! (This is a quick fix of 'Accueil' not being 'active' because prod url end with '/QuanticDream/') !

    const url = window.location.href;
    if (url === "https://quentin0312.github.io/QuanticDream/") {
        return "index";
    } else {
        return url.split("/").at(-1).split(".").at(0);
    }
}