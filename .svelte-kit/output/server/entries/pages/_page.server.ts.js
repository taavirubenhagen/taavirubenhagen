import "../../chunks/index.js";
function load({ request }) {
  if (request.url.search("(..../|7./)$") !== -1)
    ;
}
export {
  load
};
