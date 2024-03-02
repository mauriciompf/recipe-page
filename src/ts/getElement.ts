export const getElement = <T extends HTMLElement>(selector: string): T =>
  document.querySelector(selector) as T;
