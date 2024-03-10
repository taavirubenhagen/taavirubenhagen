import { r as redirect } from "../../../../chunks/index.js";
function load({ request: any }) {
  throw redirect(307, "/drafts/terminal/home");
}
export {
  load
};
