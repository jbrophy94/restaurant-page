"use strict";

const content = document.querySelector("#content");

const clearContent = function () {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

const generateMenuDiv = function (itemString, priceString) {
  const newDiv = document.createElement("div");
  content.appendChild(newDiv);
  newDiv.classList.add("menu-item");

  const item = document.createElement("div");
  newDiv.appendChild(item);
  item.classList.add("item");

  const price = document.createElement("div");
  newDiv.appendChild(price);
  price.classList.add("price");

  item.textContent = itemString;
  price.textContent = priceString;
};

//const createSkeleton = function () {};

const generateBeer = function () {
  clearContent();

  generateMenuDiv("Wiener IPA (6.5%)", "10$");
  generateMenuDiv("Penile Pilsner (5.5%)", "8$");
  generateMenuDiv("Heffewiener (5%)", "8$");
  generateMenuDiv("Face Melter (8.1%)", "10$");
  generateMenuDiv("Little Guy Lager (4.4%)", "6$");
};

const generateFood = function () {
  clearContent();

  generateMenuDiv("Cheese Wiener", "10$");
  generateMenuDiv("Chilli Wiener", "10$");
  generateMenuDiv("Chilli Cheese Wiener", "12$");
  generateMenuDiv("Wiener Wurst", "14$");
  generateMenuDiv("Classic Wiener", "6$");
};

const generateAbout = function () {
  clearContent();

  const about = document.createElement("div");
  about.classList.add("aboutSection");

  content.appendChild(about);

  about.innerHTML =
    "Here at Weiner World, we aim to serve up only the best dogs. Even our Whacky wieners are worth the price! Or your money back!!!<br><br>Located at 199 West Ferris St, Harberg New Jersey<br><br>414-555-5588<br><br>Come Party With Us!<br>All summer long we are hosting birthday parties upon request! Please give us at least 3 days notice for preparations.<br><br>Thanks so much! We can't wait to see you next!";
};

export {
  generateMenuDiv,
  clearContent,
  generateBeer,
  generateFood,
  generateAbout,
};
