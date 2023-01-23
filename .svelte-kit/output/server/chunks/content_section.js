import { c as create_ssr_component, e as escape, b as add_attribute } from "./index.js";
/* empty css                                      *//* empty css        */const Content_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = false } = $$props;
  let { scrollButton = true } = $$props;
  let { sectionCursorState = "" } = $$props;
  let { title } = $$props;
  let { sectionClass = "" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.scrollButton === void 0 && $$bindings.scrollButton && scrollButton !== void 0)
    $$bindings.scrollButton(scrollButton);
  if ($$props.sectionCursorState === void 0 && $$bindings.sectionCursorState && sectionCursorState !== void 0)
    $$bindings.sectionCursorState(sectionCursorState);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.sectionClass === void 0 && $$bindings.sectionClass && sectionClass !== void 0)
    $$bindings.sectionClass(sectionClass);
  return `<section class="${escape(sectionClass, true) + " w-screen min-h-screen " + escape(primary ? "primary" : "background", true) + " bg-surface p-8 md:p-16 pt-24"}"><h2${add_attribute("class", primary ? "primary" : "background", 0)}>${escape(title)}</h2>
  <div class="${"h-16"}"></div>
  ${slots.default ? slots.default({}) : `
    <s1>This page is still under development.</s1>
  `}</section>`;
});
export {
  Content_section as C
};
