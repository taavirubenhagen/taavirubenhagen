import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
/* empty css                            */import { T as Text_button } from "../../../../../chunks/text_button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main><section class="w-screen min-h-screen background p-8 md:p-16 text-center"><t4>Website</t4>
    <div class="h-8"></div>
    <div><a href="/me/home">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Home`;
    }
  })}</a>
        <div class="h-4"></div>
        <a href="/me/landing/projects">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Projects`;
    }
  })}</a></div>
    <div class="h-16"></div>
    <t4>External</t4>
    <div class="h-8"></div>
    <div><a href="https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `HvF-Homepage - The Presentation Master`;
    }
  })}</a></div>
    <div class="h-16"></div>
    <t4>Instagram</t4>
    <div class="h-8"></div>
    <div><a href="https://www.instagram.com/taavirubenhagen/">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `@taavirubenhagen`;
    }
  })}</a>
        <div class="h-4"></div>
        <a href="https://www.instagram.com/the_presenter/">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `@the_presenter`;
    }
  })}</a></div></section></main>`;
});
export {
  Page as default
};
