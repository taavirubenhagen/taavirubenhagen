import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
/* empty css                   */import { B as Button } from "../../chunks/Button4.js";
const ButtonSeperator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="opacity-0 pointer-events-none">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `_`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="min-h-screen p-8 center_col"><div class="flex flex-col justify-center items-stretch">${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      onClick: () => window.location.href = "/terminal"
    },
    {},
    {
      default: () => {
        return `Text-Based Website`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => alert("Coming soon!")
    },
    {},
    {
      default: () => {
        return `Projects`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => window.location.href = "/products"
    },
    {},
    {
      default: () => {
        return `Affiliate Shop`;
      }
    }
  )}
        ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      onClick: () => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"
    },
    {},
    {
      default: () => {
        return `Presenter (Android)
        `;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => alert("Coming soon!")
    },
    {},
    {
      default: () => {
        return `Presenter (iOS)`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => window.location.href = "https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d"
    },
    {},
    {
      default: () => {
        return `Presenter - Info
        `;
      }
    }
  )}
        ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      onClick: () => window.location.href = "https://www.instagram.com/taavirubenhagen/"
    },
    {},
    {
      default: () => {
        return `@taavirubenhagen
        `;
      }
    }
  )}</div></main>`;
});
export {
  Page as default
};
