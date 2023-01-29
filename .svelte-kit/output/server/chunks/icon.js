import { c as create_ssr_component, e as escape } from "./index.js";
/* empty css        */const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isWhite = false } = $$props;
  let { iconClass = "" } = $$props;
  let { version = "0.2" } = $$props;
  let { name } = $$props;
  if ($$props.isWhite === void 0 && $$bindings.isWhite && isWhite !== void 0)
    $$bindings.isWhite(isWhite);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div><img src="${"/icons/" + escape(version, true) + "/" + escape(name, true) + ".svg"}" alt="${"Icon"}" class="${escape(iconClass, true) + " " + escape(isWhite ? "invert" : "", true)}"></div>`;
});
export {
  Icon as I
};
