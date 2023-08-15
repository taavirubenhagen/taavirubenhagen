import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { I as Icon } from "../../../../../chunks/Icon2.js";
/* empty css                            */import { H as H2 } from "../../../../../chunks/H2.js";
import { B } from "../../../../../chunks/B.js";
import { B as Button } from "../../../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="relative min-h-screen p-16 pt-24 text-left">${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Presentation Master 2 for PC`;
    }
  })}
    <div class="h-16"></div>
    <p3>1. Click the here to start the installation (The MacOS version is coming soon):
        <br><br>
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `<a download href="/presenter/Presentation Master 2.msi" class="transition duration-200 hover:scale-[101%] rounded-full h-16 bg-black px-8 flex items-center gap-4 text-white">${validate_component(Icon, "Icon").$$render($$result, { name: "download", textClass: "text-3xl" }, {}, {})}
                Download for Windows
            </a>`;
      }
    }
  )}
        <br><br>
        2. You might get antivirus warnings since I don&#39;t have the money to buy expensive security certificates for the app.
        These certificates are basically just an identity proof though and change nothing about the actual security of the program.
        If you are concerned about getting malware, just keep in mind that my contact info is public
        and I could therefore be made fully responsible if I tried to hack you, so that would be very stupid of me.<br><br>
        3. Refer to the <p3 class="font-bold"><a target="_blank" href="https://youtu.be/zjYiOR03C8M">${validate_component(B, "B").$$render($$result, {}, {}, {
    default: () => {
      return `video tutorial`;
    }
  })} ${validate_component(Icon, "Icon").$$render($$result, { name: "open-new-window" }, {}, {})}</a></p3> if you don&#39;t know how to dismiss the warning.
        <p3 class="font-bold">If prompted, allow &quot;Communication in private networks&quot;.</p3> This is necessary since the communication between the devices uses WiFi.<br><br>
        5. When you want to present, open this app as well as your PowerPoint presentation and use the mobile app to connect and control the presentation.<br><br>
        6. If you have any questions or concerns, feel free to contact me at tavyai.apps@gmail.com.<br><br></p3></main>`;
});
export {
  Page as default
};
