import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                         */import { B as Button } from "../../../../chunks/Button2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<main class="bg-black text-white" style="font-family: 'Young Serif';"><img src="/images/depri_portrait_square.jpg" alt="Depri portrait" class="absolute -z-5 right-0 h-full object-cover">
    <div class="absolute z-5 right-0 h-full aspect-square bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
    
    <div class="relative z-20 h-screen flex flex-col justify-end md:justify-center p-16"><h2>I&#39;m Taavi
            <br>
            R\xFCbenhagen.
        </h2>
        <div class="h-8"></div>
        <h4>Entrepreneur, App developer, Student.</h4>
        <div class="h-16"></div>
        <a href="/personal/home">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => alert("Under development. Stay tuned!")
    },
    {},
    {
      default: () => {
        return `<div class="border border-white h-12 pl-8 pr-6 center_row gap-4">Projects
                    <img src="/icons/beta/bold_forward.svg" alt="Forward icon" class="h-5 invert"></div>`;
      }
    }
  )}</a></div></main>`;
});
export {
  Page as default
};
