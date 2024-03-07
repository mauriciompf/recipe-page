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
  "text-2xl",
];

let i = 2;

function increaseFont() {
  i++;
  applyFontSize();
}

function decreaseFont() {
  if (i > 0) {
    i--;
    applyFontSize();
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
