import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index2.js";
/* empty css                                                    */import { T as Title_section, I as Interactive } from "../../../chunks/title_section.js";
/* empty css                      */import { T as Text_button } from "../../../chunks/text_button.js";
import { C as Content_section } from "../../../chunks/content_section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Title_section, "TitleSection").$$render($$result, { index: 0 }, {}, {
    default: () => {
      return `<h3>I design, build and deploy digital products like websites, icons or apps from 10\u20AC.</h3>
    <div class="${"h-16"}"></div>
    <div class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
        default: () => {
          return `Hire me`;
        }
      })}</div>`;
    }
  })}
  ${validate_component(Content_section, "ContentSection").$$render(
    $$result,
    {
      primary: true,
      title: "Projects",
      sectionClass: "bg-primary text-onPrimary"
    },
    {},
    {
      default: () => {
        return `<div class="${"h-0"}"></div>
    <div class="${"grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-8"}">${each(
          [
            [
              "The Presenter.",
              "The Presenter is a holistic presentation tool app featuring remote control for your PowerPoint or Google Presentation from your phone, speaker notes and an integrated timer that vibrates at customizable times.",
              "presenter"
            ],
            [
              "Tavy Design System & TavyIcons.",
              "TavyIcons is an ultra minimalist UI icon set for apps or websites. Animated versions of all icons are under development.",
              "icons"
            ],
            [
              "The Simplest Counter.",
              "Just a simple counting app, but with excellent execution. xd.",
              "counter"
            ],
            [
              "Outfyx App.",
              "What if you never had to think about what to wear again?",
              "outfyx"
            ],
            ["Personal Website.", "You see it here.", "home"]
          ],
          (data, i) => {
            return `${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
              default: () => {
                return `<a${add_attribute("href", data[2], 0)}><button class="${"w-full h-full"}"><div class="${"duration-800 hover:invert rounded-2xl border border-onPrimary w-full h-full bg-primary p-8 text-justify"}"><h4 class="${""}">${escape(data[0])}</h4>
                <div class="${"h-8"}"></div>
                <s1 class="${""}">${escape(data[1])}</s1></div>
            </button></a>
        `;
              }
            })}`;
          }
        )}</div>`;
      }
    }
  )}
  ${validate_component(Title_section, "TitleSection").$$render($$result, { index: 2 }, {}, {
    default: () => {
      return `<h3>Contact me for any collaboration.</h3>
    <div class="${"h-16"}"></div>
    <div class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, { primary: true }, {}, {
        default: () => {
          return `E-Mail me`;
        }
      })}</div>`;
    }
  })}</main>`;
});
export {
  Page as default
};
