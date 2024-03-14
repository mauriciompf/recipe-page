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

let currretFont = 2;

const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const coTitle = document.querySelectorAll(".co-title");

function increaseFont() {
  currretFont++;

  applyFontSize();
}

function decreaseFont() {
  if (currretFont > 0) {
    currretFont--;
    applyFontSize();
  }
}

function resetFont() {
  currretFont = 2;
  applyFontSize();
}

function applyFontSize() {
  if (currretFont < fontSizeClasses.length) {
    body.className = fontSizeClasses[currretFont];
  } else {
    currretFont = fontSizeClasses.length - 1;
  }

  if (currretFont >= 2) {
    h1.forEach((title) => {
      title.classList.remove(...fontSizeClasses);
      title.classList.add("text-3xl");
    });

    h2.forEach((title) => {
      title.classList.remove(...fontSizeClasses);
      title.classList.add("text-2xl");
    });

    coTitle.forEach((title) => {
      title.classList.remove(...fontSizeClasses);
      title.classList.add("text-xl");
    });
  }

  if (currretFont < 2) {
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
      title.classList.add(fontSizeClasses[2]);
    });
  }
}

export default () => {
  // body.className = fontSizeClasses[2];

  btnIncrease.addEventListener("click", increaseFont);
  btnDecrease.addEventListener("click", decreaseFont);
  btnReset.addEventListener("click", resetFont);
};
