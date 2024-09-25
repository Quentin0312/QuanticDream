import setupNavbar from "./components/navbar.js";
import setupCards from "./components/presentationCards.js";
import setupFooter from "./components/footer.js";

// Insert navbar
setupNavbar();

// Insert presentations cards
setupCards();

// TODO : Check url to specify who is the page author into setupFooter ?
console.log(window.location.href);

// Insert footer
setupFooter();