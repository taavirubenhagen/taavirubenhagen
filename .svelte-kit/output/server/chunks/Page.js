import { c as create_ssr_component, v as validate_component, e as escape, d as subscribe, f as each } from "./index3.js";
/* empty css        */import { p as page } from "./stores.js";
import { S as SmallParagraph } from "./SmallParagraph.js";
import { R as RawButton, I as Icon } from "./RawButton.js";
import { S as Section } from "./Section.js";
const TertiaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openInNew = false } = $$props;
  let { inverted = false } = $$props;
  let { onClick } = $$props;
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(InlineButton, "InlineButton").$$render($$result, { openInNew, inverted, onClick }, {}, {
    default: () => {
      return `${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
const InlineButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openInNew = false } = $$props;
  let { inverted = false } = $$props;
  let { onClick } = $$props;
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${escape(inverted ? "invert" : "", true) + " flex gap-2 underline underline-offset-4 capitalize"}">${slots.default ? slots.default({}) : ``}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { name: "open-new-window" }, {}, {})}` : ``}</div>`;
    }
  })}`;
});
const RouteIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = $page.url.href.split("/").slice(3);
  console.log(routes);
  $$unsubscribe_page();
  return `<div class="absolute top-8 h-8 center_row">${each(["home"].concat(routes), (subroute, i) => {
    return `${i != 0 ? `\xA0&gt;\xA0` : ``}
        ${validate_component(TertiaryButton, "TertiaryButton").$$render(
      $$result,
      {
        onClick: () => window.location.href = "buildRoute(subroute)"
      },
      {},
      {
        default: () => {
          return `${escape(subroute)}`;
        }
      }
    )}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { withRouteIndicator = false } = $$props;
  if ($$props.withRouteIndicator === void 0 && $$bindings.withRouteIndicator && withRouteIndicator !== void 0)
    $$bindings.withRouteIndicator(withRouteIndicator);
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 " + (withRouteIndicator ? "pt-24" : "") + " center_col"
    },
    {},
    {
      default: () => {
        return `${withRouteIndicator ? `${validate_component(RouteIndicator, "RouteIndicator").$$render($$result, {}, {}, {})}` : ``}
    <div class="flex flex-col justify-center items-stretch">${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
export {
  InlineButton as I,
  Page as P
};
