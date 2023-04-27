import { c as create_ssr_component, e as escape } from "./index2.js";
/* empty css        */const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { version = "0.2" } = $$props;
  let { isThin = false } = $$props;
  let { isWhite = false } = $$props;
  let { size = 16 } = $$props;
  let { name } = $$props;
  let { iconClass = "" } = $$props;
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.isThin === void 0 && $$bindings.isThin && isThin !== void 0)
    $$bindings.isThin(isThin);
  if ($$props.isWhite === void 0 && $$bindings.isWhite && isWhite !== void 0)
    $$bindings.isWhite(isWhite);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  return `<div><img src="${"/icons/" + escape(version, true) + "/" + escape(name, true) + escape(isThin ? "_thin" : "", true) + ".svg"}" alt="${"Icon"}" class="${escape(iconClass, true) + " " + escape(isWhite ? "invert" : "", true) + " w" + escape(size, true) + " h-" + escape(size, true)}"></div>`;
});
export {
  Icon as I
};
