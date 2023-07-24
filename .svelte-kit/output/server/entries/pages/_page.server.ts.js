import { r as redirect } from "../../chunks/index.js";
function load({ request }) {
  if (request.url.search("(.app/|7./)$") !== -1) {
    throw redirect(307, "/portfolio/home");
  }
}
export {
  load
};
