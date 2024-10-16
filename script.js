import insertNavbar from "./components/navbar.js";
import insertFooter from "./components/footer.js";
import insertHead from "./components/head.js";

// TODO : Fix pages display use css after the page is loaded, looking like a visual glitch
// => Display quantic dream logo loading bar !!

// https://www.flowradar.com/answer/javascript-function-delay-page-load-load-sub-page-in-webflow

// Insert head
insertHead();

// Insert navbar
insertNavbar();

// Insert footer
insertFooter();

window.addEventListener("load", function () {
  document.body.style.visibility = "visible";
});
