import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute, d as subscribe } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/index4.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
import { M as MediumParagraph } from "../../../../../chunks/MediumParagraph.js";
import { I as Icon } from "../../../../../chunks/icon.js";
import { B as Button } from "../../../../../chunks/Button.js";
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { autofocus = false } = $$props;
  let { onSubmit } = $$props;
  let { placeholder = "" } = $$props;
  let input = "";
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex"><div class="${escape(inverted ? "invert" : "", true) + " border-2 border-primary"}">
           
           <input type="text" ${autofocus ? "autofocus" : ""} class="outline-none h-full px-1 text-xl"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", input, 0)}></div>
       ${validate_component(Button, "Button").$$render(
        $$result,
        {
          borderClass: "border-l-0",
          onClick: () => onSubmit(input)
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { name: "arrow-forward" }, {}, {})}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const onPasswordSubmitted = (input) => {
    console.log(input);
    window.location.href = "/admin/access/" + input;
  };
  $$unsubscribe_page();
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
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
  Page as default
};
