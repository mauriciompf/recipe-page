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

export const toggleBlueActiveClasses = (
  buttons: HTMLButtonElement[],
  type: "remove" | "add"
) => {
  const classOperation = type === "add" ? "add" : "remove";

  buttons.forEach((btn) => {
    BlueActiveClasses.forEach((className) => {
      btn.classList[classOperation](className);
    });
  });
};
