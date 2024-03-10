import { c as create_ssr_component, o as onMount, v as validate_component, e as escape } from "../../../../../chunks/index3.js";
import "../../../../../chunks/index4.js";
import { I as InlineButton } from "../../../../../chunks/InlineButton.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let now, end;
  let distance, days, hours, minutes, seconds;
  function updateCountdown() {
    function calcTimeUnit(prevDivider, divider) {
      const result = Math.floor(distance % prevDivider / divider);
      return result / 10 < 1 ? "0" + result.toString() : result;
    }
    now = new Date();
    end = /* @__PURE__ */ new Date("04/15/2024 11:20 AM");
    distance = end.getTime() - now.getTime();
    days = calcTimeUnit(31556952e3, 864e5);
    hours = calcTimeUnit(864e5, 36e5);
    minutes = calcTimeUnit(36e5, 6e4);
    seconds = calcTimeUnit(6e4, 1e3);
  }
  setInterval(updateCountdown, 1e3);
  onMount(updateCountdown);
  return `<div style="font-family: &quot;Caveat Brush&quot;;">${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "bg-green-900 center_col text-white"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col gap-2"><t class="text-6xl md:text-7xl font-bold tracking-wider">${escape(days)}:${escape(hours)}:${escape(minutes)}:${escape(seconds)}</t>
            <div class="w-full grid grid-cols-4 text-xs text-white"><div class="center_row">Tage</div>
                <div class="center_row">Stunden</div>
                <div class="center_row">Minuten</div>
                <div class="center_row">Sekunden</div></div></div>
        <div class="absolute bottom-8 w-full center_row">${validate_component(InlineButton, "InlineButton").$$render(
          $$result,
          {
            invisible: true,
            onClick: () => window.location.href = "/drafts/hoffmanns-schuppen/admin"
          },
          {},
          {
            default: () => {
              return `Admin
            `;
            }
          }
        )}</div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
