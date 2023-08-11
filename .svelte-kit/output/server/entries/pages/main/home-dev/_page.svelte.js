import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import "ua-parser-js";
import { g as globalScrollY } from "../../../../chunks/state.js";
/* empty css                         */import { O as O1, H as H1 } from "../../../../chunks/O1.js";
const ScrollReactiveElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { condition = true } = $$props;
  let { wrapperClass = "" } = $$props;
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0)
    $$bindings.wrapperClass(wrapperClass);
  return `




<div class="${escape(wrapperClass, true) + " fixed z-5 w-screen h-screen overflow-hidden"}">${condition ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
const visibleMessage = "I'm a self-*taught 18-|year-old~UI/UX|Designer,~Developer|and Entre*preneur.";
function calcScrollProgress(offset, sectionHeight, y) {
  return (y - offset) / sectionHeight;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let globalScrollProgress;
  let scrollData;
  let windowHeight;
  let scrollY;
  globalScrollY.subscribe((value) => {
    scrollY = value;
  });
  globalScrollProgress = calcScrollProgress(0, windowHeight, scrollY);
  scrollData = {
    hiVisible: globalScrollProgress < 0.5,
    scrollTypingProgress: Math.floor(visibleMessage.length * (scrollY - windowHeight * 2) / (windowHeight * 3)),
    scrollTypingElementVisible: 1.5 < globalScrollProgress && globalScrollProgress < 5.5
  };
  return `



<main class="relative z-0"><div class="absolute z-20 w-screen h-[6400vh]"></div>
    ${validate_component(ScrollReactiveElement, "ScrollReactiveElement").$$render($$result, { condition: scrollData.hiVisible }, {}, {
    default: () => {
      return `
        <div class="w-full h-screen sm:p-16 flex flex-col justify-center items-center lg:items-start"><div class="flex flex-col items-start">${validate_component(O1, "O1").$$render($$result, {}, {}, {
        default: () => {
          return `Hi, I&#39;m`;
        }
      })}
                ${`${validate_component(H1, "H1").$$render($$result, {}, {}, {
        default: () => {
          return `Taavi R\xFCbenhagen.`;
        }
      })}
                    ${escape(scrollY)}`}</div></div>`;
    }
  })}
    ${validate_component(ScrollReactiveElement, "ScrollReactiveElement").$$render(
    $$result,
    {
      condition: scrollData.scrollTypingElementVisible,
      wrapperClass: "center_col text-center"
    },
    {},
    {
      default: () => {
        return `<div class="sm:p-16 text-center"><h2 class="inline"><!-- HTML_TAG_START -->${(() => {
          let m = visibleMessage.substring(0, scrollData.scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
          return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
        })()}<!-- HTML_TAG_END -->
            </h2><h2 class="inline opacity-10"><!-- HTML_TAG_START -->${(() => {
          let m = visibleMessage.substring(scrollData.scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
          return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
        })()}<!-- HTML_TAG_END --></h2>
            </div>`;
      }
    }
  )}
        </main>`;
});
export {
  Page as default
};
