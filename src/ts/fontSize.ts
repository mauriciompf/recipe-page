import { getElement } from "./getElement";

const btnIncrease = getElement(".btn-font-increase");
const btnDecrease = getElement(".btn-font-decrease");
const btnReset = getElement(".btn-font-reset");

const body = document.body;

const style = window.getComputedStyle(body, null).getPropertyValue("font-size");
let currentFontSize = parseFloat(style);

const fontSizeClasses: string[] = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
];

let i = 0;

function increaseFont() {
  i++;

  const newIndex = fontSizeClasses.indexOf(fontSizeClasses[2]) + i;

  if (newIndex < fontSizeClasses.length) {
    body.className = fontSizeClasses[newIndex];

    console.log(fontSizeClasses[newIndex]);
  }
}

export default () => {
  body.className = fontSizeClasses[2];

  btnIncrease.addEventListener("click", increaseFont);
};
