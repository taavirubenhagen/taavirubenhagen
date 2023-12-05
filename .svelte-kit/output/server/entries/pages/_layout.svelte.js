import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../chunks/index3.js";
import { n as navigating } from "../../chunks/stores.js";
/* empty css                   */import { L as LargeHeading } from "../../chunks/LargeHeading.js";
import { B as Button } from "../../chunks/Button.js";
import { P as Page } from "../../chunks/Page.js";
import { D as DeviceDetector } from "../../chunks/DeviceDetector.js";
import { b as buttonHover } from "../../chunks/state.js";
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
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bindThis } = $$props;
  let localButtonHover;
  buttonHover.subscribe((value) => {
    localButtonHover = value;
  });
  if ($$props.bindThis === void 0 && $$bindings.bindThis && bindThis !== void 0)
    $$bindings.bindThis(bindThis);
  return `${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"${add_attribute("this", bindThis, 0)}></div>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor;
  return `




<main class="relative cursor-none">${navigating ? `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Loading \u21BA
            `;
        }
      })}`;
    }
  })}` : `
        ${validate_component(Cursor, "Cursor").$$render($$result, { bindThis: cursor }, {}, {})}
        ${slots.default ? slots.default({}) : ``}
        ${validate_component(LegalFooter, "LegalFooter").$$render(
    $$result,
    {
      contactLink: "/legal/contact",
      ppLink: "/legal/privacy-policy"
    },
    {},
    {}
  )}`}</main>`;
});
export {
  Layout as default
};
