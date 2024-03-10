import { c as create_ssr_component, e as escape, f as add_attribute } from "./index3.js";
import { t as tavyVersion } from "./index4.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { inverted = false } = $$props;
  let { size = 16 } = $$props;
  let { textClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
    $$bindings.textClass(textClass);
  return `<img src="${"https://raw.githubusercontent.com/taavirubenhagen/taavirubenhagen/main/tavy/main/icons/" + escape(tavyVersion, true) + "/" + escape(name, true) + ".svg"}"${add_attribute("alt", name, 0)}${add_attribute("class", inverted ? "invert" : "", 0)} style="${"height: " + escape(size / 16 * 1.25, true) + "rem;"}">`;
});
export {
  Icon as I
};
