import { c as create_ssr_component, v as validate_component, h as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
import "ua-parser-js";
/* empty css                         */import { H as H2 } from "../../../../chunks/H2.js";
import { B as Button, P as P3 } from "../../../../chunks/Button.js";
const O2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `<t class="text-outline font-normal">${slots.default ? slots.default({}) : ``}</t>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imageUrls = [
    "https://www.blitzrechner.de/wp-content/uploads/2015/05/kunstwerke-preise.jpg",
    "https://www.sueddeutsche.de/image/sz.1.5914567/1200x675?v=1686329819",
    "https://www.ahlen.de/fileadmin/Fotos_ab_Mai_2020/Bildung_Kultur/paint-brush-Pixabay.jpg",
    "https://www.akki-ev.de/wp-content/uploads/2014/04/Akki-Kunstcamp-2014.jpg",
    "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg",
    "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg"
  ];
  let timerSeconds = 0;
  globalScrollY.subscribe((value) => {
  });
  setInterval(
    () => {
      timerSeconds++;
    },
    500
  );
  return `


<main><div class="fixed pointer-events-none w-full h-screen text-onPrimary"><img${add_attribute("src", imageUrls[Math.floor(timerSeconds / 10) % imageUrls.length], 0)} alt="" class="absolute z-0 w-full h-screen">
        <div class="absolute z-5 w-full h-screen"><div class="w-full h-full opacity-50 bg-gradient-to-b from-transparent to-black"></div></div>
        <div class="absolute z-15 w-full h-screen p-16 flex flex-col justify-end items-start"><div class="invert">${validate_component(O2, "O2").$$render($$result, {}, {}, {
    default: () => {
      return `Offenes Kunstprojekt`;
    }
  })}</div>
            ${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `<div class="relative z-20 my-8 pointer-events-auto rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4 flex_row_center text-white">${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `Mach es selbst`;
          }
        })}</div>`;
      }
    }
  )}
            <div class="flex gap-4"><div class="rounded-full w-8 h-1 backdrop-invert"></div>
                <div class="rounded-full w-8 h-1 backdrop-invert"></div>
                <div class="opacity-25 rounded-full w-8 h-1 backdrop-invert"></div>
                <div class="opacity-25 rounded-full w-8 h-1 backdrop-invert"></div></div></div></div>
    <div class="w-full" style="${"height: " + escape(imageUrls.length * 100, true) + "vh;"}"></div></main>`;
});
export {
  Page as default
};
