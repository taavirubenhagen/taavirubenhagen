import { r as redirect } from "../../../chunks/index.js";
function load() {
  throw redirect(307, "/me/home");
}
export {
  load
};
