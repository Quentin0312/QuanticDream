export function getActivePage() {
  // TODO : Clean ! (This is a quick fix of 'Accueil' not being 'active' because prod url end with '/QuanticDream/') !

  const url = window.location.href;
  // TODO : Ajouter gitlab et bitbucket urls
  if (
    url === "https://quentin0312.github.io/QuanticDream/" ||
    url === "https://quantic-dream-621fd4.gitlab.io/" ||
    url === "https://saequanticdream.bitbucket.io/"
  ) {
    return "index";
  } else {
    return url.split("/").at(-1).split(".").at(0);
  }
}
