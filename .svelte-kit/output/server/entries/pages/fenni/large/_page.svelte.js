import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                         */import { P as P1, a as P3 } from "../../../../chunks/P3.js";
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-6xl md:text-7xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const O2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `<t class="text-outline font-normal">${slots.default ? slots.default({}) : ``}</t>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<main><div class="relative text-onPrimary"><img${add_attribute(
    "src",
    [
      "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg",
      "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg"
    ][0],
    0
  )} alt="" class="absolute w-full h-screen border-[0px] border-yellow-600">
        <div class="absolute z-5 w-full h-screen p-[0px]"><div class="w-full h-full bg-opacity-50 bg-black"></div></div>
        <div class="absolute z-10 w-full h-screen p-16 flex flex-col justify-end items-start"><div class="relative invert">${validate_component(O2, "O2").$$render($$result, {}, {}, {
    default: () => {
      return `Offenes Kunstprojekt`;
    }
  })}</div></div>
        <div class="absolute z-10 w-full h-screen p-16 flex justify-between items-start font-handwriting"><button class="flex items-center gap-8"><div class="rounded-full w-8 h-8 bg-yellow-700"></div>
                ${validate_component(P1, "P1").$$render($$result, {}, {}, {
    default: () => {
      return `Fenni`;
    }
  })}</button>
            <div class="flex justify-end items-start gap-16"><button>${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `Home`;
    }
  })}</button>
                <button>${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `Projekte`;
    }
  })}</button>
                <button>${validate_component(P3, "P3").$$render($$result, {}, {}, {
    default: () => {
      return `\xDCber mich`;
    }
  })}</button></div></div></div></main>`;
});
export {
  Page as default
};
