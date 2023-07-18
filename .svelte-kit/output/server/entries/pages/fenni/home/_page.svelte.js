import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                         */import { H as H2, P as P3 } from "../../../../chunks/P3.js";
import { P as P1 } from "../../../../chunks/P1.js";
import { B as Button } from "../../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let windowHeight;
  let scrollY;
  setInterval(
    () => {
    },
    500
  );
  return `


<main class="bg-gradient-to-br from-yellow-50 via-yellow-700 to-yellow-900 text-center"><section class="relative h-screen"><div class="fixed opacity-75 brightness-75 contrast-200 w-full h-screen flex_col_center justify-start"><img alt="" src="/centered_explosion.png" class="w-full min-w-screen" style="${"transform: scale(" + escape(
    (() => {
      let x = scrollY / windowHeight / 1;
      let limit = 1.25;
      return x ** 2 > limit ? limit : x ** 2;
    })(),
    true
  ) + ");"}"></div>
        <div class="${"fixed brightness-75 w-full h-screen " + escape("px-8", true) + " flex_col_center"}" style="${"opacity: " + escape(1 - 0 * (scrollY / windowHeight), true) + ";"}"><img alt="Portrait von mir" src="/colorful_woman.png"${add_attribute("class", "w-full", 0)} style="${"opacity: " + escape(
    (() => {
      let limit = 1.25;
      let x = scrollY / windowHeight;
      let y = limit * 2 - scrollY / windowHeight;
      return x < limit ? limit : y < 0 ? 0 : y;
    })(),
    true
  ) + ";"}"></div>
        <div class="absolute z-15 w-full h-screen overflow-hidden p-16 flex_col_center"><div class="mt-4 mb-4 font-logo">${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Hi, ich bin FENNI.`;
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
        return `
                <a href="/fenni/projects" class="relative z-20 my-8 rounded-full h-12 bg-yellow-600 px-6 flex_row_center text-white" style="filter: drop-shadow(0px 0px 0px rgb(250 204 21));">${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `Sieh Projekte`;
          }
        })}</a>`;
      }
    }
  )}</div></section>
    <section class="h-screen"></section>
    <section class="h-screen"></section>
    <section class="h-[50vh]"></section>
    <section class="relative z-30 w-full h-screen flex_col_center"><div class="w-full p-8 md:w-1/2 md:p-0">${validate_component(P1, "P1").$$render($$result, {}, {}, {
    default: () => {
      return `Ich bin eine freie K\xFCnstlerin aus Braunschweig und mache Kunst aller Art:
                B\xFCcher schreiben, Musik aufnehmen, Leute vollabern etc.<br><br>
                Auf der &quot;Projekte&quot;-Seite kannst du gerne meine bisherigen Erfolge bewundern.<br><br>
                Bei Interesse an Zusammenarbeit oder um einfach mal Hallo zu sagen, schreib mich gerne an;
                die Kontaktdaten findest du unten.
            `;
    }
  })}</div></section></main>


`;
});
export {
  Page as default
};
