import { c as create_ssr_component, e as escape, d as subscribe, v as validate_component } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                      */import { B as Button } from "../../../chunks/Button2.js";
const P1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-3xl selection:primary">${slots.default ? slots.default({}) : ``}</t>`;
});
const P3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="selection:primary">${slots.default ? slots.default({}) : ``}</t>`;
});
const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onPrimary = false } = $$props;
  let { simple = false } = $$props;
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  return `<t class="${"transition duration-400 " + escape(simple ? "" : "underline underline-offset-8", true) + " " + escape(onPrimary ? "text-onPrimary" : "text-onBackground", true)}">${slots.default ? slots.default({}) : ``}</t>`;
});
let scrollY = 0;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollPercentage;
  let showFooter;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let windowHeight;
  scrollPercentage = scrollY / windowHeight * 100;
  showFooter = !$page.route.id?.includes("home-dev");
  $$unsubscribe_page();
  return `


<main class="h-screen overflow-x-hidden">
    <div class="group z-40 fixed w-full h-8"><div class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary" style="${"width: " + escape(scrollPercentage, true) + "%; transition-property: height;"}"></div></div>
    <div class="absolute z-35 w-full h-8 opacity-0 primary px-8 center_row">${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
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
    
    ${showFooter ? `<div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center"><div class="h-full flex flex-col md:justify-between break-all">
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
                    <div>38122 Braunschweig, Germany</div></div></div>
            <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end"><a href="/main/contact" class="h-8 md:h-auto">${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true, simple: true }, {}, {
        default: () => {
          return `Contact`;
        }
      })}`;
    }
  })}</a>
                <a href="/main/privacy-policy" class="h-8 md:h-auto">${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true, simple: true }, {}, {
        default: () => {
          return `Privacy Policy (Website)`;
        }
      })}`;
    }
  })}</a>
                <a href="/main/presenter/privacy-policy" class="h-8 md:h-auto">${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true, simple: true }, {}, {
        default: () => {
          return `Privacy Policy (Presentation Master 2)`;
        }
      })}`;
    }
  })}</a></div></div>` : ``}</main>`;
});
export {
  Layout as default
};