import setupNavbar from "./components/navbar.js";
import setupFooter from "./components/footer.js";

// Insert navbar
setupNavbar();

// TODO : Check url to specify who is the page author into setupFooter ?
console.log(window.location.href);

// Insert footer
setupFooter();