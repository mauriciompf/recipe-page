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

const btnThemeLight = document.querySelector(
  ".btn-theme-1"
) as HTMLButtonElement;
const btnThemeDark = document.querySelector(
  ".btn-theme-2"
) as HTMLButtonElement;
const btnThemeSerpia = document.querySelector(
  ".btn-theme-3"
) as HTMLButtonElement;

const BlueActiveClasses = [
  'before:content-[""]',
  "before:bg-blue-600",
  "before:w-5",
  "before:h-5",
  "before:absolute",
  "relative",
  "before:top-[.22rem]",
  "before:left-[0.22rem]",
  "before:rounded-full",
];

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

const toggleBlueActiveClasses = (
  buttons: HTMLButtonElement[],
  type: "remove" | "add"
) => {
  const classOperation = type === "add" ? "add" : "remove";

  buttons.forEach((button) => {
    BlueActiveClasses.forEach((className) => {
      button.classList[classOperation](className);
    });
  });
};

let currentTheme = 0;
let themes = ["neutral-white", "neutral-dark-charcoal", "neutral-serpia"];

const applyTheme = () => {
  const content = document.querySelector("main") as HTMLElement;
  const article = document.querySelector("article") as HTMLElement;

  content.className = `bg-${themes[currentTheme]}`;
  article.className = `bg-${themes[currentTheme]}`;
};

const title = document.querySelector("h1") as HTMLHeadingElement;
const p = document.querySelector("p") as HTMLParagraphElement;
const li = document.querySelectorAll(".px-6 li")!;
const h2 = document.querySelectorAll("h2");

const table = document.querySelector("table") as HTMLTableElement;

btnThemeLight.addEventListener("click", () => {
  const otherButtons = [btnThemeSerpia, btnThemeDark];
  toggleBlueActiveClasses(otherButtons, "remove");
  toggleBlueActiveClasses([btnThemeLight], "add");

  currentTheme = 0;
  applyTheme();
  title.classList.remove("invert");
  p.classList.remove("invert");
  table.classList.remove("invert");

  li.forEach((e) => {
    e.classList.remove("invert");
  });

  h2.forEach((e) => {
    e.classList.remove("invert");
  });
});

toggleBlueActiveClasses([btnThemeLight], "add");

btnThemeDark.addEventListener("click", () => {
  const otherButtons = [btnThemeSerpia, btnThemeLight];
  toggleBlueActiveClasses(otherButtons, "remove");
  toggleBlueActiveClasses([btnThemeDark], "add");

  currentTheme = 1;
  title.classList.add("invert");
  p.classList.add("invert");
  table.classList.add("invert");

  li.forEach((e) => {
    e.classList.add("invert");
  });

  h2.forEach((e) => {
    e.classList.add("invert");
  });

  applyTheme();
});

btnThemeSerpia.addEventListener("click", () => {
  const otherButtons = [btnThemeDark, btnThemeLight];
  toggleBlueActiveClasses(otherButtons, "remove");
  toggleBlueActiveClasses([btnThemeSerpia], "add");

  title.classList.remove("invert");
  p.classList.remove("invert");
  table.classList.remove("invert");

  li.forEach((e) => {
    e.classList.remove("invert");
  });

  h2.forEach((e) => {
    e.classList.remove("invert");
  });

  currentTheme = 2;
  applyTheme();
});
