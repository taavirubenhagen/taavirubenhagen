import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
/* empty css                   */import { B as Button } from "../../chunks/Button4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="h-screen center_col"><div class="flex flex-col justify-center items-stretch">${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      onClick: () => window.location.href = "/terminal"
    },
    {},
    {
      default: () => {
        return `Terminal Website`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      borderClass: "pointer-events-none invert border-t-0 border-background text-background",
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `_`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"
    },
    {},
    {
      default: () => {
        return `Presentation Master 2 - Android
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
        return `Presentation Master 2 - iOS`;
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
        return `HvF-Homepage - The Presentation Master
        `;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      borderClass: "pointer-events-none invert border-t-0 border-background text-background",
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `_`;
      }
    }
  )}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      openInNew: true,
      borderClass: "border-t-0",
      onClick: () => window.location.href = "https://www.instagram.com/taavirubenhagen/"
    },
    {},
    {
      default: () => {
        return `Instagram: @taavirubenhagen
        `;
      }
    }
  )}</div></main>`;
});
export {
  Page as default
};
