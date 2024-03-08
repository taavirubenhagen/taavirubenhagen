import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { S as SmallHeading } from "../../../../chunks/SmallHeading.js";
import { L as LargeHeading } from "../../../../chunks/LargeHeading.js";
import { B as Button } from "../../../../chunks/Button.js";
import { S as Section } from "../../../../chunks/Section.js";
const Section_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { top = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: className + " " + (top ? "pt-16" : "")
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="/images/abstract.jpg" alt="" class="absolute h-screen object-cover">
${validate_component(Section_1, "Section").$$render($$result, { top: true, className: "center_col" }, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => window.location.href = "/admin"
        },
        {},
        {
          default: () => {
            return `Enter`;
          }
        }
      )}`;
    }
  })}
${validate_component(Section_1, "Section").$$render($$result, { className: "center_col gap-8" }, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Hi, I&#39;m Taavi.`;
        }
      })}
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => window.location.href = "/admin"
        },
        {},
        {
          default: () => {
            return `Enter`;
          }
        }
      )}`;
    }
  })}
${validate_component(Section_1, "Section").$$render(
    $$result,
    {
      className: "p-16 center_col gap-8 text-center"
    },
    {},
    {
      default: () => {
        return `${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
          default: () => {
            return `I&#39;m an independent designer, developer, (artist), (activist) and entrepreneur`;
          }
        })}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => window.location.href = "/admin"
          },
          {},
          {
            default: () => {
              return `Admin`;
            }
          }
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
