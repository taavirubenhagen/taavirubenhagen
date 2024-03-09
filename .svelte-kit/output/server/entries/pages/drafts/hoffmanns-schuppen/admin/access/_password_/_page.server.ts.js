import { r as redirect } from "../../../../../../../chunks/index.js";
function load({ params }) {
  if (params.password != "lolxdbro") {
    throw redirect(307, "/drafts/hoffmanns-schuppen/admin/login/failed");
  }
}
export {
  load
};
