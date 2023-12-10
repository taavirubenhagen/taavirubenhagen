import { c as create_ssr_component, d as subscribe, v as validate_component, e as escape } from "../../chunks/index3.js";
import { b as buttonHover, c as cursorPosition } from "../../chunks/state.js";
/* empty css                   */import { D as DeviceDetector } from "../../chunks/DeviceDetector.js";
import { B as Button } from "../../chunks/Button.js";
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $buttonHover, $$unsubscribe_buttonHover;
  let $cursorPosition, $$unsubscribe_cursorPosition;
  $$unsubscribe_buttonHover = subscribe(buttonHover, (value) => $buttonHover = value);
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => $cursorPosition = value);
  $$unsubscribe_buttonHover();
  $$unsubscribe_cursorPosition();
  return `${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        $buttonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"left: " + escape($cursorPosition[0], true) + "px; top: " + escape($cursorPosition[1], true) + "px; transition-property: transform, opacity, width, height; " + escape(
        $buttonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"></div>`;
    }
  })}`;
});
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
  let $$unsubscribe_cursorPosition;
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => value);
  $$unsubscribe_cursorPosition();
  return `




<main class="relative cursor-none">${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}
    
        
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
