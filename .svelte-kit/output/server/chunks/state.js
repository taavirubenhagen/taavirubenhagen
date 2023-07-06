import { w as writable } from "./index2.js";
const globalScrollY = writable(0);
const cursorButtonHover = writable(false);
export {
  cursorButtonHover as c,
  globalScrollY as g
};
