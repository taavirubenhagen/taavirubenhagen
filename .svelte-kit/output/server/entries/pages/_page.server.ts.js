import { r as redirect } from "../../chunks/index2.js";
function load() {
  throw redirect(307, "/home");
}
export {
  load
};
