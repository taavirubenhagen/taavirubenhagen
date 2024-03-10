import { w as writable } from "./index2.js";
const globalScrollY = writable(0);
const cursorPosition = writable([0, 0]);
const buttonHover = writable(false);
export {
  buttonHover as b,
  cursorPosition as c,
  globalScrollY as g
};
