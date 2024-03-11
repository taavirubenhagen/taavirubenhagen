import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index3.js";
import "../../../chunks/index4.js";
import { I as Icon } from "../../../chunks/icon.js";
import { S as Section } from "../../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../../chunks/Button.js";
import { B as ButtonSeperator } from "../../../chunks/ButtonSeperator.js";
const NestedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { borderClass = "" } = $$props;
  let { title } = $$props;
  let { buttonCount = 2 } = $$props;
  let expanded = false;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.buttonCount === void 0 && $$bindings.buttonCount && buttonCount !== void 0)
    $$bindings.buttonCount(buttonCount);
  return `${expanded ? `<div class="flex"><div class="w-full grid" style="${"grid-template-columns: repeat(" + escape(buttonCount, true) + ", minmax(0, 1fr));"}">${slots.default ? slots.default({}) : ``}</div>
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      inverted,
      uniformPadding: true,
      borderClass: "border-l-0 " + borderClass,
      onClick: () => expanded = false
    },
    {},
    {
      default: () => {
        return `
            ${validate_component(Icon, "Icon").$$render($$result, { name: "minus-circle" }, {}, {})}`;
      }
    }
  )}</div>` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      inverted,
      nested: true,
      borderClass,
      onClick: () => expanded = true
    },
    {},
    {
      default: () => {
        return `${escape(title)}`;
      }
    }
  )}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 flex flex-col justify-center items-stretch"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            openInNew: true,
            onClick: () => window.location.href = "/drafts/hoffmanns-schuppen"
          },
          {},
          {
            default: () => {
              return `Hoffmann&#39;s Schuppen`;
            }
          }
        )}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            openInNew: true,
            borderClass: "border-t-0",
            onClick: () => window.location.href = "https://fenni.me"
          },
          {},
          {
            default: () => {
              return `FENNIs Website`;
            }
          }
        )}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            next: true,
            borderClass: "border-t-0",
            onClick: () => window.location.href = "/drafts/website"
          },
          {},
          {
            default: () => {
              return `Personal Website
    `;
            }
          }
        )}
    ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
    ${validate_component(NestedButton, "NestedButton").$$render($$result, { title: "Presenter", buttonCount: 3 }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                onClick: () => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render($$result, { name: "open-in-new" }, {}, {})}`;
                }
              }
            )}
        ${validate_component(Button, "Button").$$render(
              $$result,
              {
                borderClass: "border-l-0",
                onClick: () => alert("Coming soon!")
              },
              {},
              {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render($$result, { name: "apple-mac" }, {}, {})}`;
                }
              }
            )}
        ${validate_component(Button, "Button").$$render(
              $$result,
              {
                borderClass: "border-l-0",
                onClick: () => window.location.href = "https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render($$result, { name: "info-circle" }, {}, {})}`;
                }
              }
            )}`;
          }
        })}
    ${validate_component(NestedButton, "NestedButton").$$render(
          $$result,
          {
            borderClass: "border-t-0",
            title: "Counter"
          },
          {},
          {
            default: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  borderClass: "border-t-0 w-full",
                  onClick: () => alert("Coming soon!")
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { name: "open-in-new" }, {}, {})}`;
                  }
                }
              )}
        ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  borderClass: "border-l-0 border-t-0 w-full",
                  onClick: () => alert("Coming soon!")
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { name: "apple-mac" }, {}, {})}`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
