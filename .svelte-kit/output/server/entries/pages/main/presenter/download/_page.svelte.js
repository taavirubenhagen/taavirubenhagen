import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index3.js";
import { I as Icon } from "../../../../../chunks/Icon2.js";
/* empty css                            */import { H as H2 } from "../../../../../chunks/H2.js";
import { B as Button, P as P3 } from "../../../../../chunks/Button.js";
import { B } from "../../../../../chunks/B.js";
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




<div class="${"transition duration-100 " + escape(open ? "" : "opacity-0 pointer-events-none", true)}"><div class="fixed z-35 left-0 top-0 w-full h-full bg-opacity-50 bg-black center_col"><button class="fixed w-full h-full"></button>
        <div class="relative z-40 my-64 rounded-2xl w-1/2 p-8 bg-background center_col">${slots.default ? slots.default({}) : ``}
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
      return `Presentation Master 2 for PC`;
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
            return `<a download href="/presenter/Presentation Master 2.msi" class="transition duration-200 hover:scale-[101%] rounded-full h-20 bg-black px-8 flex items-center gap-4 text-white">${validate_component(Icon, "Icon").$$render(
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
            </div>
        <div><a target="_blank" href="https://www.youtube.com/watch?v=cctYDdnPzTU">${validate_component(Button, "Button").$$render(
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
              return `Will there be a MacOS version?`;
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
  })}</div>
    </main>
${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      open: helpModalIndex != 0,
      onDismissed: () => helpModalIndex = 0
    },
    {},
    {
      default: () => {
        return `<div class="relative z-50 text-left">${helpModalIndex == 1 ? `${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `A MacOS version is planned, yet it is really hard to build because I don&#39;t have a Mac myself. If you want to help to make it happen, ${validate_component(B, "B").$$render($$result, {}, {}, {
              default: () => {
                return `<a href="/main/contact">contact me</a>`;
              }
            })}.`;
          }
        })}
            ` : `${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `In some cases, Presentation Master 2 produces false-positive warnings.<br><br>
                ${validate_component(B, "B").$$render($$result, {}, {}, {
              default: () => {
                return `<a href="TODO: /contact">Contact me</a>`;
              }
            })} if you want to make sure that I take full responsibility for the app&#39;s security.<br><br>
                I don&#39;t exactly know the reason for the antivirus warning,
                but it&#39;s probably that I did not buy an expensive security certificate to let the app be checked independently.
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
