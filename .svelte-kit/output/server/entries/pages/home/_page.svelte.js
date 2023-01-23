import { c as create_ssr_component, v as validate_component, d as each } from "../../../chunks/index.js";
/* empty css                      */import { T as Text_button } from "../../../chunks/text_button.js";
import { T as Title_section } from "../../../chunks/title_section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Title_section, "TitleSection").$$render($$result, { index: 0 }, {}, {
    default: () => {
      return `<h1>I make apps.</h1>`;
    }
  })}
  ${validate_component(Title_section, "TitleSection").$$render(
    $$result,
    {
      primary: true,
      index: 1,
      sectionClass: "bg-primary text-onPrimary"
    },
    {},
    {
      default: () => {
        return `<h3 class="${"primary"}">I&#39;m a self-taught UI/UX Designer and Front-End Engineer.</h3>`;
      }
    }
  )}
  ${validate_component(Title_section, "TitleSection").$$render(
    $$result,
    {
      index: 2,
      sectionClass: "bg-primary text-onPrimary"
    },
    {},
    {
      default: () => {
        return `<h3>Every aspect of any app on any platform.</h3>
    <div class="${"h-16"}"></div>
    <div class="${"flex_row_center"}">${each(["", "", "", "", "", ""], (data) => {
          return `<div class="${"m-6 shadow-xl rounded-2xl shadow-neutral-300 w-24 h-24"}"></div>`;
        })}</div>`;
      }
    }
  )}
  ${validate_component(Title_section, "TitleSection").$$render(
    $$result,
    {
      primary: true,
      index: 3,
      sectionClass: "bg-primary text-onPrimary"
    },
    {},
    {
      default: () => {
        return `<h3 class="${"primary"}">I&#39;m a self-taught UI/UX Designer and Front-End Engineer.</h3>`;
      }
    }
  )}
  ${validate_component(Title_section, "TitleSection").$$render($$result, { index: 4 }, {}, {
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
