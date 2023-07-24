import "../../chunks/index.js";
function load({ request }) {
  if (request.url.search("(.app/|7./)$") !== -1)
    ;
}
export {
  load
};
