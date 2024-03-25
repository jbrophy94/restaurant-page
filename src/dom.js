"use strict";

const clearContent = function () {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

//const createSkeleton = function () {};

const generateWine = function () {
  clearContent();
};

const generateFood = function () {
  clearContent();
};

const generateAbout = function () {
  clearContent;
};
