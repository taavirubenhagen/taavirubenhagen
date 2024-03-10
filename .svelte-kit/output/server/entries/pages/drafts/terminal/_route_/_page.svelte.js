import { c as create_ssr_component, h as each, v as validate_component, e as escape, d as subscribe, f as add_attribute } from "../../../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../../../chunks/DeviceDetector.js";
import { b as buttonHover } from "../../../../../chunks/state.js";
import "../../../../../chunks/index4.js";
import { R as RawButton } from "../../../../../chunks/RawButton.js";
import "ua-parser-js";
function viewedRoute(r) {
  return r[0].toUpperCase() + r.slice(1);
}
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { routes } = $$props;
  let { routeChangingFunction } = $$props;
  if ($$props.routes === void 0 && $$bindings.routes && routes !== void 0)
    $$bindings.routes(routes);
  if ($$props.routeChangingFunction === void 0 && $$bindings.routeChangingFunction && routeChangingFunction !== void 0)
    $$bindings.routeChangingFunction(routeChangingFunction);
  return `<br>
${each(routes, (r) => {
    return `<br>
    ${validate_component(RawButton, "RawButton").$$render($$result, { onClick: () => routeChangingFunction(r) }, {}, {
      default: () => {
        return `${escape(viewedRoute(r[0]))}
    `;
      }
    })}
    [${escape(r[1].toUpperCase())}]`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  buttonHover.subscribe((value) => {
  });
  let keyInput;
  let route = "home";
  const contactRoutes = [["email", "c", "mailto:taavi.ruebenhagen@gmail.com"]];
  const homeRoutes = [
    ["about", "a", "route"],
    ["contact", "c", "route"],
    ["home", "h", "route"],
    ["projects", "p", "route"],
    ["search", "s", "route"]
  ];
  const projectRoutes = [
    ["website", "h", "route"],
    ["fenni", "1", "https://fenni.me"],
    [
      "presenter",
      "2",
      "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"
    ]
  ];
  const validRoutes = [...homeRoutes, ...projectRoutes];
  function routeChangingFunction(newRouteData) {
    if (newRouteData[2] !== "route") {
      window.location.href = newRouteData[2];
    }
    route = newRouteData[0];
  }
  if (validRoutes.map((e) => e[0]).includes($page.params.route)) {
    route = $page.params.route;
  }
  $$unsubscribe_page();
  return `


<main class="overflow-hidden cursor-none">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<input type="text" autofocus class="absolute -z-40"${add_attribute("this", keyInput, 0)}>`;
    }
  })}
    <div class="h-screen p-4 bg-black selection:bg-neutral-300 text-base text-white selection:text-black font-mono"><div class="text-neutral-500 font-bold">${validate_component(RawButton, "RawButton").$$render($$result, { onClick: () => route = "home" }, {}, {
    default: () => {
      return `Taavi R\xFCbenhagen
            `;
    }
  })}
            &gt; ${escape(route[0].toUpperCase() + route.slice(1))}</div>
        <br>
        Hi, I&#39;m Taavi R\xFCbenhagen. This website is still under development.
        <br>
        Press the keys in brackets on your keyboard for quick navigation.
        ${route === "about" ? `<br><br>
            I&#39;m an 18-year-old self-taught entrepreneur, frontend developer and UI/UX designer. My
            ${validate_component(RawButton, "RawButton").$$render($$result, { onClick: () => route = "projects" }, {}, {
    default: () => {
      return `projects
            `;
    }
  })}
            [P] include multiple Android and iOS apps and websites.
            I&#39;m also reselling apps and currently starting an affiliate marketing business.` : `${route === "contact" ? `<br><br>
            Imprint:
            <br><br>
            Taavi R\xFCbenhagen
            <br>
            Pothof 9d, 38122 Braunschweig, Germany
            ${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      routes: contactRoutes,
      routeChangingFunction
    },
    {},
    {}
  )}` : `${route === "home" || route === "website" ? `${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      routes: homeRoutes,
      routeChangingFunction
    },
    {},
    {}
  )}` : `${route === "projects" ? `<br>
            ${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      routes: projectRoutes,
      routeChangingFunction
    },
    {},
    {}
  )}` : `<br><br>
            The page was either not found or you will be automatically redirected soon.
            <br>
            ${validate_component(RawButton, "RawButton").$$render($$result, { onClick: () => route = "home" }, {}, {
    default: () => {
      return `Return home
            `;
    }
  })}
            [X]`}`}`}`}</div></main>`;
});
export {
  Page as default
};
