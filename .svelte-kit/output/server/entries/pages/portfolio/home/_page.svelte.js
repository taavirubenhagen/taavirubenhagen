import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import { w as writable } from "../../../../chunks/index2.js";
import "ua-parser-js";
/* empty css                         */import { H as H2 } from "../../../../chunks/H2.js";
import { B } from "../../../../chunks/B.js";
const globalScrollY = writable(0);
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-8xl md:text-9xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const O1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(H1, "H1").$$render($$result, {}, {}, {
    default: () => {
      return `<t class="text-outline font-normal">${slots.default ? slots.default({}) : ``}</t>`;
    }
  })}`;
});
const O2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `<t class="text-outline font-normal">${slots.default ? slots.default({}) : ``}</t>`;
    }
  })}`;
});
const letterBasedTyping = true;
const visibleMessage = "I'm a self-*taught 18-|year-old~UI/UX|Designer,~Developer|and Entre*preneur.";
const scrollTypingSpeed = 8;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let typedMessageSectionOffset;
  let phoneMockupSectionOffset;
  let windowHeight;
  let scrollY;
  let scrollTypingProgress = 0;
  globalScrollY.subscribe((value) => {
    scrollY = value;
    console.log(90 * ((scrollY - phoneMockupSectionOffset) / windowHeight) - 10);
    let tempScrollTypingProgress = Math.floor(visibleMessage.length * (value - typedMessageSectionOffset) / (windowHeight * (scrollTypingSpeed * 0.6)));
    if (["|", " ", "-"].includes(visibleMessage[tempScrollTypingProgress]) || letterBasedTyping) {
      scrollTypingProgress = tempScrollTypingProgress;
    }
  });
  typedMessageSectionOffset = windowHeight;
  phoneMockupSectionOffset = windowHeight + scrollTypingSpeed * windowHeight - windowHeight;
  return `


<main><div class="w-full min-h-screen sm:p-16 flex flex-col justify-center items-center lg:items-start"><div class="flex flex-col items-start">${validate_component(O1, "O1").$$render($$result, {}, {}, {
    default: () => {
      return `Hi, I&#39;m`;
    }
  })}
            ${`${validate_component(H1, "H1").$$render($$result, {}, {}, {
    default: () => {
      return `Taavi R\xFCbenhagen.`;
    }
  })}`}</div></div>
    <div class="bg-gradient-to-b from-background to-primary" style="${"padding-top: 50vh; min-height: " + escape(100 * scrollTypingSpeed, true) + "vh;"}"><div class="-translate-y-1/2 sticky top-1/2 pointer-events-none sm:p-16 text-center text-white">${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${(() => {
        let m = visibleMessage.substring(0, scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
        return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
      })()}<!-- HTML_TAG_END -->`;
    }
  })}
            ${validate_component(O2, "O2").$$render($$result, {}, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${(() => {
        let m = visibleMessage.substring(scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
        return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
      })()}<!-- HTML_TAG_END -->`;
    }
  })}</div></div>
    <div class="relative bg-gradient-to-b from-primary via-primary to-teal-900" style="min-height: 500vh;"><div class="sticky top-[15vh] h-[screen] flex_col_center text-onPrimary"><div class="transition duration-800 absolute"><div class="rounded-2xl border border-onPrimary w-[35vh] h-[70vh] flex_col_center text-onPrimary">[Image]
                </div></div>
            <div class="relative scale-75" style="${"left: " + escape(10 + 2 * ((scrollY - phoneMockupSectionOffset) / windowHeight), true) + "vh;"}"><div class="rounded-2xl border border-onPrimary w-[35vh] h-[70vh] flex_col_center">[Image]
                </div></div></div></div>
    <div class="h-screen p-16 flex flex_col_center items-start sm:items-center"><a href="/portfolio/newsletter">${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `Sign up for my newsletter`;
        }
      })}`;
    }
  })}</a></div></main>`;
});
export {
  Page as default
};
