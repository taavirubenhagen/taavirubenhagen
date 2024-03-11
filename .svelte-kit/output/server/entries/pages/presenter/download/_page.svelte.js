import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/index4.js";
import { S as SmallParagraph } from "../../../../chunks/SmallParagraph.js";
import { L as LargeHeading } from "../../../../chunks/LargeHeading.js";
import { S as Section } from "../../../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../../../chunks/Button.js";
import { I as Icon } from "../../../../chunks/icon.js";
import { R as RawButton } from "../../../../chunks/RawButton.js";
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
      return `<div class="inline gap-2 underline underline-offset-4">${slots.default ? slots.default({}) : ``}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { inverted, name: "open-in-new" }, {}, {})}` : ``}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div>${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Presentation Master 2 for PC`;
        }
      })}
        <div class="h-16"></div>
        ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `1. Click the button to download the file, then open it to start the installation (A MacOS version is coming soon):
            <br><br>
            <a download href="/presenter/Presentation Master 2.msi">${validate_component(Button, "Button").$$render(
            $$result,
            {
              download: true,
              onClick: () => {
              }
            },
            {},
            {
              default: () => {
                return `Download for Windows
                `;
              }
            }
          )}</a>
            <br><br>
            <br><br>
            2. You might get antivirus warnings since I don&#39;t have the money to buy expensive security certificates
            (which are just a proof of security and don&#39;t improve it).
            If you are concerned about getting malware, just keep in mind that my contact info is public
            and I could therefore be made fully responsible for any security risks.<br><br>
            3. Refer to the <span class="font-bold">${validate_component(InlineButton, "InlineButton").$$render(
            $$result,
            {
              openInNew: true,
              onClick: () => window.location.href = "https://youtu.be/zjYiOR03C8M"
            },
            {},
            {
              default: () => {
                return `video tutorial`;
              }
            }
          )}</span> if you don&#39;t know how to dismiss the warning.
            <span class="font-bold">If prompted, allow &quot;Communication in private networks&quot;.</span> This is necessary since the communication between the devices uses WiFi.<br><br>
            4. Whenever you want to present, open this app as well as your PowerPoint presentation, then use the mobile app to connect the devices and control the presentation.<br><br>
            5. If you have any questions or concerns, feel free to contact me at taavi.ruebenhagen@gmail.com.<br><br>`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
