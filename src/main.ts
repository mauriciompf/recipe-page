const btnOpenMenu = document.querySelector(
  ".btn-open-menu"
) as HTMLButtonElement;
const menuBox = document.querySelector(".menu") as HTMLDivElement;
const btnOpenPalete = document.querySelector(
  ".btn-open-palete"
) as HTMLButtonElement;
const paleteBox = document.querySelector(".palete") as HTMLDivElement;
const settingButtons = document.querySelectorAll(".btn-setting");
const btnCloseMenu = document.querySelector(
  ".btn-close-menu"
) as HTMLButtonElement;

btnOpenMenu.addEventListener("click", () => {
  menuBox.classList.toggle("hidden");
});

btnOpenPalete.addEventListener("click", () => {
  paleteBox.classList.toggle("hidden");
  menuBox.classList.add("left-8");

  settingButtons.forEach((btn) => {
    btn.classList.add("hidden");
  });
});

btnCloseMenu.addEventListener("click", () => {
  settingButtons.forEach((btn) => {
    btn.classList.remove("hidden");
  });

  paleteBox.classList.toggle("hidden");
  menuBox.classList.remove("left-8");
});
