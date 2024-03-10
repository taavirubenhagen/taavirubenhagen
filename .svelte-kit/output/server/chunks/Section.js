import { c as create_ssr_component, f as add_attribute } from "./index3.js";
/* empty css        */const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div${add_attribute("class", className, 0)} style="min-height: 100vh;">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Section as S
};
