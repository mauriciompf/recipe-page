import { getElement } from "./getElement";

export const btnOpenMenu = getElement<HTMLButtonElement>(".btn-open-menu");
const menuBox = getElement<HTMLDivElement>(".menu");
const btnOpenPalete = getElement<HTMLButtonElement>(".btn-open-palete");
const paleteBox = getElement<HTMLDivElement>(".palete");
const settingButtons =
  document.querySelectorAll<HTMLButtonElement>(".btn-setting");
const btnCloseMenu = getElement<HTMLButtonElement>(".btn-close-menu");

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
