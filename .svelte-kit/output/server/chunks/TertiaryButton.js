import { c as create_ssr_component, f as subscribe, g as each, v as validate_component, e as escape } from "./index3.js";
/* empty css        */import { p as page } from "./stores.js";
import { R as RawButton } from "./RawButton.js";
import { S as Section } from "./Section.js";
const SmallParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-md">${slots.default ? slots.default({}) : ``}</t>`;
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
  let { withoutRouteIndicator = false } = $$props;
  if ($$props.withoutRouteIndicator === void 0 && $$bindings.withoutRouteIndicator && withoutRouteIndicator !== void 0)
    $$bindings.withoutRouteIndicator(withoutRouteIndicator);
  return `${validate_component(Section, "Section").$$render($$result, { className: "p-8 pt-24 center_col" }, {}, {
    default: () => {
      return `${!withoutRouteIndicator ? `${validate_component(RouteIndicator, "RouteIndicator").$$render($$result, {}, {}, {})}` : ``}
    <div class="flex flex-col justify-center items-stretch">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
const TertiaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${escape(inverted ? "invert" : "", true) + " underline underline-offset-4 capitalize"}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Page as P,
  SmallParagraph as S
};
