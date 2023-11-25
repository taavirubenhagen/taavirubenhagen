import { c as create_ssr_component, v as validate_component, e as escape, h as each } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */import { M as MediumParagraph } from "../../../chunks/MediumParagraph.js";
import { L as LargeHeading } from "../../../chunks/LargeHeading.js";
import { I as Icon } from "../../../chunks/RawButton.js";
import { B as Button } from "../../../chunks/Button3.js";
import { B as Button$1 } from "../../../chunks/Button4.js";
const MediumSubtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="block text-2xl md:text-3xl text-neutral-500 font-bold tracking-widest">${slots.default ? slots.default({}) : ``}</t>`;
});
const LargeSubtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="block text-2xl md:text-3xl text-neutral-500 font-bold tracking-widest">${slots.default ? slots.default({}) : ``}</t>`;
});
const SmallHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl md:text-5xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const MediumHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-4xl md:text-6xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const InlineParagraphButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${validate_component(Button, "Button").$$render($$result, { onClick: () => console.log("TODO") }, {}, {
    default: () => {
      return `${escape(content)}${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "nav-arrow-down",
          textClass: "relative left-1 top-1"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
function genTableIcon(name, isOnPrimary = false) {
  const startString = '<i class="relative top-1 text-2xl ';
  switch (name) {
    case "none":
      return startString + 'text-red-600 iconoir-xmark"></i>';
    case "paid":
      return startString + 'text-red-600 iconoir-apple-mac"></i>';
    case "free":
      return startString + 'text-green-600 iconoir-check"></i>';
    case "remote":
      return startString + 'iconoir-pen-connect-wifi"></i>';
    case "control":
      return startString + 'iconoir-arrow-seperate"></i>';
    case "cards":
      return startString + 'iconoir-credit-cards"></i>';
    case "notes":
      return startString + 'iconoir-notes"></i>';
    case "timer":
      return startString + 'iconoir-timer"></i>';
    case "clock":
      return startString + 'iconoir-clock"></i>';
    case "abp":
      return startString + 'iconoir-dev-mode-phone"></i>';
    default:
      return "";
  }
}
function genTableIconArray(name) {
  return new Array(10).fill(genTableIcon(name));
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main><section class="relative w-screen h-screen"><div class="w-screen h-screen p-4 md:p-16 center_col text-center">${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Hi, I&#39;m Taavi<br>R\xFCbenhagen.`;
    }
  })}
            <div class="h-8"></div>
            ${validate_component(LargeSubtitle, "LargeSubtitle").$$render($$result, {}, {}, {
    default: () => {
      return `I&#39;m a self-taught UI/UX Designer
                <br>
                and Front-End Engineer.
            `;
    }
  })}</div></section>
    <section class="w-screen min-h-screen flex flex-col-reverse md:flex-row md:items-center"><div class="w-full md:w-1/2 min-h-screen md:min-h-0 p-8 md:p-16 flex flex-col text-justify md:text-left"><div class="text-left">${validate_component(MediumSubtitle, "MediumSubtitle").$$render($$result, {}, {}, {
    default: () => {
      return `My largest project: `;
    }
  })}
                <div class="h-4"></div>
                ${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Presentation Master 2
                `;
    }
  })}</div>
            <div class="h-8"></div>
            ${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `What if you had all your presentation tools combined - remote control, note cards, timer and more?
                And what if it came for free, on a device you carry around everyday? Well, you don&#39;t have to imagine - just try it.
                A Better Presenter fixes the issues of it&#39;s predecessor,
                ${validate_component(InlineParagraphButton, "InlineParagraphButton").$$render($$result, { content: "The Presentation Master" }, {}, {})}
                , and lets you focus entirely on your presentation.
            `;
    }
  })}
            <div class="h-8"></div>
            ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      openInNew: true,
      onClick: () => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"
    },
    {},
    {
      default: () => {
        return `Android
            `;
      }
    }
  )}
            ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => alert("Coming soon!")
    },
    {},
    {
      default: () => {
        return `iOS`;
      }
    }
  )}</div>
        <div class="relative md:left-24 w-full md:w-1/2 md:h-screen px-4 py-8 md:py-32 flex">${each(
    [
      "md:right-0 md:hover:scale-[100.5%]",
      "md:right-32 md:z-20 md:scale-110 md:hover:scale-[110.5%]",
      "md:right-64 md:hover:scale-[100.5%]"
    ],
    (e, i) => {
      return `${`<div class="${escape(e, true) + " transition-all duration-400 relative md:grayscale md:hover:grayscale-0 rounded-3xl border border-onBackground w-full md:w-auto md:h-full aspect-[17/32] bg-background center_col"}">${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `[Image]`;
        }
      })}</div>
                    ${i > 0 ? `<div class="w-8"></div>` : ``}`}`;
    }
  )}</div></section>
    <section class="w-screen min-h-screen p-8 md:p-16 flex flex-col text-justify md:text-left">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Presentation Master 2 vs physical presenter vs note cards vs timer
        `;
    }
  })}
        <div class="h-12 md:h-16"></div>
        ${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full flex flex-col"><div class="h-8 flex items-center"><!-- HTML_TAG_START -->${genTableIcon("none")}<!-- HTML_TAG_END --><div class="inline w-2"></div>Not included</div>
                <div class="h-8 flex items-center"><!-- HTML_TAG_START -->${genTableIcon("paid")}<!-- HTML_TAG_END --><div class="inline w-2.5"></div>Included, but not free</div>
                <div class="h-8 flex items-center"><!-- HTML_TAG_START -->${genTableIcon("free")}<!-- HTML_TAG_END --><div class="inline w-2"></div>Free &amp; Ready to use</div></div>`;
    }
  })}
        <div class="h-8"></div>
        <div class="rounded-lg border border-onBackground grid grid-cols-5 grid-rows-4">${each(
    [
      ["Feature", ""],
      ["Physical presenter", genTableIcon("remote")],
      ["Note cards", genTableIcon("cards")],
      ["Physical timer", genTableIcon("timer")],
      ["A Better Presenter", genTableIcon("abp")],
      ["Remote control", genTableIcon("control")],
      genTableIconArray("paid"),
      genTableIconArray("none"),
      genTableIconArray("none"),
      genTableIconArray("free"),
      ["Speaker notes", genTableIcon("notes")],
      genTableIconArray("none"),
      genTableIconArray("paid"),
      genTableIconArray("none"),
      genTableIconArray("free"),
      ["Time management", genTableIcon("clock")],
      genTableIconArray("none"),
      genTableIconArray("none"),
      genTableIconArray("paid"),
      genTableIconArray("paid")
    ],
    (e, i) => {
      return `<div class="${"relative " + escape(i === 0 ? "rounded-tl-md" : "", true) + " " + escape(i === 4 ? "rounded-tr-md" : "", true) + " " + escape(i === 15 ? "rounded-bl-md" : "", true) + " " + escape(i === 19 ? "rounded-br-md" : "", true) + " border border-onBackground min-w-32 h-16 " + escape(
        (i + 1) % 5 === 0 ? "primary" : i % 5 === 0 || i < 5 ? "bg-primary bg-opacity-5" : "background",
        true
      ) + " center_row truncate"}">${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
            default: () => {
              return `<!-- HTML_TAG_START -->${e[0]}<!-- HTML_TAG_END -->
                        `;
            }
          })}
                        ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
            default: () => {
              return `<!-- HTML_TAG_START -->${e[1]}<!-- HTML_TAG_END -->
                        `;
            }
          })}
                    `;
        }
      })}
                </div>`;
    }
  )}</div></section>
    
    <section class="w-screen h-1/2 md:h-screen background p-8 md:p-16 center_col relative text-center">${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Contact me for any collaboration.`;
    }
  })}
        <div class="h-16"></div>
        ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      onClick: () => window.location.href = "mailto:taavi.ruebenhagen@gmail.com"
    },
    {},
    {
      default: () => {
        return `E-Mail me`;
      }
    }
  )}</section></main>`;
});
export {
  Page as default
};
