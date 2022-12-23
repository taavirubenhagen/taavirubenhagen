import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../chunks/index.js";
import "ua-parser-js";
import { I as Interactive } from "../../chunks/global.js";
const DeviceDetector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showInDevice = void 0 } = $$props;
  let { showInBrowser = void 0 } = $$props;
  let { showInOs = void 0 } = $$props;
  if ($$props.showInDevice === void 0 && $$bindings.showInDevice && showInDevice !== void 0)
    $$bindings.showInDevice(showInDevice);
  if ($$props.showInBrowser === void 0 && $$bindings.showInBrowser && showInBrowser !== void 0)
    $$bindings.showInBrowser(showInBrowser);
  if ($$props.showInOs === void 0 && $$bindings.showInOs && showInOs !== void 0)
    $$bindings.showInOs(showInOs);
  return `${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function getMenu() {
    return [];
  }
  return `<main class="${"w-screen min-h-screen bg-background text-onBackground"}">
  <header class="${"fixed z-20 w-full h-24 flex flex-col md:flex-row justify-start md:justify-center items-center"}">${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `${each(getMenu().slice(0, 2), (data, i) => {
        return `${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
          default: () => {
            return `<button class="${"w-32"}"><a${add_attribute("href", data[1] ?? "404", 0)}><b1 class="${"text-right"}">${escape(data[0])}</b1>
            </a></button>
        `;
          }
        })}`;
      })}`;
    }
  })}
    ${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
    default: () => {
      return `<button class="${"z-40 mx-4"}"><img src="${"full_logo.svg"}" alt="${"Logo"}" class="${"m-8 h-8"}"></button>`;
    }
  })}
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
    default: () => {
      return `${each(getMenu(), (data, i) => {
        return `${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
          default: () => {
            return `<button class="${"h-8"}"><a${add_attribute("href", data[1] ?? "404", 0)}><b1 class="${"text-right"}">${escape(data[0])}</b1>
            </a></button>
        `;
          }
        })}`;
      })}`;
    }
  })}
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `${each(getMenu().slice(-2), (data, i) => {
        return `${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
          default: () => {
            return `<button class="${"w-32"}"><a${add_attribute("href", data[1] ?? "404", 0)}><b1 class="${"text-right"}">${escape(data[0])}</b1>
            </a></button>
        `;
          }
        })}`;
      })}`;
    }
  })}</header>
  ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
