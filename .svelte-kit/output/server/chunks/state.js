import { w as writable } from "./index2.js";
const globalScrollY = writable(0);
const cursorButtonHover = writable(false);
const contrastingTextColorWhite = writable(true);
export {
  cursorButtonHover as a,
  contrastingTextColorWhite as c,
  globalScrollY as g
};
