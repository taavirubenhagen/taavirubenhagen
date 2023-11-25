import { r as redirect } from "../../chunks/index.js";
function load({ request }) {
  if (request.url.search("(..../|7./)$") !== -1) {
    throw redirect(307, "/personal/home");
  }
  if (request.url.search("(/presenter/download/.+)$") !== -1) {
    throw redirect(307, "main/presenter/download");
  }
  if (request.url.search("(/home.+)$") !== -1 && request.url.search("(/main.+)$") === -1) {
    const subroute = request.url.split("/home")[1];
    throw redirect(307, "/main/home" + (subroute ?? ""));
  }
}
export {
  load
};
