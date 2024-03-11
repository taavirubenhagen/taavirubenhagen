import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index3.js";
import "../../../../../chunks/index4.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
import { S as SmallParagraph } from "../../../../../chunks/SmallParagraph.js";
import { M as MediumHeading } from "../../../../../chunks/MediumHeading.js";
import { B as Button } from "../../../../../chunks/Button3.js";
const TextSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { headerMessage } = $$props;
  let { bodyMessage = "" } = $$props;
  let { primaryButtonTitle } = $$props;
  let { backgroundClick = () => {
  } } = $$props;
  let { secondaryButtonTitle } = $$props;
  let { onSecondaryClick = () => {
  } } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.headerMessage === void 0 && $$bindings.headerMessage && headerMessage !== void 0)
    $$bindings.headerMessage(headerMessage);
  if ($$props.bodyMessage === void 0 && $$bindings.bodyMessage && bodyMessage !== void 0)
    $$bindings.bodyMessage(bodyMessage);
  if ($$props.primaryButtonTitle === void 0 && $$bindings.primaryButtonTitle && primaryButtonTitle !== void 0)
    $$bindings.primaryButtonTitle(primaryButtonTitle);
  if ($$props.backgroundClick === void 0 && $$bindings.backgroundClick && backgroundClick !== void 0)
    $$bindings.backgroundClick(backgroundClick);
  if ($$props.secondaryButtonTitle === void 0 && $$bindings.secondaryButtonTitle && secondaryButtonTitle !== void 0)
    $$bindings.secondaryButtonTitle(secondaryButtonTitle);
  if ($$props.onSecondaryClick === void 0 && $$bindings.onSecondaryClick && onSecondaryClick !== void 0)
    $$bindings.onSecondaryClick(onSecondaryClick);
  return `<div class="${escape(className, true) + " p-8 flex flex-col gap-4"}">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(headerMessage)}`;
    }
  })}
    ${bodyMessage ? `${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${bodyMessage}<!-- HTML_TAG_END -->`;
    }
  })}` : ``}
    <div></div>
    <div class="flex gap-4">${validate_component(Button, "Button").$$render($$result, { onClick: backgroundClick }, {}, {
    default: () => {
      return `${escape(primaryButtonTitle)}`;
    }
  })}
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      secondary: true,
      onClick: onSecondaryClick
    },
    {},
    {
      default: () => {
        return `${escape(secondaryButtonTitle)}`;
      }
    }
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="font-family: &quot;Roboto Serif&quot;">${validate_component(Section, "Section").$$render($$result, { className: "bg-green-900 text-white" }, {}, {
    default: () => {
      return `<div class="relative"><img src="/drafts/hoffmanns-schuppen/investing.jpg" alt="" class="w-full h-screen object-cover brightness-75">
            <div class="absolute bottom-8">${validate_component(TextSection, "TextSection").$$render(
        $$result,
        {
          headerMessage: "Investiere direkter als je zuvor ...",
          bodyMessage: "\n                        Bei uns kannst du Aktien kaufen,\n                        die dich direkt am Erfolg von Hoffmann's Schuppen beteiligen.\n                        <br/>\n                        Au\xDFerdem freuen wir uns \xFCber jede*n, die*r bei Hoffmann's Schuppen mitarbeiten m\xF6chte.\n                        Egal ob Einkauf, Verkauf oder Marketing - dein Einsatz z\xE4hlt!",
          primaryButtonTitle: "Investiere jetzt",
          backgroundClick: () => window.location.href = "/drafts/hoffmanns-schuppen/investor-relations",
          secondaryButtonTitle: "Oder bewirb dich",
          onSecondaryClick: () => window.location.href = "/drafts/hoffmanns-schuppen/mach-mit"
        },
        {},
        {}
      )}</div></div>
        ${``}`;
    }
  })}</div>`;
});
export {
  Page as default
};
