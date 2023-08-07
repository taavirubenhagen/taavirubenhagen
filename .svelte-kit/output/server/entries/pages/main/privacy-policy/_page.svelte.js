import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { H as H2 } from "../../../../chunks/H2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="max-w-screen min-h-screen p-8 pt-16">
    ${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Privacy Policy`;
    }
  })}<br>
    <br>
    <br>
    This website does not collect any personal information about its users, unless they explicitly command it.<br>
    <br>
    The website contain links to other websites. Our privacy policy applies only to the website under taavirubenhagen.netlify.app, so if you click on a link to another website or app, you should read their privacy policy.<br>
    <br>
    We keeps the privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 7 August 2023.<br>
    <br>
    If you have any questions about this privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.<br>
    <br>
    Email us at: tavyai.apps@gmail.com.<br>
    <br>
    <br></main>`;
});
export {
  Page as default
};