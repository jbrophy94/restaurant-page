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

generateFood();

nav.addEventListener("click", function (e) {
  //Event propagation
  if ([...e.target.classList].includes("nav-button")) {
    if ([...e.target.classList].includes("food")) generateFood();
    else if ([...e.target.classList].includes("beer")) generateBeer();
    else if ([...e.target.classList].includes("about")) generateAbout();

    //Remove existing hotdog icon (which indicates selection)
    for (let i of document.querySelectorAll(".nav-button")) {
      i.classList.remove("selected");
    }

    e.target.classList.add("selected");
  }
});
