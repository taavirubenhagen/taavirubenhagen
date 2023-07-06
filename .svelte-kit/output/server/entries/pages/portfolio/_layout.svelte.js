import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */import { c as cursorButtonHover, B as Button } from "../../../chunks/Button.js";
import { P as P1 } from "../../../chunks/P1.js";
import { B } from "../../../chunks/B.js";
const P3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="selection:text-outline-on-primary">${slots.default ? slots.default({}) : ``}</t>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollPercentage;
  let windowHeight;
  let scrollY;
  let cursor;
  let localCursorButtonHover;
  cursorButtonHover.subscribe((value) => {
    localCursorButtonHover = value;
  });
  scrollPercentage = scrollY / windowHeight * 100;
  return `


<main class="font-sans h-screen overflow-x-hidden overflow-y-scroll cursor-none">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localCursorButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      ) + " box-shadow: 0 0 32px white, 0 0 32px white, 0 0 32px white, 0 0 32px white;"}"${add_attribute("this", cursor, 0)}></div>`;
    }
  })}
    <div class="group z-45 fixed w-full h-8"><div class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary" style="${"width: " + escape(scrollPercentage, true) + "%; transition-property: height;"}"></div></div>
    <div class="absolute z-40 w-full h-8 opacity-25 primary px-8 flex_row_center">${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
    default: () => {
      return `Best experienced on desktop.
        `;
    }
  })}
        ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `Still under development.
        `;
    }
  })}</div>
    ${slots.default ? slots.default({}) : ``}
    
    <div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center"><div class="h-full flex flex-col md:justify-between break-all">
            <a href="mailto:taavi.ruebenhagen@gmail.com">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(P1, "P1").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(B, "B").$$render($$result, { onPrimary: true }, {}, {
              default: () => {
                return `taavi.ruebenhagen@gmail.com`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}</a>
            <div class="pt-8 md:p-0 text-neutral-500"><div>Pothof 9d</div>
                <div>38122 Braunschweig</div></div></div>
        <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end"><div class="h-8 md:h-auto">${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true, simple: true }, {}, {
        default: () => {
          return `LinkedIn`;
        }
      })}`;
    }
  })}</div>
            <div class="h-8 md:h-auto">${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true, simple: true }, {}, {
        default: () => {
          return `Instagram`;
        }
      })}`;
    }
  })}</div>
            <div class="h-8 md:h-auto">${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true, simple: true }, {}, {
        default: () => {
          return `TikTok`;
        }
      })}`;
    }
  })}</div></div></div>
</main>`;
});
export {
  Layout as default
};
