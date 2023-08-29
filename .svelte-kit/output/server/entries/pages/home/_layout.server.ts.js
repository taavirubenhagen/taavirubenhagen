import { r as redirect } from "../../../chunks/index.js";
function load({ request }) {
  const subroute = request.url.split("/home/")[1];
  throw redirect(307, "/main/home/" + (subroute ?? ""));
}
export {
  load
};
