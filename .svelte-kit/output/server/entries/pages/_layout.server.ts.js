import { r as redirect } from "../../chunks/index.js";
function load({ request }) {
  if (request.url.split("/").length === 4) {
    throw redirect(307, "/terminal");
  }
  if (request.url.search("(/presenter/download/.+)$") !== -1) {
    throw redirect(307, "main/presenter/download");
  }
  if (request.url.search("(/home.+)$") !== -1 && request.url.search("(/main.+)$") === -1) {
    request.url.split("/home")[1];
  }
  if (request.url.search("(..../|7./)$") !== -1)
    ;
}
export {
  load
};
