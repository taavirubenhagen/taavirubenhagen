import { c as create_ssr_component, v as validate_component, f as add_attribute, e as escape, h as each } from "../../../../chunks/index3.js";
/* empty css                         */import { S as SmallParagraph } from "../../../../chunks/SmallParagraph.js";
import { S as SmallHeading } from "../../../../chunks/SmallHeading.js";
import { I as Icon } from "../../../../chunks/icon.js";
import { R as RawButton } from "../../../../chunks/RawButton.js";
import "ua-parser-js";
import { S as Section } from "../../../../chunks/Section.js";
const ShowcaseCarouselItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { website = false } = $$props;
  let { title = "" } = $$props;
  let { src = "" } = $$props;
  let { target = "" } = $$props;
  if (title === "") {
    title = "Showcase Item";
  }
  if (target === "") {
    target = src;
  }
  let windowHeight;
  if ($$props.website === void 0 && $$bindings.website && website !== void 0)
    $$bindings.website(website);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `


${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => {
        window.location.href = "https://" + target;
      }
    },
    {},
    {
      default: () => {
        return `<div class="relative shadow rounded-2xl h-32 aspect-video normal-case">${website ? `<iframe${add_attribute("title", title, 0)} src="${"https://" + escape(src, true)}" height="${escape(windowHeight, true) + "px"}"${add_attribute("frameborder", 0, 0)} class="origin-top-left absolute top-0 pointer-events-none rounded-full aspect-video brightness-75" style="${"transform: scale(" + escape(128 / windowHeight, true) + "); border-radius: " + escape(1 * windowHeight / 128, true) + "rem;"}"></iframe>` : `${src !== "" ? `<img${add_attribute("src", src, 0)}${add_attribute("alt", title, 0)}>` : `<div class="h-full p-4 center_col text-center">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(title)}`;
          }
        })}</div>`}`}
        ${target !== "" ? `<div class="absolute bottom-4 w-full center_row">${target[0] === "/" ? `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            inverted: src !== "",
            size: 20,
            name: "arrow-right"
          },
          {},
          {}
        )}` : `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            inverted: src !== "",
            size: 20,
            name: "open-in-new"
          },
          {},
          {}
        )}`}</div>` : ``}
        </div>`;
      }
    }
  )}`;
});
const ShowcaseCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(title)}`;
    }
  })}
<div class="h-4"></div>
<div class="-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8">${slots.default ? slots.default({}) : ``}</div>
<div class="h-16"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "relative p-16 pb-24 primary center_col gap-8 text-center"
    },
    {},
    {
      default: () => {
        return `${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
          default: () => {
            return `Independent designer, developer, artist, activist and entrepreneur.
    `;
          }
        })}
    <div class="absolute bottom-8">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Scroll.`;
          }
        })}</div>`;
      }
    }
  )}
${validate_component(Section, "Section").$$render($$result, { className: "p-8 pt-16" }, {}, {
    default: () => {
      return `${validate_component(ShowcaseCarousel, "ShowcaseCarousel").$$render($$result, { title: "apps" }, {}, {
        default: () => {
          return `${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              target: "play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",
              title: "Presentation Master 2"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              target: "play.google.com/store/apps/details?id=fluent.simple.counter",
              title: "Simple Counter"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { src: "", title: "Outfyx" }, {}, {})}`;
        }
      })}
    ${validate_component(ShowcaseCarousel, "ShowcaseCarousel").$$render($$result, { title: "websites" }, {}, {
        default: () => {
          return `${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              website: true,
              src: "rubenhagen.com/drafts/hoffmanns-schuppen",
              title: "hoffmanns-schuppen.com"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              website: true,
              src: "fenni.me",
              title: "fenni.me"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              website: true,
              src: "rubenhagen.com",
              title: "rubenhagen.com"
            },
            {},
            {}
          )}`;
        }
      })}
    ${validate_component(ShowcaseCarousel, "ShowcaseCarousel").$$render($$result, { title: "graphic design" }, {}, {
        default: () => {
          return `${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              target: "play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",
              title: "Presentation Master 2"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { title: "Hoffmann's Schuppen" }, {}, {})}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { title: "JuPa Campaign" }, {}, {})}`;
        }
      })}
    ${validate_component(ShowcaseCarousel, "ShowcaseCarousel").$$render($$result, { title: "design system" }, {}, {
        default: () => {
          return `${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              target: "/drafts/website/tavy",
              title: "Tavy Design System"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render(
            $$result,
            {
              target: "rubenhagen.com/drafts/website/tavy/icons",
              title: "Tavy Icons"
            },
            {},
            {}
          )}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { src: "", title: "PM2 Design System" }, {}, {})}`;
        }
      })}
    ${validate_component(ShowcaseCarousel, "ShowcaseCarousel").$$render($$result, { title: "other businesses" }, {}, {
        default: () => {
          return `${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { src: "", title: "Hoffmann's Schuppen" }, {}, {})}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { src: "", title: "Affiliate Marketing" }, {}, {})}
        ${validate_component(ShowcaseCarouselItem, "ShowcaseCarouselItem").$$render($$result, { src: "", title: "Content Creation" }, {}, {})}`;
        }
      })}
    <div class="rounded-2xl w-full h-16 primary flex justify-evenly items-center">${each(["instagram", "tiktok", "youtube", "github"], (e) => {
        return `${validate_component(Icon, "Icon").$$render($$result, { inverted: true, name: e, size: 28 }, {}, {})}`;
      })}</div>
    <div class="h-16"></div>`;
    }
  })}`;
});
export {
  Page as default
};
