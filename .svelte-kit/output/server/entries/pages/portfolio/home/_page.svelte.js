import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
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
  return `<t class="underline underline-offset-8">${slots.default ? slots.default({}) : ``}</t>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".half_screen.svelte-1yeb7de{height:50vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
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
    
    <div class="w-full half_screen primary p-16 md:p-32 flex flex-col md:flex-row justify-between items-center svelte-1yeb7de"><div class="h-full flex flex-col justify-between break-words">${validate_component(P1, "P1").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `taavi.ruebenhagen@gmail.com`;
        }
      })}`;
    }
  })}
            <div class="text-neutral-500"><div>Pothof 9d</div>
                <div>38122 Braunschweig</div></div></div>
        <div class="h-full flex flex-col justify-between items-end"><div>LinkedIn</div>
            <div>Instagram</div>
            <div>TikTok</div></div></div>
</main>`;
});
export {
  Page as default
};
