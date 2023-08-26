"use strict";

export default function slider() {
  const slidesContainer = document.querySelector(".slider_container");
  const slides = document.querySelectorAll(".slide");
  const slideBtnLeft = document.querySelector(".btn_left");
  const slideBtnRight = document.querySelector(".btn_right");
  const slideButtons = document.querySelectorAll(".slide_btn");
  const dotContainer = document.querySelector(".dots_container");

  let slide = 0;
  const maxSlide = slides.length;

  function createDots() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  }

  createDots();

  function activeDot(slide = 0) {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
      dot.classList.remove("active");

      if (i === slide) {
        dot.classList.add("active");
      }

      dot.addEventListener("mouseenter", (e) => {
        clearInterval(slideInterval);
      });
      dot.addEventListener("mouseleave", autoSlide);
    });
  }

  function goToSlide(slide = 0) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
      if (i == slide) {
        s.style.maxHeight = "90vh";
        s.style.opacity = "1";
        s.style.zIndex = "1";
        s.style.filter = "blur(0)";
        s.classList.add("mobile_media");
      } else {
        s.style.maxHeight = "25rem";
        s.style.opacity = "0.6";
        s.style.zIndex = "0";
        s.style.filter = "blur(5px)";
        s.classList.remove("mobile_media");
      }
    });
  }

  function renderSlider(slide) {
    activeDot(slide);
    goToSlide(slide);
  }

  function nextSlide() {
    if (slide >= maxSlide - 1) {
      slide = 0;
    } else {
      slide += 1;
    }

    goToSlide(slide);
    activeDot(slide);
  }

  function previousSlide() {
    if (slide <= 0) {
      slide = maxSlide - 1;
    } else {
      slide = slide - 1;
    }

    goToSlide(slide);
    activeDot(slide);
  }

  renderSlider();

  slideBtnLeft.addEventListener("click", previousSlide);

  slideBtnRight.addEventListener("click", nextSlide);

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      slide = +e.target.dataset.slide;
      renderSlider(slide);
    }
  });

  let slideInterval;

  function autoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  autoSlide();

  function intervalEngagement(el) {
    el.addEventListener("mouseover", (e) => {
      clearInterval(slideInterval);
    });
    el.addEventListener("mouseleave", autoSlide);
  }

  slides.forEach((slide) => intervalEngagement(slide));

  slideButtons.forEach((btn) => intervalEngagement(btn));
}
