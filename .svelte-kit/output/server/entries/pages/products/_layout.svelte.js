import { c as create_ssr_component, d as subscribe, v as validate_component } from "../../../chunks/index3.js";
import "ua-parser-js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                      */import { c as cursorButtonHover } from "../../../chunks/state.js";
import { M as MediumParagraph } from "../../../chunks/MediumParagraph.js";
import { R as RawButton } from "../../../chunks/RawButton.js";
import { B as Button } from "../../../chunks/Button3.js";
const Large_paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-2xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showFooter;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  cursorButtonHover.subscribe((value) => {
  });
  showFooter = $page.route.id?.includes("home-dev") ? false : true;
  $$unsubscribe_page();
  return `


<main class="overflow-x-hidden cursor-none">${slots.default ? slots.default({}) : ``}
    
    ${showFooter ? `<div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center"><div class="h-full flex flex-col md:justify-between break-all">
                <a href="mailto:taavi.ruebenhagen@gmail.com" class="text-left">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Large_paragraph, "LargeParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `taavi.ruebenhagen@gmail.com`;
          }
        })}`;
      }
    }
  )}</a>
                <div class="pt-8 md:p-0 text-neutral-500">Pothof 9d<br>
                    38122 Braunschweig, Germany<br></div></div>
            <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end text-left md:text-right">${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => window.location.href = "/main/contact"
    },
    {},
    {
      default: () => {
        return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Contact`;
          }
        })}`;
      }
    }
  )}
                ${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => window.location.href = "/main/privacy-policy"
    },
    {},
    {
      default: () => {
        return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Privacy Policy`;
          }
        })}`;
      }
    }
  )}</div></div>` : ``}</main>`;
});
export {
  Layout as default
};
