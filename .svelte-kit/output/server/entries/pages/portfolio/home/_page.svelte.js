import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index2.js";
import { D as DeviceDetector } from "../../../../chunks/DeviceDetector.js";
/* empty css                         */import { H as H2 } from "../../../../chunks/H2.js";
import { B } from "../../../../chunks/B.js";
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
const typedMessage = "I'm a self-taught 17-y/o UI/UX-Designer, Developer and Entrepreneur.";
const scrollTypingSpeed = 5;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollTypingProgress = 0;
  return `


<main><div class="w-full min-h-screen sm:p-16 flex flex-col justify-center items-center sm:items-start"><div class="flex flex-col items-start">${validate_component(O1, "O1").$$render($$result, {}, {}, {
    default: () => {
      return `Hi, I&#39;m`;
    }
  })}
            ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "mobile" }, {}, {
    default: () => {
      return `${validate_component(H1, "H1").$$render($$result, {}, {}, {
        default: () => {
          return `Taavi `;
        }
      })}
                ${validate_component(H1, "H1").$$render($$result, {}, {}, {
        default: () => {
          return `R\xFCben-`;
        }
      })}
                ${validate_component(H1, "H1").$$render($$result, {}, {}, {
        default: () => {
          return `hagen.`;
        }
      })}`;
    }
  })}
            ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `${validate_component(H1, "H1").$$render($$result, {}, {}, {
        default: () => {
          return `Taavi R\xFCbenhagen.`;
        }
      })}`;
    }
  })}</div></div>
    <div class="relative w-full h-screen overflow-y-scroll sm:p-16 flex_col_center"><div class="${"h-[" + escape(100 * scrollTypingSpeed, true) + "vh]"}"></div>
        <div class="relative z-30">${validate_component(O2, "O2").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(typedMessage.substring(0, scrollTypingProgress))}`;
    }
  })}</div></div>
    <div class="min-h-screen p-16 flex flex-col justify-center items-center sm:items-start"><div class="w-full h-[75vh] flex flex-col justify-evenly items-center"><a href="/portfolio/newsletter">${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `Sign up for my newsletter`;
        }
      })}`;
    }
  })}</a></div></div></main>`;
});
export {
  Page as default
};
