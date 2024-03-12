import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute, d as subscribe } from "../../../../../../../chunks/index3.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/index4.js";
import { S as Section } from "../../../../../../../chunks/Section.js";
import "ua-parser-js";
import { M as MediumParagraph } from "../../../../../../../chunks/MediumParagraph.js";
import { I as Icon } from "../../../../../../../chunks/icon.js";
import { R as RawButton } from "../../../../../../../chunks/RawButton.js";
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
      return `<div class="flex"><div class="${escape(inverted ? "invert" : "", true) + " rounded-l-lg border-2 border-green-900"}">
           
           <input type="text" ${autofocus ? "autofocus" : ""} class="rounded-l-lg outline-none h-full px-1 text-xl"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", input, 0)}></div>
       ${validate_component(RawButton, "RawButton").$$render($$result, { onClick: () => onSubmit(input) }, {}, {
        default: () => {
          return `<div class="rounded-r-lg bg-green-900 w-12 h-12 pr-1 center_row">${validate_component(Icon, "Icon").$$render($$result, { inverted: true, name: "arrow-forward" }, {}, {})}</div>`;
        }
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const onPasswordSubmitted = (input) => {
    console.log(input);
    window.location.href = "/drafts/hoffmanns-schuppen/admin/access/" + input;
  };
  $$unsubscribe_page();
  return `<div style="font-family: &quot;Roboto Slab&quot;;">${validate_component(Section, "Section").$$render($$result, { className: "center_col" }, {}, {
    default: () => {
      return `${$page.url.href.split("/").pop() == "failed" ? `<div class="h-12"></div>` : ``}
        ${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          autofocus: true,
          onSubmit: onPasswordSubmitted,
          placeholder: "Passwort"
        },
        {},
        {}
      )}
        ${$page.url.href.split("/").pop() == "failed" ? `<div class="mt-4 h-8 flex items-start text-error">Login fehlgeschlagen.
            </div>` : ``}`;
    }
  })}</div>`;
});
export {
  Page as default
};
