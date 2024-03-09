import { c as create_ssr_component, v as validate_component, e as escape, o as onMount } from "../../../../../chunks/index3.js";
/* empty css                            */import { S as SmallParagraph } from "../../../../../chunks/SmallParagraph.js";
import { R as RawButton, I as Icon } from "../../../../../chunks/RawButton.js";
import { S as Section } from "../../../../../chunks/Section.js";
const InlineButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { invisible = false } = $$props;
  let { inverted = false } = $$props;
  let { openInNew = false } = $$props;
  let { onClick } = $$props;
  if ($$props.invisible === void 0 && $$bindings.invisible && invisible !== void 0)
    $$bindings.invisible(invisible);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${"inline gap-2 " + escape(invisible ? "" : "underline underline-offset-4", true)}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { inverted, name: "open-new-window" }, {}, {})}` : ``}</div>`;
    }
  })}`;
});
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
