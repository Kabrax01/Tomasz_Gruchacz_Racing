export default function defaultViewService() {
  const section = document.querySelectorAll(".section");
  const html = document.querySelector("html");

  function defaultView() {
    let userPosition = Math.abs(html.getBoundingClientRect().y);

    if (userPosition > 0) {
      section.forEach((section) => {
        section.style.transform = "translateY(0)";
        section.style.opacity = "1";
        section.classList.remove("behaviour");
      });
    }
  }

  return { defaultView };
}
