import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "./index.js";
/* empty css                                      */import { w as writable } from "./index3.js";
/* empty css        */import { I as Icon } from "./icon.js";
const cursorState = writable(null);
const Interactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cursorState;
  $$unsubscribe_cursorState = subscribe(cursorState, (value) => value);
  let { state = "hover" } = $$props;
  let hovering = false;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  $$unsubscribe_cursorState();
  return `<span>${slots.default ? slots.default({ hovering }) : ``}</span>`;
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
  Interactive as I,
  Title_section as T
};
