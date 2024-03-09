import { c as create_ssr_component, h as add_attribute, v as validate_component } from "./index3.js";
/* empty css        */const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textClass = "" } = $$props;
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
    $$bindings.textClass(textClass);
  return `<t${add_attribute("class", textClass, 0)}>${slots.default ? slots.default({}) : ``}</t>`;
});
const SmallParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Paragraph, "Paragraph").$$render($$result, { textClass: "text-md" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const SmallHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl md:text-5xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  SmallParagraph as S,
  SmallHeading as a
};
