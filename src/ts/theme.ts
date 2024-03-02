import { getElement } from "./getElement";
import { toggleBlueActiveClasses } from "./toggleBlueActiveClasses";
import { btnOpenMenu } from "./menu";

export const btnThemeLight = getElement<HTMLButtonElement>(".btn-theme-1");
export const btnThemeDark = getElement<HTMLButtonElement>(".btn-theme-2");
export const btnThemeSerpia = getElement<HTMLButtonElement>(".btn-theme-3");

let currentTheme = 0;

const themes = ["neutral-white", "neutral-dark-charcoal", "neutral-serpia"];

export const applyTheme = () => {
  const content = getElement<HTMLElement>("main");
  const article = getElement<HTMLElement>("article");

  content.className = `bg-${themes[currentTheme]}`;
  article.className = `bg-${themes[currentTheme]}`;

  if (currentTheme === 2) {
    content.className = "bg-[hsl(31,_42%,_86%)]";
    article.className = "bg-[hsl(31,_42%,_86%)]";
  }
};

const title = getElement<HTMLHeadingElement>("h1");
const p = getElement<HTMLParagraphElement>("p");
const li = document.querySelectorAll<HTMLUListElement>(".px-6 li");
const h2 = document.querySelectorAll<HTMLHeadingElement>("h2");
const table = getElement<HTMLTableElement>("table");
const pTable = getElement<HTMLParagraphElement>(".table-paragraph");

const ElementsToInvert = [title, p, ...li, ...h2, table, pTable, btnOpenMenu];

export const invertElementsColors = (
  elements: any[],
  type: "remove" | "add"
) => {
  elements.forEach((element) => {
    element.classList[type]("invert");
  });
};

export default () => {
  btnThemeLight.addEventListener("click", () => {
    const otherButtons = [btnThemeSerpia, btnThemeDark];
    toggleBlueActiveClasses(otherButtons, "remove");
    toggleBlueActiveClasses([btnThemeLight], "add");

    currentTheme = 0;
    applyTheme();

    invertElementsColors(ElementsToInvert, "remove");
  });

  btnThemeDark.addEventListener("click", () => {
    const otherButtons = [btnThemeSerpia, btnThemeLight];
    toggleBlueActiveClasses(otherButtons, "remove");
    toggleBlueActiveClasses([btnThemeDark], "add");

    currentTheme = 1;
    invertElementsColors(ElementsToInvert, "add");

    applyTheme();
  });

  btnThemeSerpia.addEventListener("click", () => {
    const otherButtons = [btnThemeLight, btnThemeDark];
    toggleBlueActiveClasses(otherButtons, "remove");
    toggleBlueActiveClasses([btnThemeSerpia], "add");

    invertElementsColors(ElementsToInvert, "remove");

    currentTheme = 2;
    applyTheme();
  });
};
