import { c as create_ssr_component, d as subscribe, v as validate_component } from "../../../../../../../chunks/index3.js";
import { p as page } from "../../../../../../../chunks/stores.js";
/* empty css                                  */import { T as TextField } from "../../../../../../../chunks/TextField.js";
import { P as Page } from "../../../../../../../chunks/Page.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const onPasswordSubmitted = (input) => {
    console.log(input);
    window.location.href = "/admin/access/" + input;
  };
  $$unsubscribe_page();
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${$page.url.href.split("/").pop() == "failed" ? `<div class="h-8 flex items-start text-error">Login failed.
        </div>` : ``}
    ${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          autofocus: true,
          onSubmit: onPasswordSubmitted,
          placeholder: "Password"
        },
        {},
        {}
      )}
    ${$page.url.href.split("/").pop() == "failed" ? `<div class="h-8"></div>` : ``}`;
    }
  })}`;
});
export {
  Page_1 as default
};
