export default function modalService() {
  const modal = document.querySelector(".email_modal");
  const activationText = document.querySelector(".credits");
  const copyBtn = document.querySelector(".copy_btn");
  const message = document.querySelector(".copy_span");
  const closeBtn = document.querySelector(".close_span");

  activationText.addEventListener("click", (e) =>
    modal.classList.add("show_modal")
  );
  closeBtn.addEventListener("click", (e) =>
    modal.classList.remove("show_modal")
  );

  copyBtn.addEventListener("click", () => {
    let text = "kabraxis11@gmail.com";

    function msgDissapear() {
      message.style.opacity = 1;
      setTimeout(() => {
        message.style.opacity = 0;
      }, 2000);
    }

    navigator.clipboard.writeText(text);
    message.textContent = "Copied !";
    msgDissapear();
  });
}
