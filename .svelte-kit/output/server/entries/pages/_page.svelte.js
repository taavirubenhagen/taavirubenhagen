import { c as create_ssr_component, d as escape, v as validate_component } from "../../chunks/index.js";
import { I as Interactive } from "../../chunks/global.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isWhite = false } = $$props;
  let { size = "0" } = $$props;
  let { iconClass = "" } = $$props;
  let { name } = $$props;
  if ($$props.isWhite === void 0 && $$bindings.isWhite && isWhite !== void 0)
    $$bindings.isWhite(isWhite);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="${"w-" + escape(size, true) + " h-" + escape(size, true)}"><img src="${"icons/" + escape(name, true) + ".svg"}" alt="${"Icon"}" class="${escape(iconClass, true) + " " + escape(isWhite ? "invert" : "", true)}"></div>`;
});
const Text_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonClass = "" } = $$props;
  let { onPrimary = false } = $$props;
  let { primary = false } = $$props;
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  return `<div class="${escape(buttonClass, true) + " transition-all m-0 hover:m-0 rounded-full border-2 hover:border-2 " + escape(onPrimary ? "border-onPrimary" : "border-onBackground", true) + " " + escape(
    primary ? onPrimary ? "bg-onPrimary hover:bg-transparent" : "bg-primary hover:bg-transparent" : onPrimary ? "bg-transparent hover:bg-onPrimary" : "bg-transparent hover:bg-primary",
    true
  ) + " px-5 py-3 " + escape(
    onPrimary ? "text-onPrimary hover:text-onBackground" : "text-onBackground hover:text-onPrimary",
    true
  )}" style="${"transition-duration: 100ms; transition-timing-function: cubic-bezier(.2, 0, .4, 1)"}"><b2>${slots.default ? slots.default({}) : ``}</b2></div>`;
});
const Title_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { primary = false } = $$props;
  let { scrollButton = true } = $$props;
  let { sectionCursorState = "" } = $$props;
  let { sectionClass = "" } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.scrollButton === void 0 && $$bindings.scrollButton && scrollButton !== void 0)
    $$bindings.scrollButton(scrollButton);
  if ($$props.sectionCursorState === void 0 && $$bindings.sectionCursorState && sectionCursorState !== void 0)
    $$bindings.sectionCursorState(sectionCursorState);
  if ($$props.sectionClass === void 0 && $$bindings.sectionClass && sectionClass !== void 0)
    $$bindings.sectionClass(sectionClass);
  return `${validate_component(Interactive, "Interactive").$$render($$result, { state: sectionCursorState }, {}, {
    default: () => {
      return `<section class="${escape(sectionClass, true) + " w-screen h-screen " + escape(primary ? "primary" : "background", true) + " p-8 flex_col_center relative text-center"}">${slots.default ? slots.default({}) : ``}
    ${scrollButton ? `${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
        default: () => {
          return `<button class="${"absolute left-0 bottom-0 w-screen flex_row_center"}"><div class="${"w-24 h-24 p-8 hover:p-7"}" style="${"transition-duration: 200ms; transition-timing-function: cubic-bezier(.2, 0, .2, 1);"}">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              isWhite: primary,
              name: "outfyx_flat_arrow_down"
            },
            {},
            {}
          )}</div></button>`;
        }
      })}` : ``}</section>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Title_section, "TitleSection").$$render($$result, { index: 0 }, {}, {
    default: () => {
      return `<h1>Simple.</h1>`;
    }
  })}
  ${validate_component(Title_section, "TitleSection").$$render(
    $$result,
    {
      primary: true,
      index: 1,
      sectionClass: "bg-primary text-onPrimary"
    },
    {},
    {
      default: () => {
        return `<h3 class="${"primary"}">I&#39;m a self-taught UI/UX Designer and Front-End Engineer.</h3>`;
      }
    }
  )}
  ${validate_component(Title_section, "TitleSection").$$render($$result, { index: 2 }, {}, {
    default: () => {
      return `<h3>Contact me for any collaboration.</h3>
    <div class="${"h-16"}"></div>
    <div class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
        default: () => {
          return `E-Mail me`;
        }
      })}</div>`;
    }
  })}</main>`;
});
export {
  Page as default
};
