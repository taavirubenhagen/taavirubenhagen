import { r as redirect } from "../../../../chunks/index.js";
function load({ params }) {
  throw redirect(307, "/admin/login/failed");
}
export {
  load
};
