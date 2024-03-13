import { getElement } from "./getElement";

const btnIncrease = getElement(".btn-font-increase");
const btnDecrease = getElement(".btn-font-decrease");
const btnReset = getElement(".btn-font-reset");

const body = document.body;

const fontSizeClasses: string[] = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
];

let i = 2;

const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const coTitle = document.querySelectorAll(".co-title");

const titles = [...h1, ...h2, ...coTitle];

function increaseFont() {
  i++;

  applyFontSize();
  if (i >= 2) {
    h1.forEach((title) => {
      title.classList.remove(fontSizeClasses[3]);
      title.classList.add("text-3xl");
    });

    h2.forEach((title) => {
      title.classList.remove(fontSizeClasses[2]);
      title.classList.add("text-3xl");
    });

    coTitle.forEach((title) => {
      title.classList.remove(fontSizeClasses[1]);
      title.classList.add("text-2xl");
    });
  }
}

function decreaseFont() {
  if (i > 0) {
    i--;
    applyFontSize();

    if (i < 2) {
      h1.forEach((title) => {
        title.classList.remove("text-3xl");
        title.classList.add(fontSizeClasses[4]);
      });

      h2.forEach((title) => {
        title.classList.remove("text-2xl");
        title.classList.add(fontSizeClasses[3]);
      });

      coTitle.forEach((title) => {
        title.classList.remove("text-xl");
        title.classList.add(fontSizeClasses[3]);
      });
    }
  }
}

function applyFontSize() {
  if (i < fontSizeClasses.length) {
    body.className = fontSizeClasses[i];
  } else {
    i = fontSizeClasses.length - 1;
  }
}

export default () => {
  body.className = fontSizeClasses[2];

  btnIncrease.addEventListener("click", increaseFont);
  btnDecrease.addEventListener("click", decreaseFont);
};
