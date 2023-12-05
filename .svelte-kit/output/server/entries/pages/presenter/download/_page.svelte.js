import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { S as SmallParagraph, I as InlineButton } from "../../../../chunks/InlineButton.js";
/* empty css                         */import { L as LargeHeading } from "../../../../chunks/LargeHeading.js";
import { I as Icon } from "../../../../chunks/icon.js";
import { B as Button } from "../../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="relative min-h-screen pointer-events-auto p-16 pt-24 text-left">${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Presentation Master 2 for PC`;
    }
  })}
    <div class="h-16"></div>
    ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `1. Click the button to download the file, then open it to start the installation (A MacOS version is coming soon):
        <br><br>
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: (() => window.location.href = "/presenter/Presentation Master 2.msi") + "}"
        },
        {},
        {
          default: () => {
            return `
                ${validate_component(Icon, "Icon").$$render($$result, { name: "download", textClass: "text-3xl" }, {}, {})}
                Download for Windows
            `;
          }
        }
      )}
        <br><br>
        2. You might get antivirus warnings since I don&#39;t have the money to buy expensive security certificates for the app.
        If you are concerned about getting malware, just keep in mind that my contact info is public and shared with the app stores
        and I could therefore be made fully responsible if I tried to hack you.<br><br>
        3. Refer to the <span class="font-bold">${validate_component(InlineButton, "InlineButton").$$render(
        $$result,
        {
          onClick: () => window.location.href = "https://youtu.be/zjYiOR03C8M"
        },
        {},
        {
          default: () => {
            return `video tutorial${validate_component(Icon, "Icon").$$render($$result, { name: "open-new-window" }, {}, {})}`;
          }
        }
      )}</span> if you don&#39;t know how to dismiss the warning.
        <span class="font-bold">If prompted, allow &quot;Communication in private networks&quot;.</span> This is necessary since the communication between the devices uses WiFi.<br><br>
        4. Whenever you want to present, open this app as well as your PowerPoint presentation and use the mobile app to connect and control the presentation.<br><br>
        5. If you have any questions or concerns, feel free to contact me at taavi.ruebenhagen@gmail.com.<br><br>`;
    }
  })}</main>`;
});
export {
  Page as default
};
