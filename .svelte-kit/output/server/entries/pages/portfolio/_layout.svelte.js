import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="font-sans"><div class="absolute z-45 w-full h-8 opacity-25 primary px-8 flex_row_center">${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
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
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
