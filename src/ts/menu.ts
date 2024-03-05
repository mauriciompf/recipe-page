import { getElement } from "./getElement";

export const btnOpenMenu = getElement<HTMLButtonElement>(".btn-open-menu");
const menuBox = getElement<HTMLDivElement>(".menu");

const boxes = document.querySelectorAll<HTMLDivElement>(".boxes");

const btnOpenPalete = getElement<HTMLButtonElement>(".btn-open-palete");
const paleteBox = getElement<HTMLDivElement>(".palete");

const fontSizeBox = getElement<HTMLDivElement>(".font-size");
const btnOpenFontSize = getElement<HTMLButtonElement>(".btn-open-font-size");

const settingButtons =
  document.querySelectorAll<HTMLButtonElement>(".btn-setting");
const btnCloseBoxes =
  document.querySelectorAll<HTMLButtonElement>(".btn-close-menu");

btnOpenMenu.addEventListener("click", () => {
  menuBox.classList.toggle("hidden");
});

btnCloseBoxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleSettingsButtons();

    boxes.forEach((box) => {
      box.classList.add("hidden");
    });

    menuBox.classList.remove("left-8");
  });
});

btnOpenPalete.addEventListener("click", () => {
  paleteBox.classList.toggle("hidden");
  menuBox.classList.add("left-8");

  toggleSettingsButtons();
});

btnOpenFontSize.addEventListener("click", () => {
  fontSizeBox.classList.toggle("hidden");
  menuBox.classList.add("left-8");

  toggleSettingsButtons();
});

const toggleSettingsButtons = () => {
  settingButtons.forEach((btn) => {
    btn.classList.toggle("hidden");
  });
};
