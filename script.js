import insertNavbar from "./components/navbar.js";
import insertFooter from "./components/footer.js";

// Insert navbar
insertNavbar();

// Insert footer
insertFooter();

window.addEventListener("load", function () {
  document.body.style.visibility = "visible";
});
