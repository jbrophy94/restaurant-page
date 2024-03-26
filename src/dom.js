"use strict";

const content = document.querySelector("#content");

const clearContent = function () {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

const generateMenuDiv = function (itemString, priceString) {
  const newDiv = document.createElement("div");
  content.appendChild("div");
  newDiv.classList.add("menu-item");

  const item = document.createElement("div");
  newDiv.appendChild("div");
  item.classList.add("item");

  const price = document.createElement("div");
  newDiv.appendChild("div");
  price.classList.add("price");

  item.textContent = itemString;
  price.textContent = priceString;
};

//const createSkeleton = function () {};

const generateBeer = function () {
  clearContent();

  generateMenuDiv("Wiener IPA", "10$");
  generateMenuDiv("Penile Pilsner", "8$");
  generateMenuDiv("Heffewiener", "8$");
  generateMenuDiv("Face Melter", "10$");
};

const generateFood = function () {
  clearContent();

  generateMenuDiv("Cheese Wiener", "10$");
  generateMenuDiv("Chilli Wiener", "10$");
  generateMenuDiv("Chilli Cheese Wiener", "12$");
  generateMenuDiv("Wiener Wurst", "14$");
};

const generateAbout = function () {
  clearContent;
};
