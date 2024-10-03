import setupMap from "./map.js";
import { getActivePage } from "./utils.js";

function getPageAuhtor(activePage) {
  // const pageEndUrl = window.location.href.split("/").at(-1).split(".").at(0);
  switch (activePage) {
    case "index":
    case "oeuvres":
      return "Quentin PAYET";
    case "histoire":
      return "Kheira OUADAH";
    case "studios":
      return "Suleyman OZBUDAK";
    case "economie":
      return "Ethan RIETZ";
    case "ecologie":
      return "Gabin MOREL";
    default:
      return "Unknown";
  }
}

function createFooter(pageAuthor) {
  return `
            <div>
        <div id="footer-content">
            <div class="footer-contacts">
                <div>
                    <b>Quantic Dream - Paris, France</b><br>
                    <span>30 rue Raoul Wallenberg, 75019 Paris (France)</span><br>
                    <span>+33 1 44 64 00 90</span><br>
                </div><br>

                <div>
                    <b>Quantic Dream - Montreal, Québec</b><br>
                    <span>1100 Atwater, Westmount, Québec</span><br>
                </div><br>

                <div id="socials">
                    <a href="https://www.youtube.com/channel/UCf1dGULY0opzBbE3XEXWvWg" target="_blank">
                        <svg data-testid="geist-icon" stroke-linejoin="round" viewBox="0 0 16 16"
                             id="youtube-logo">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.4695 3.39273C14.0722 3.55407 14.5459 4.02773 14.7073 4.63046C14.9988 5.72183 15 8.00023 15 8.00023C15 8.00023 15 10.2786 14.7073 11.37C14.5459 11.9728 14.0722 12.4464 13.4695 12.6077C12.3782 12.9005 7.99998 12.9005 7.99998 12.9005C7.99998 12.9005 3.62183 12.9005 2.53045 12.6077C1.92773 12.4464 1.45407 11.9728 1.29272 11.37C1 10.2786 1 8.00023 1 8.00023C1 8.00023 1 5.72183 1.29272 4.63046C1.45407 4.02773 1.92773 3.55407 2.53045 3.39273C3.62183 3.10001 7.99998 3.10001 7.99998 3.10001C7.99998 3.10001 12.3782 3.10001 13.4695 3.39273ZM10.2362 8.00046L6.59906 10.1002V5.90068L10.2362 8.00046Z"
                                  fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/officialquanticdream" target="_blank">
                        <svg data-testid="geist-icon" stroke-linejoin="round" viewBox="0 0 16 16"
                             id="facebook-logo">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z"
                                  fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="https://x.com/Quantic_Dream" target="_blank">
                        <svg data-testid="geist-icon" stroke-linejoin="round" viewBox="0 0 16 16"
                             id="twitter-logo">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z"
                                  fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="https://fr.linkedin.com/company/quantic-dream" target="_blank">
                        <svg data-testid="geist-icon" stroke-linejoin="round" viewBox="0 0 16 16"
                             id="linkedin-logo">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5ZM4.74556 5.5C5.21057 5.5 5.5 5.16665 5.5 4.75006C5.49133 4.3241 5.21057 4 4.75438 4C4.29824 4 4 4.3241 4 4.75006C4 5.16665 4.28937 5.5 4.73687 5.5H4.74556ZM5.5 6.5V12H4V6.5H5.5ZM7 12H8.5V8.89479C8.5 8.89479 8.60415 7.78962 9.55208 7.78962C10.5 7.78962 10.5 9.02275 10.5 9.02275V12H12V8.8133C12 7.13837 11.25 6.5025 10.125 6.5025C9 6.5025 8.5 7.27778 8.5 7.27778V6.5025H7.00005C7.02383 7.01418 7 12 7 12Z"
                                  fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/quanticdreamgames/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="instagram-logo">
                            <radialGradient id="instagram-radient" cx="19.38" cy="42.035" r="44.899"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#fd5"/>
                                <stop offset=".328" stop-color="#ff543f"/>
                                <stop offset=".348" stop-color="#fc5245"/>
                                <stop offset=".504" stop-color="#e64771"/>
                                <stop offset=".643" stop-color="#d53e91"/>
                                <stop offset=".761" stop-color="#cc39a4"/>
                                <stop offset=".841" stop-color="#c837ab"/>
                            </radialGradient>
                            <path fill="url(#instagram-radient)"
                                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20\tc-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20\tC42.014,38.383,38.417,41.986,34.017,41.99z"/>
                            <radialGradient id="instagram-radient-2" cx="11.786" cy="5.54" r="29.813"
                                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#4168c9"/>
                                <stop offset=".999" stop-color="#4168c9" stop-opacity="0"/>
                            </radialGradient>
                            <path fill="url(#instagram-radient-2)"
                                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20\tc-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20\tC42.014,38.383,38.417,41.986,34.017,41.99z"/>
                            <path fill="#fff"
                                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5\ts2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/>
                            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/>
                            <path fill="#fff"
                                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12\tC37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@quanticdream" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-58.35000000000002 -186.70564362582354 2548.289756960746 2538.849821747569"
                             id="tiktok-logo">
                            <g fill="#25f4ee">
                                <path d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z"/>
                                <path d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z"/>
                            </g>
                            <path d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z"
                                  fill="#fe2c55"/>
                            <path d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z"
                                  fill="#fe2c55"/>
                            <path d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z"/>
                        </svg>
                    </a>
                    <a href="https://vk.com/quanticdream" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" id="vk-logo" viewBox="0 0 48 48" fill="none">
                            <path d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z"
                                  fill="#0077FF"/>
                            <path d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z"
                                  fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
            <!--<div id="map"></div>-->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.5401792725116!2d2.408303845734146!3d48.87992545500603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6727e3290e2dd%3A0x817bb84c4510d95e!2sQuantic%20Dream!5e1!3m2!1sfr!2sfr!4v1727957895505!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div><br><br>
        <div id="page-credit">
            <span>Page réalisé par ${pageAuthor}</span>
        </div>
    </div>
    `;
}

export default function insertFooter() {
  // Insert footer
  const footerElement = document.getElementById("footer");
  footerElement.innerHTML = createFooter(getPageAuhtor(getActivePage()));

  // Insert map
  setupMap();
}
