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
