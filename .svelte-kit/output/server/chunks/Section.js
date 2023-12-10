import { c as create_ssr_component, g as add_attribute, e as escape } from "./index3.js";
/* empty css        */const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  let windowWidth;
  let windowHeight;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `


<main${add_attribute("class", className, 0)} style="${"width: " + escape(windowWidth, true) + "px; min-height: " + escape(windowHeight, true) + "px;"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Section as S
};
