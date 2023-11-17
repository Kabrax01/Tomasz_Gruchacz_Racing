"use strict";

import slider from "./src/Slider.js";
import formValidationService from "./src/ValidationService.js";
import defaultViewService from "./src/DefaultView.js";
import menuService from "./src/MenuService.js";
import modalService from "./src/Modal.js";

const section = document.querySelectorAll(".section");
const about = document.querySelector(".about_container");
const line = document.querySelectorAll(".line");

const { defaultView } = defaultViewService();
defaultView();
menuService();
slider();
formValidationService();
modalService();

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(moveUp, options);

section.forEach((section) => sectionObserver.observe(section));

function moveUp(entries) {
  debugger;
  const [entry] = entries;

  section.forEach((section) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = "1";

      sectionObserver.unobserve(entry.target);
    }
  });
}

const aboutObserver = new IntersectionObserver(animate, {
  threshold: 0.4,
});

aboutObserver.observe(about);

function animate(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    line.forEach(
      (line) => (line.style.animation = "resize 1s linear forwards")
    );
  }
}
