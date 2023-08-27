"use strict";

export default function formValidationService() {
  const form = document.querySelector(".contact_form");
  const formButton = document.querySelector(".form_button");
  const formName = document.querySelector("#name");
  const formSurname = document.querySelector("#surname");
  const formEmail = document.querySelector("#email");
  const formMessage = document.querySelector("#message");
  const input = document.querySelectorAll(".input");

  let valid = false;
  let validEmail = false;

  form.addEventListener("click", (e) => {
    if (e.target.classList.contains("input")) {
      e.target.previousElementSibling.style.transform = "translateY(-2rem)";
    }
  });

  form.addEventListener("input", (e) => {
    if (e.target.classList.contains("input")) {
      e.target.previousElementSibling.style.transform = "translateY(-2rem)";
    }
  });

  function formValidation(e) {
    if (
      formName.value == "" ||
      formSurname.value == "" ||
      formEmail.value == "" ||
      formMessage.value == ""
    ) {
      e.preventDefault();
      formButton.style.backgroundColor = "var(--Dark_Red)";
      input.forEach(
        (input) => (input.style.backgroundColor = "var(--Dark_Red)")
      );
      formButton.innerHTML = "Wszystkie pola muszą być wypełnione";
      setTimeout(() => {
        input.forEach(
          (input) => (input.style.backgroundColor = "var(--Orange)")
        );
        formButton.style.backgroundColor = "var(--Neon_Green)";
        formButton.innerHTML = "wyślij";
      }, 2000);
      valid = false;
    } else if (!validEmail) {
      e.preventDefault();
      formButton.style.backgroundColor = "var(--Dark_Red)";
      formEmail.style.backgroundColor = "var(--Dark_Red)";
      formButton.innerHTML = "NIEPRAWIDŁOWY EMAIL";
      setTimeout(() => {
        formEmail.style.backgroundColor = "var(--Orange)";
        formButton.style.backgroundColor = "var(--Neon_Green)";
        formButton.innerHTML = "wyślij";
      }, 2000);
      valid = false;
    } else {
      valid = true;
    }
  }

  formButton.addEventListener("click", (e) => {
    validEmail = isValidEmail(formEmail.value);
    formValidation(e);
  });

  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const formObserver = new IntersectionObserver(callback, { threshold: 0 });

  formObserver.observe(form);

  function callback(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      formName.value = "";
      formSurname.value = "";
      formEmail.value = "";
      formMessage.value = "";
    }
  }
}
