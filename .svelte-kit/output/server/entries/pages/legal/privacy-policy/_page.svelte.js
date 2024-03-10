import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/index4.js";
import { L as LargeHeading } from "../../../../chunks/LargeHeading.js";
import { S as Section } from "../../../../chunks/Section.js";
import "ua-parser-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { className: "max-w-screen p-8 pt-16" }, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Privacy Policy`;
        }
      })}
    <br><br><br>
    This website does not collect any personal information about its users, unless they explicitly command it.<br>
    <br>
    The website contains links to other websites. Our privacy policy applies only to the website under rubenhagen.com, taavirubenhagen.com and taavirubenhagen.netlify.app, so if you click on a link to another website or app, you should read their privacy policy.<br>
    <br>
    We keep the privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 25 November 2023.<br>
    <br>
    If you have any questions about this privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.<br>
    <br>
    Email us at: taavi.ruebenhagen@gmail.com.<br>
    <br>
    <br>`;
    }
  })}`;
});
export {
  Page as default
};
