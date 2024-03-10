import { r as redirect } from "../../../../../../../chunks/index.js";
function load({ params }) {
  if (params.password != "guteschokolade") {
    throw redirect(307, "/drafts/hoffmanns-schuppen/admin/login/failed");
  }
}
export {
  load
};
