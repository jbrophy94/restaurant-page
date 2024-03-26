import "./styles.css";
import {
  generateMenuDiv,
  clearContent,
  generateBeer,
  generateFood,
  generateAbout,
} from "./dom.js";

import hotdog from "./images/hotdog.png";
import ketchup from "./images/ketchup.png";
console.log("Hello, webpack!");

const body = document.querySelector("body");
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const title = document.createElement("div");

const ketchupIcon = new Image();
ketchupIcon.src = ketchup;

// nav.addEventListener("click", function (e) {
// for (let i of document.querySelectorAll("button")) {
//   if (i.firstChild) {
//     i.removeChild(ketchupIcon);
//   }
// }

//   console.log(e.target.classList);

//   if ([...e.target.classList].includes("nav-button")) {
//     e.target.appendChild(ketchupIcon);
//   }
// });

nav.addEventListener("click", function (e) {
  if ([...e.target.classList].includes("nav-button")) {
    if ([...e.target.classList].includes("food")) generateFood();
    else if ([...e.target.classList].includes("beer")) generateBeer();
    else if ([...e.target.classList].includes("about")) generateAbout();
  }
});
