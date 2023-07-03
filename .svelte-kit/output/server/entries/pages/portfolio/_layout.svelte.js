import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */import { P as P1 } from "../../../chunks/P1.js";
import { B } from "../../../chunks/B.js";
const P3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="">${slots.default ? slots.default({}) : ``}</t>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollPercentage;
  let innerHeight;
  let scrollY;
  scrollPercentage = scrollY / innerHeight * 100;
  return `


<main class="font-sans">
    <div class="group z-50 fixed w-full h-8"><div class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary" style="${"width: " + escape(scrollPercentage, true) + "%; transition-property: height;"}"></div></div>
    <div class="absolute z-45 w-full h-8 opacity-25 primary px-8 flex_row_center">${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
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
    
    <div class="w-full md:h-[50vh] primary p-16 md:p-32 flex flex-col md:flex-row justify-between md:items-center"><div class="h-full flex flex-col md:justify-between break-all">${validate_component(P1, "P1").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, { onPrimary: true }, {}, {
        default: () => {
          return `taavi.ruebenhagen@gmail.com`;
        }
      })}`;
    }
  })}
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
  })}</div></div></div></main>`;
});
export {
  Layout as default
};
