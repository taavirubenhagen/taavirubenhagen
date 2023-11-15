import { r as redirect } from "../../../chunks/index.js";
function load({ request }) {
  throw redirect(307, "/terminal/home");
}
export {
  load
};
