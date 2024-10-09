import insertNavbar from "./components/navbar.js";
import insertFooter from "./components/footer.js";
import insertHead from "./components/head.js";

// TODO : Fix pages display use css after the pafe is loaded, looking like a visual glitch
// https://www.flowradar.com/answer/javascript-function-delay-page-load-load-sub-page-in-webflow

// Insert head
insertHead();

// Insert navbar
insertNavbar();

// Insert footer
insertFooter();
