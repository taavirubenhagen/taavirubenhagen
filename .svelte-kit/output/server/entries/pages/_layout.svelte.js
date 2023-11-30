import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../chunks/index3.js";
import { D as DeviceDetector } from "../../chunks/DeviceDetector.js";
import { c as cursorButtonHover } from "../../chunks/state.js";
/* empty css                   */import { B as Button } from "../../chunks/Button.js";
const LegalFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contactLink } = $$props;
  let { ppLink } = $$props;
  if ($$props.contactLink === void 0 && $$bindings.contactLink && contactLink !== void 0)
    $$bindings.contactLink(contactLink);
  if ($$props.ppLink === void 0 && $$bindings.ppLink && ppLink !== void 0)
    $$bindings.ppLink(ppLink);
  return `<div class="w-full grid grid-cols-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      borderClass: "border-l-0 border-b-0",
      onClick: () => window.location.href = contactLink
    },
    {},
    {
      default: () => {
        return `Contact`;
      }
    }
  )}
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      borderClass: "border-l-0 border-b-0",
      onClick: () => window.location.href = ppLink
    },
    {},
    {
      default: () => {
        return `Privacy Policy`;
      }
    }
  )}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor;
  let localCursorButtonHover;
  cursorButtonHover.subscribe((value) => {
    localCursorButtonHover = value;
  });
  return `




<main class="relative w-full min-h-full font-body">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localCursorButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"${add_attribute("this", cursor, 0)}></div>`;
    }
  })}
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(LegalFooter, "LegalFooter").$$render(
    $$result,
    {
      contactLink: "/legal/contact",
      ppLink: "/legal/privacy-policy"
    },
    {},
    {}
  )}</main>`;
});
export {
  Layout as default
};
