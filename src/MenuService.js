export default function menuService() {
  const menuContainer = document.querySelector(".menu_container");
  const menu = document.querySelector("#menu");
  const menuOption = document.querySelectorAll(".menu_option");
  const about = document.querySelector(".about_container");
  const btnUp = document.querySelector(".btn_up");
  const mainPhoto = document.querySelector(".main_photo");
  const header = document.querySelector("header");

  menuContainer.addEventListener("click", (e) => {
    menu.classList.toggle("show");
    document.querySelector(".toggle span").classList.toggle("toggle");
  });

  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu_option")) return;

    let section = e.target.dataset.nav;
    let element = document.querySelector(
      `[data-scroll=${CSS.escape(section)}]`
    );

    if (e.target.classList.contains("menu_option")) {
      element.scrollIntoView({ behavior: "smooth" });
      menu.classList.remove("show");
    }
  });

  menuOption.forEach((option) =>
    option.addEventListener("click", (e) => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        document.querySelector(".toggle span").classList.remove("toggle");
      }
    })
  );

  function menuClose() {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      document.querySelector(".toggle span").classList.remove("toggle");
    }
  }

  const aboutObserver = new IntersectionObserver(menuClose, {
    threshold: 0.1,
  });

  aboutObserver.observe(about);

  function showArrow(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      btnUp.style.opacity = "1";
    } else {
      btnUp.style.opacity = "0";
    }
  }

  const photoObserver = new IntersectionObserver(showArrow, {
    threshold: 0.3,
  });

  photoObserver.observe(mainPhoto);

  btnUp.addEventListener("click", (e) =>
    header.scrollIntoView({ behavior: "smooth" })
  );
}
