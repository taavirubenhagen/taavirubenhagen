import { c as create_ssr_component, v as validate_component, d as subscribe, e as escape, f as add_attribute } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                      */import { c as cursorButtonHover } from "../../../chunks/state.js";
import { R as RawButton, I as Icon, M as MediumParagraph } from "../../../chunks/RawButton.js";
const Large_paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-2xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openInNew = false } = $$props;
  let { onClick } = $$props;
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<t class="underline underline-offset-8">${slots.default ? slots.default({}) : ``}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "open-new-window",
          textClass: "relative top-2"
        },
        {},
        {}
      )}` : ``}</t>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showFooter;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let cursor;
  let localCursorButtonHover;
  cursorButtonHover.subscribe((value) => {
    localCursorButtonHover = value;
  });
  showFooter = $page.route.id?.includes("home-dev") ? false : true;
  $$unsubscribe_page();
  return `


<main class="overflow-x-hidden cursor-none">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localCursorButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      ) + " bo-shadow: 0 0 32px white, 0 0 32px white, 0 0 32px white, 0 0 32px white;"}"${add_attribute("this", cursor, 0)}></div>`;
    }
  })}
    ${slots.default ? slots.default({}) : ``}
    
    ${showFooter ? `<div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center text-left"><div class="h-full flex flex-col md:justify-between break-all">
                <a href="mailto:taavi.ruebenhagen@gmail.com">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Large_paragraph, "LargeParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `taavi.ruebenhagen@gmail.com`;
          }
        })}`;
      }
    }
  )}</a>
                <div class="pt-8 md:p-0 text-neutral-500">Pothof 9d<br>
                    38122 Braunschweig<br>
                    Germany<br></div></div>
            <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end">${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => window.location.href = "/main/contact"
    },
    {},
    {
      default: () => {
        return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Contact`;
          }
        })}`;
      }
    }
  )}
                ${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => window.location.href = "/main/privacy-policy"
    },
    {},
    {
      default: () => {
        return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Privacy Policy`;
          }
        })}`;
      }
    }
  )}</div></div>` : ``}</main>`;
});
export {
  Layout as default
};
