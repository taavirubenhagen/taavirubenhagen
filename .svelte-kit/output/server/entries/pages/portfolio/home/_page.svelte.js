import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index2.js";
import { D as DeviceDetector } from "../../../../chunks/DeviceDetector.js";
/* empty css                         */const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-8xl md:text-9xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-6xl md:text-7xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
const O1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(H1, "H1").$$render($$result, {}, {}, {
    default: () => {
      return `<t class="text-outline font-normal">${slots.default ? slots.default({}) : ``}</t>`;
    }
  })}`;
});
const P1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-3xl font-light">${slots.default ? slots.default({}) : ``}</t>`;
});
const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { underline = true } = $$props;
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  return `<t class="${"transition duration-400 " + escape(underline ? "underline underline-offset-8" : "", true) + " hover:text-neutral-400"}">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="w-full min-h-screen p-16 flex flex-col justify-center items-center sm:items-start"><div class="flex flex-col items-start">${validate_component(O1, "O1").$$render($$result, {}, {}, {
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
    <div class="min-h-screen p-16 flex flex-col justify-center items-center sm:items-start"><div class="w-full flex flex-col items-center">${`${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Sign up for my newsletter.`;
    }
  })}`}</div></div>
    
    <div class="w-full md:h-[50vh] primary p-16 md:p-32 flex flex-col md:flex-row justify-between md:items-center"><div class="h-full flex flex-col md:justify-between break-all">${validate_component(P1, "P1").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `taavi.ruebenhagen@gmail.com`;
        }
      })}`;
    }
  })}
            <div class="pt-8 md:p-0 text-neutral-500"><div>Pothof 9d</div>
                <div>38122 Braunschweig</div></div></div>
        <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end"><div class="h-8 md:h-auto">LinkedIn</div>
            <div class="h-8 md:h-auto">Instagram</div>
            <div class="h-8 md:h-auto">TikTok</div></div></div></main>`;
});
export {
  Page as default
};
