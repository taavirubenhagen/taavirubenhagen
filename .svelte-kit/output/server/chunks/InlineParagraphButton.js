import { c as create_ssr_component, v as validate_component, e as escape } from "./index3.js";
/* empty css        */import { I as Icon } from "./RawButton.js";
import { B as Button } from "./Button3.js";
const MediumSubtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="block text-2xl md:text-3xl text-neutral-500 font-bold tracking-widest">${slots.default ? slots.default({}) : ``}</t>`;
});
const LargeSubtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="block text-2xl md:text-3xl text-neutral-500 font-bold tracking-widest">${slots.default ? slots.default({}) : ``}</t>`;
});
const SmallHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl md:text-5xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const MediumHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-4xl md:text-6xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const InlineParagraphButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${validate_component(Button, "Button").$$render($$result, { onClick: () => console.log("TODO") }, {}, {
    default: () => {
      return `${escape(content)}${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "nav-arrow-down",
          textClass: "relative left-1 top-1"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  InlineParagraphButton as I,
  LargeSubtitle as L,
  MediumSubtitle as M,
  SmallHeading as S,
  MediumHeading as a
};
