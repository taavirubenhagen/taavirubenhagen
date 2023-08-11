import { c as create_ssr_component, e as escape, v as validate_component, h as each } from "../../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../../chunks/DeviceDetector.js";
/* empty css                         */import { M as Main_headline } from "../../../../chunks/main_headline.js";
import { I as Icon } from "../../../../chunks/icon.js";
import { T as Text_button } from "../../../../chunks/text_button.js";
const Medium_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-xl md:text-2xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Large_subtitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="block text-2xl md:text-3xl text-neutral-500 font-bold tracking-widest">${slots.default ? slots.default({}) : ``}</t>`;
});
const Section_headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-4xl md:text-6xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const Large_paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-2xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Inline_paragraph_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<button class="transition-all duration-200 inline -mr-1 opacity-50 hover:scale-[101%]">${escape(content)}${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "nav-arrow-down",
      textClass: "relative left-1 top-2"
    },
    {},
    {}
  )}</button>`;
});
function genTableIcon(name, isOnPrimary = false) {
  const startString = '<i class="relative top-1 text-2xl ';
  switch (name) {
    case "none":
      return startString + 'text-red-600 iconoir-cancel"></i>';
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

<main><section class="relative w-screen h-screen">
        <div class="w-screen h-screen p-4 md:p-16 center_col text-center">${validate_component(Main_headline, "MainHeadline").$$render($$result, {}, {}, {
    default: () => {
      return `Hi, I&#39;m Taavi<br>R\xFCbenhagen.`;
    }
  })}
            <div class="h-8"></div>
            ${validate_component(Large_subtitle, "LargeSubtitle").$$render($$result, {}, {}, {
    default: () => {
      return `I&#39;m a self-taught UI/UX Designer
                <br>
                and Front-End Engineer.
            `;
    }
  })}</div></section>
    <section class="w-screen min-h-screen flex flex-col-reverse md:flex-row md:items-center"><div class="w-full md:w-1/2 min-h-screen md:min-h-0 p-8 md:p-16 flex flex-col text-justify md:text-left"><div class="text-left">${validate_component(Large_subtitle, "LargeSubtitle").$$render($$result, {}, {}, {
    default: () => {
      return `My largest project: `;
    }
  })}
                ${validate_component(Main_headline, "MainHeadline").$$render($$result, {}, {}, {
    default: () => {
      return `A better presenter
                `;
    }
  })}</div>
            <div class="h-8"></div>
            ${validate_component(Large_paragraph, "LargeParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `What if you had all your presentation tools combined - remote control, note cards, timer and more?
                And what if it came for free, on a device you carry around everyday? Well, you don&#39;t have to imagine - just try it.
                A Better Presenter fixes the issues of it&#39;s predecessor,
                ${validate_component(Inline_paragraph_button, "InlineParagraphButton").$$render($$result, { content: "The Presentation Master" }, {}, {})}
                , and lets you focus entirely on your presentation.
            `;
    }
  })}
            <div class="h-8"></div>
            <a href="/presenter/waitlist">
                ${validate_component(Text_button, "TextButton").$$render($$result, { primary: true, buttonClass: "w-full" }, {}, {
    default: () => {
      return `Join waitlist`;
    }
  })}</a>
            </div>
        <div class="relative md:left-24 w-full md:w-1/2 md:h-screen px-4 py-8 md:py-32 flex">${each(
    [
      "md:right-0 md:hover:scale-[100.5%]",
      "md:right-32 md:z-20 md:scale-110 md:hover:scale-[110.5%]",
      "md:right-64 md:hover:scale-[100.5%]"
    ],
    (e, i) => {
      return `${`<div class="${escape(e, true) + " transition-all duration-400 relative md:grayscale md:hover:grayscale-0 rounded-3xl border border-onBackground w-full md:w-auto md:h-full aspect-[17/32] bg-background center_col"}">${validate_component(Medium_label, "MediumLabel").$$render($$result, {}, {}, {
        default: () => {
          return `[Image]`;
        }
      })}</div>
                    ${i > 0 ? `<div class="w-8"></div>` : ``}`}`;
    }
  )}</div></section>
    <section class="w-screen min-h-screen p-8 md:p-16 flex flex-col text-justify md:text-left">${validate_component(Section_headline, "SectionHeadline").$$render($$result, {}, {}, {
    default: () => {
      return `A Better Presenter vs physical presenter vs note cards vs timer
        `;
    }
  })}
        <div class="h-12 md:h-16"></div>
        ${validate_component(Medium_label, "MediumLabel").$$render($$result, {}, {}, {
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
      ) + " center_row truncate"}">${validate_component(Medium_label, "MediumLabel").$$render($$result, {}, {}, {
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
  )}</div>
        </section>
    
    <section class="w-screen h-1/2 md:h-screen background p-8 md:p-16 center_col relative text-center"><t3>Contact me for any collaboration.</t3>
        <div class="h-16"></div>
        <a href="mailto:taavi.ruebenhagen@gmail.com" class="center_row">${validate_component(Text_button, "TextButton").$$render($$result, { primary: true }, {}, {
    default: () => {
      return `E-Mail me`;
    }
  })}</a></section>
    <section class="w-screen h-screen background center_col"><t class="mt-8 text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-700">lol xD.</t></section></main>`;
});
export {
  Page as default
};
