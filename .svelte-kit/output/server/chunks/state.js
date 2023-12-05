import { w as writable } from "./index2.js";
const globalScrollY = writable(0);
const buttonHover = writable(false);
export {
  buttonHover as b,
  globalScrollY as g
};
