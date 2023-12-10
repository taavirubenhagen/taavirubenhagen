import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { L as LargeHeading } from "../../../../chunks/LargeHeading.js";
import { P as Page } from "../../../../chunks/InlineButton.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `
    ${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Minimal Counter - Privacy Policy
        <br>
        <br>`;
        }
      })}
    This privacy policy will explain how the Android app Minimal Counter, which is published by Taavi R\xFCbenhagen.<br>
    <br>
    The app may contain links to other apps or websites. This privacy policy applies only to the app mentioned above, so if you click on a link to another website or app, you should read their privacy policy.<br>
    <br>
    I keep the privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 10 December 2023.<br>
    <br>
    If you have any questions, email me at: taavi.ruebenhagen@gmail.com.<br>
    <br>
    <br>
    <br>
    <br>`;
    }
  })}`;
});
export {
  Page_1 as default
};
