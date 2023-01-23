import { c as create_ssr_component, e as escape, v as validate_component } from "./index.js";
/* empty css                                      */import { I as Interactive } from "./Interactive.js";
/* empty css        */const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `




${validate_component(Interactive, "Interactive").$$render($$result, { state: sectionCursorState }, {}, {
    default: () => {
      return `<section class="${escape(sectionClass, true) + " w-screen h-screen " + escape(primary ? "primary" : "background", true) + " p-8 md:p-16 flex_col_center relative text-center"}">${slots.default ? slots.default({}) : ``}
    ${scrollButton ? `<div class="${"absolute left-0 bottom-0"}">${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
        default: () => {
          return `<button class="${"w-screen flex_row_center"}"><div class="${"w-24 h-24 p-8 hover:p-7"}" style="${"transition-duration: 200ms; transition-timing-function: cubic-bezier(.2, 0, .2, 1);"}">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              isWhite: primary,
              name: "outfyx_flat_arrow_down"
            },
            {},
            {}
          )}</div></button>`;
        }
      })}</div>` : ``}</section>`;
    }
  })}`;
});
export {
  Title_section as T
};
