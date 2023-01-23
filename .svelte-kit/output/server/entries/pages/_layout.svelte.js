import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each } from "../../chunks/index.js";
import "ua-parser-js";
/* empty css                                                 */import { I as Interactive } from "../../chunks/Interactive.js";
/* empty css                   */const DeviceDetector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Local_menu_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { context } = $$props;
  let { data } = $$props;
  let { i } = $$props;
  let { onClick } = $$props;
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
    default: () => {
      return `<button class="${"" + escape(
        context == "mobile" ? "my-1 h-14 px-1" : "mx-2 w-28 py-2",
        true
      ) + " invert-0 hover:invert rounded bg-background"}" style="${"transition: all 200ms cubic-bezier(.2, 0, .4, 1);"}"><a${add_attribute("href", data.toLowerCase(), 0)}><b1 class="${"text-right"}">${escape(data)}</b1></a></button>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMenuOpen = false;
  function getMenu() {
    let menu = ["Home", "Work", "Services", "Contact"];
    return isMenuOpen ? menu : [];
  }
  return `<main class="${"w-screen min-h-screen bg-background text-onBackground"}">
  <header class="${"fixed z-20 w-full h-24 flex flex-col md:flex-row justify-start md:justify-center items-center"}">${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `${each(getMenu().slice(0, getMenu().length / 2), (data, i) => {
        return `${validate_component(Local_menu_button, "MenuButton").$$render(
          $$result,
          {
            context: "left",
            data,
            i,
            onClick: () => isMenuOpen = false
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}
    ${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
    default: () => {
      return `<button class="${"z-40"}"><img src="${"/full_logo.svg"}" alt="${"Logo"}" class="${"shadow-0 hover:shadow-0 m-4 mx-2 rounded h-16 p-4 bg-background"}" style="${"transition: all 400ms cubic-bezier(.2, 0, .4, 1);"}"></button>`;
    }
  })}
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
    default: () => {
      return `${isMenuOpen ? `<button class="${"absolute w-screen h-screen"}"></button>` : ``}
      ${each(getMenu(), (data, i) => {
        return `${validate_component(Local_menu_button, "MenuButton").$$render(
          $$result,
          {
            context: "mobile",
            data,
            i,
            onClick: () => isMenuOpen = false
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `${each(getMenu().slice(-(getMenu().length / 2)), (data, i) => {
        return `${validate_component(Local_menu_button, "MenuButton").$$render(
          $$result,
          {
            context: "right",
            data,
            i,
            onClick: () => isMenuOpen = false
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</header>
  <div class="${escape(isMenuOpen ? "blur md:blur-0" : "blur-0", true) + " max-h-screen"}" style="${"transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;"}">${slots.default ? slots.default({}) : `
      <s1>This page is still under development.</s1>
    `}</div></main>`;
});
export {
  Layout as default
};
