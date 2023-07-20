import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, f as add_attribute, g as each, e as escape } from "../../../../chunks/index3.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
import "ua-parser-js";
import { S as ScaleOut } from "../../../../chunks/ArrowUp.svelte_svelte_type_style_lang.js";
/* empty css                         */import { P as P3 } from "../../../../chunks/P3.js";
import { B as Button } from "../../../../chunks/Button.js";
const apiUrl = "https://api.github.com/repos/taavirubenhagen/taavirubenhagen/contents/static/fenni/projects";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projectData = [
    [
      "Offenes Kunstprojekt",
      "https://www.blitzrechner.de/wp-content/uploads/2015/05/kunstwerke-preise.jpg"
    ],
    [
      "Ein Bild, das keine Farbe hat",
      "https://www.sueddeutsche.de/image/sz.1.5914567/1200x675?v=1686329819"
    ],
    [
      "Kurzfilme",
      "https://www.ahlen.de/fileadmin/Fotos_ab_Mai_2020/Bildung_Kultur/paint-brush-Pixabay.jpg"
    ],
    [
      "AdLeF",
      "https://www.akki-ev.de/wp-content/uploads/2014/04/Akki-Kunstcamp-2014.jpg"
    ],
    [
      "Musikalische Werke",
      "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg"
    ],
    [
      "Schauspielkarriere",
      "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg"
    ]
  ];
  let timerIntervals = 0;
  globalScrollY.subscribe((value) => {
  });
  setInterval(
    () => {
      timerIntervals++;
    },
    5e3
  );
  return `


<main>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        <div class="w-full h-screen flex_col_center">${validate_component(ScaleOut, "ScaleOut").$$render(
        $$result,
        {
          duration: "800ms",
          unit: "px",
          size: "64",
          color: "rgb(202 138 4)"
        },
        {},
        {}
      )}</div>
    `;
    }
    return function(projetData) {
      return `
        <div class="fixed w-full h-full text-onPrimary"><img${add_attribute("src", projectData[timerIntervals % projectData.length][1], 0)} alt="" class="absolute z-0 min-w-full min-h-full object-cover">
            <div class="absolute z-5 w-full h-full"><div class="w-full h-full opacity-50 bg-gradient-to-b from-transparent to-black"></div></div>
            <div class="absolute z-15 w-full h-full p-8 md:p-16 flex flex-col justify-end items-start"><div class="flex flex-wrap">${each(projectData[timerIntervals % projectData.length][0].split(""), (letter) => {
        return `<h2 class="font-handwriting">${escape(letter)}</h2>`;
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
            return `<a href="/fenni/projects/offenes-kunstprojekt" class="relative z-20 my-8 rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4 flex_row_center text-white">${validate_component(P3, "P3").$$render($$result, {}, {}, {
              default: () => {
                return `Mach es selbst`;
              }
            })}</a>`;
          }
        }
      )}
                <div class="flex gap-2">${each(projectData, (_, i) => {
        return `<div class="${"transition duration-[5s] ease-linear rounded-full w-8 h-1 " + escape(timerIntervals >= i ? "bg-yellow-600" : "bg-white", true)}"></div>`;
      })}</div></div></div>
        <div class="w-full" style="${"height: " + escape(projectData.length * 100, true) + "%;"}"></div>
    `;
    }();
  }((async () => {
    let apiData;
    try {
      apiData:
        [] = await (await fetch(apiUrl)).json();
      let projectNames = (apiData ?? [{ type: "", name: "" }]).filter((item) => item.type === "dir").map((item) => item.name);
    } catch (e) {
      return [e, e, e];
    }
    const projectData2 = [apiData];
    return [projectData2];
  })())}</main>`;
});
export {
  Page as default
};
