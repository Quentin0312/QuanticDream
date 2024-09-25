import setupMap from "./components/map.js"
import setupCards from "./components/presentationCards.js";
import setupNavbar from "./components/navbar.js";

// Insert navbar
setupNavbar();

// Insert interactive map in the footer
setupMap();

// Insert presentations cards
setupCards();