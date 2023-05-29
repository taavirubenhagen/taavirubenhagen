import { c as create_ssr_component, e as escape, h as each, v as validate_component } from "../../../../chunks/index2.js";
/* empty css                         */import { T as Text_button } from "../../../../chunks/text_button.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main class="${"font-sans"}"><section class="${"w-screen h-screen background p-8 md:p-16 relative"}"><t2>Dropshipz
        </t2>
        <div class="${"h-8"}"></div>
        <t4 class="${"text-neutral-500"}">Men don&#39;t grow older,
        <br>
        their toys just get better.
        </t4></section>
    <section class="${"w-screen h-screen background p-8 md:p-16 flex_col_center relative text-center"}"><t3>Every aspect of any app on any platform.</t3>
        <div class="${"h-16"}"></div>
        <div class="${"flex_row_center"}">${each(["Mobile", "Web", "Server", "Graphics", "Deploy", "Market"], (data) => {
    return `<a href="${"/me/design/tavy/icons"}"><div class="${"m-6 mb-12 shadow-xl rounded-2xl shadow-neutral-300 w-24 h-24 flex_row_center"}">
                ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        isThin: true,
        name: "phone",
        iconClass: "w-12 h-12 opacity-100"
      },
      {},
      {}
    )}</div>
            <t6>${escape(data)}</t6>
            </a>`;
  })}</div></section>
    <section class="${"w-screen h-screen background p-8 md:p-16 flex_col_center relative text-center"}"><t3>Contact me for any collaboration.</t3>
        <div class="${"h-16"}"></div>
        <a href="${"mailto:taavi.ruebenhagen@gmail.com"}" class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, { primary: true }, {}, {
    default: () => {
      return `E-Mail me`;
    }
  })}</a></section>
    <section class="${"w-screen h-screen background flex_col_center"}"><img src="${"/logos/logo.svg"}" alt="${"Logo"}" class="${"w-1/2"}"></section></main>`;
});
export {
  Page as default
};
