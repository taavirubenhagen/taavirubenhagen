import { r as redirect } from "../../chunks/index.js";
function load({ request }) {
  if (request.url.search("(..../|7./)$") !== -1) {
    throw redirect(307, "/main/home");
  }
  if (request.url.search("(/presenter/download/.+)$") !== -1) {
    throw redirect(307, "main/presenter/download");
  }
  throw redirect(307, "/main/home");
}
export {
  load
};
