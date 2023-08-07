import { c as create_ssr_component, e as escape, v as validate_component, f as each } from "../../../../../chunks/index3.js";
import { I as Icon } from "../../../../../chunks/Icon2.js";
/* empty css                            */import { H as H2 } from "../../../../../chunks/H2.js";
import { P as P3 } from "../../../../../chunks/P3.js";
import { B } from "../../../../../chunks/B.js";
import { B as Button } from "../../../../../chunks/Button.js";
const P2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-xl md:text-2xl selection:primary">${slots.default ? slots.default({}) : ``}</t>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { onDismissed } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onDismissed === void 0 && $$bindings.onDismissed && onDismissed !== void 0)
    $$bindings.onDismissed(onDismissed);
  return `




<div class="${"transition duration-100 " + escape(open ? "" : "opacity-0 pointer-events-none", true)}"><div class="fixed z-45 left-0 top-0 w-full h-full bg-opacity-50 bg-black center_col"><button class="fixed w-full h-full"></button>
        <div class="rounded-2xl w-1/2 p-8 bg-background center_col">${slots.default ? slots.default({}) : ``}
            ${validate_component(Button, "Button").$$render($$result, { onClick: onDismissed }, {}, {
    default: () => {
      return `<div class="mt-8 h-8">${validate_component(Icon, "Icon").$$render($$result, { name: "cancel", textClass: "text-2xl" }, {}, {})}</div>`;
    }
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let helpModalIndex = 0;
  return `<main class="relative max-w-screen min-h-screen p-8 flex flex-col justify-center items-start gap-16 text-left">
    ${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `XD Presenter for PC`;
    }
  })}
    <div class="md:w-full flex flex-col md:flex-row md:justify-start items-start gap-8">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(P2, "P2").$$render($$result, {}, {}, {
          default: () => {
            return `<a download href="/presenter/xd_presenter.msi" class="transition duration-200 hover:scale-[101%] rounded-full h-20 bg-black px-8 flex items-center gap-4 text-white">${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                name: "download",
                textClass: "text-4xl md:text-5xl"
              },
              {},
              {}
            )}
                Download for Windows
            </a>`;
          }
        })}`;
      }
    }
  )}
        ${each(["apple-mac", "linux"], (iconData) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => {
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(P2, "P2").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"transition duration-100 hover:invert rounded-full border border-black w-20 h-20 bg-white px-8 " + escape(iconData == "linux" ? "pb-2" : "pb-1", true) + " center_row"}">${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  name: iconData,
                  textClass: "text-4xl md:text-5xl"
                },
                {},
                {}
              )}</div>
            `;
            }
          })}`;
        }
      }
    )}`;
  })}</div>
    <div><a href="https://www.youtube.com/watch?v=cctYDdnPzTU">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(B, "B").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(P3, "P3").$$render($$result, {}, {}, {
              default: () => {
                return `Video tutorial ${validate_component(Icon, "Icon").$$render($$result, { name: "open-new-window" }, {}, {})}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}</a>
        <div class="h-4"></div>
        ${validate_component(Button, "Button").$$render($$result, { onClick: () => helpModalIndex = 1 }, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(P3, "P3").$$render($$result, {}, {}, {
            default: () => {
              return `Why are there 3 different download buttons?`;
            }
          })}`;
        }
      })}`;
    }
  })}
        <div class="h-4"></div>
        ${validate_component(Button, "Button").$$render($$result, { onClick: () => helpModalIndex = 2 }, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(P3, "P3").$$render($$result, {}, {}, {
            default: () => {
              return `Why am I getting antivirus warnings?`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></main>
${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      open: helpModalIndex != 0,
      onDismissed: () => helpModalIndex = 0
    },
    {},
    {
      default: () => {
        return `<div class="text-left">${helpModalIndex == 1 ? `${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `If you don&#39;t know what the symbols on the buttons mean, just click the &quot;Download for Windows&quot; button and you should be OK.`;
          }
        })}` : `${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `In some cases, XD Presenter produces false-positive warnings.<br><br>
                ${validate_component(B, "B").$$render($$result, {}, {}, {
              default: () => {
                return `<a href="TODO: /contact">Contact me</a>`;
              }
            })} if you want to make sure that I take full responsibility for the app&#39;s security.<br><br>
                I don&#39;t exactly know the reason for the antivirus warning,
                but it&#39;s probanly that I did not buy an expensive security certificate to let the app be checked independently.
                This would be just a proof and changes nothing about the actual security though.
            `;
          }
        })}`}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
