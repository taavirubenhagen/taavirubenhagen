import { r as redirect } from "../../../../../chunks/index.js";
function load({ params }) {
  if (params.password != "lolxdbro") {
    throw redirect(307, "/admin/login/failed");
  }
}
export {
  load
};
