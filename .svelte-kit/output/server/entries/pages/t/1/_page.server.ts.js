import { redirect } from "@sveltejs/kit";
function load() {
  throw redirect(307, "/me/landing/social");
}
export {
  load
};
