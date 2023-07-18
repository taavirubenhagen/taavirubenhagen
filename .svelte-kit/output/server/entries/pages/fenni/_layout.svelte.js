import { g as getContext, d as now, l as loop, n as noop, c as create_ssr_component, e as escape, f as subscribe, o as onMount, v as validate_component, h as add_attribute, i as each } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */import { g as globalScrollY, c as contrastingTextColorWhite, a as cursorButtonHover } from "../../../chunks/state.js";
import { B as Button, P as P3 } from "../../../chunks/Button.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
const $ = (selector) => {
  if (typeof selector === "string") {
    return document.querySelector(selector);
  }
  return selector;
};
const extend = (...args) => Object.assign({}, ...args);
const cumulativeOffset = (element) => {
  let top = 0;
  let left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);
  return {
    top,
    left
  };
};
const directScroll = (element) => element && element !== document && element !== document.body;
const scrollTop = (element, value) => {
  const inSetter = value !== void 0;
  if (directScroll(element)) {
    return inSetter ? element.scrollTop = value : element.scrollTop;
  }
  return inSetter ? document.documentElement.scrollTop = document.body.scrollTop = value : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
const scrollLeft = (element, value) => {
  const inSetter = value !== void 0;
  if (directScroll(element)) {
    return inSetter ? element.scrollLeft = value : element.scrollLeft;
  }
  return inSetter ? document.documentElement.scrollLeft = document.body.scrollLeft = value : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
const defaultOptions = {
  container: "body",
  duration: 500,
  delay: 0,
  offset: 0,
  easing: cubicInOut,
  onStart: noop,
  onDone: noop,
  onAborting: noop,
  scrollX: false,
  scrollY: true
};
const scrollToInternal = (options) => {
  const { duration, delay, easing, x = 0, y = 0, scrollX, scrollY, onStart, onDone, container, onAborting, element } = options;
  let { offset } = options;
  if (typeof offset === "function") {
    offset = offset();
  }
  const cumulativeOffsetContainer = cumulativeOffset(container);
  const cumulativeOffsetTarget = element ? cumulativeOffset(element) : { top: y, left: x };
  const initialX = scrollLeft(container);
  const initialY = scrollTop(container);
  const targetX = cumulativeOffsetTarget.left - cumulativeOffsetContainer.left + offset;
  const targetY = cumulativeOffsetTarget.top - cumulativeOffsetContainer.top + offset;
  const diffX = targetX - initialX;
  const diffY = targetY - initialY;
  let scrolling = true;
  let started = false;
  const startTime = now() + delay;
  const endTime = startTime + duration;
  function scrollToTopLeft(element2, top, left) {
    if (scrollX)
      scrollLeft(element2, left);
    if (scrollY)
      scrollTop(element2, top);
  }
  function start(delayStart) {
    if (!delayStart) {
      started = true;
      onStart(element, { x, y });
    }
  }
  function tick(progress) {
    scrollToTopLeft(container, initialY + diffY * progress, initialX + diffX * progress);
  }
  function stop() {
    scrolling = false;
  }
  loop((now2) => {
    if (!started && now2 >= startTime) {
      start(false);
    }
    if (started && now2 >= endTime) {
      tick(1);
      stop();
      onDone(element, { x, y });
    }
    if (!scrolling) {
      onAborting(element, { x, y });
      return false;
    }
    if (started) {
      const p = now2 - startTime;
      const t = 0 + 1 * easing(p / duration);
      tick(t);
    }
    return true;
  });
  start(delay);
  tick(0);
  return stop;
};
const proceedOptions = (options) => {
  const opts = extend({}, defaultOptions, options);
  opts.container = $(opts.container);
  opts.element = $(opts.element);
  return opts;
};
const scrollContainerHeight = (containerElement) => {
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  }
  const { body } = document;
  const html = document.documentElement;
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};
const setGlobalOptions = (options) => {
  extend(defaultOptions, options || {});
};
const scrollTo = (options) => scrollToInternal(proceedOptions(options));
const scrollToBottom = (options) => {
  options = proceedOptions(options);
  return scrollToInternal(extend(options, {
    element: null,
    y: scrollContainerHeight(options.container)
  }));
};
const scrollToTop = (options) => {
  options = proceedOptions(options);
  return scrollToInternal(extend(options, {
    element: null,
    y: 0
  }));
};
const animateScroll = { scrollTo, scrollToTop, scrollToBottom, setGlobalOptions };
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { textClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
    $$bindings.textClass(textClass);
  return `<i class="${"relative top-0.5 " + escape(textClass, true) + " iconoir-" + escape(name, true)}"></i>`;
});
const P1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-3xl selection:text-outline-on-primary font-light">${slots.default ? slots.default({}) : ``}</t>`;
});
const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onPrimary = false } = $$props;
  let { simple = false } = $$props;
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  return `<t class="${"transition duration-400 " + escape(simple ? "" : "underline underline-offset-8", true) + " " + escape(onPrimary ? "text-onPrimary" : "text-onBackground", true)}">${slots.default ? slots.default({}) : ``}</t>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".custom-cursor.svelte-1dog6l0{box-shadow:10px 10px 10px black}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollPercentage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let windowHeight;
  let scrollY;
  let cursor;
  let localCursorButtonHover;
  let contrastingTextColorClass;
  globalScrollY.subscribe((value) => {
    contrastingTextColorWhite.set(value >= 0 || $page.route.id != "/fenni/home");
  });
  cursorButtonHover.subscribe((value) => {
    localCursorButtonHover = value;
  });
  contrastingTextColorWhite.subscribe((value) => {
    contrastingTextColorClass = value ? "text-white" : "text-black";
  });
  onMount(() => {
    const unsubscribe = page.subscribe(($page2) => {
      if ($page2) {
        contrastingTextColorWhite.set($page2.route.id != "/fenni/home");
      }
    });
    contrastingTextColorWhite.set(true);
    return unsubscribe;
  });
  $$result.css.add(css);
  scrollPercentage = scrollY / windowHeight * 100;
  $$unsubscribe_page();
  return `


<main class="relative bg-gradient-to-br from-yellow-50 via-yellow-700 to-yellow-900 font-sans overflow-x-hidden cursor-none">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localCursorButtonHover ? "w-8 h-8 opacity-50 invert bg-yellow-600" : "w-4 h-4 invert bg-yellow-600",
        true
      ) + " duration-300 fixed z-50 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"${add_attribute("this", cursor, 0)}></div>`;
    }
  })}
    <div class="group z-45 fixed w-full h-8"><div class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary" style="${"width: " + escape(scrollPercentage, true) + "%; transition-property: height;"}"></div></div>
    <div class="${"transition duration-200 fixed z-30 top-0 pointer-events-none w-full h-screen p-16 flex justify-between items-start " + escape(contrastingTextColorClass, true) + " font-handwriting svelte-1dog6l0"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `
            <a href="/fenni/home" class="pointer-events-auto flex_row_center gap-8 font-logo" style="font-family: 'Yellowtail';"><div class="rounded-full w-8 h-8 bg-yellow-600"></div>
                ${validate_component(P1, "P1").$$render($$result, {}, {}, {
          default: () => {
            return `FENNI`;
          }
        })}</a>`;
      }
    }
  )}
        <div class="group pointer-events-auto backdrop-blur-sm rounded-full bg-opacity-25 bg-white px-1 py-1 flex justify-end items-start gap-8">${each(
    [
      ["Home", "/fenni/home"],
      ["Projekte", "/fenni/projects"],
      ["\xDCber mich", "/fenni/about"]
    ],
    (e) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => {
          }
        },
        {},
        {
          default: () => {
            return `<a${add_attribute("href", e[1], 0)} class="${"transition rounded-full h-8 " + escape($page.route.id == e[1] ? "text-white" : "bg-opacity-0", true) + " hover:bg-opacity-50 bg-yellow-600 px-4 flex_row_center"}">${validate_component(P3, "P3").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(e[0])}`;
              }
            })}</a>
                `;
          }
        }
      )}`;
    }
  )}</div></div>
    ${slots.default ? slots.default({}) : ``}
    
    <section class="w-full h-screen p-16 lg:p-32 lg:pb-16"><div class="pt-16 md:p-0 flex_row_center gap-16 text-5xl">${each(["mail", "instagram", "youtube"], (platform) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => {
          animateScroll.scrollToTop();
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render($$result, { name: platform }, {}, {})}`;
        }
      }
    )}`;
  })}</div>
        <div class="w-full pt-16 flex justify-between items-end"><div class="text-neutral-500">Fenja R\xFCbenhagen<br>Pothof 9d<br>38122 Braunschweig</div>
            <div class="text-right text-lg">Website von<br>
                <a href="/fenni/projects" class="font-bold">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(B, "B").$$render($$result, {}, {}, {
          default: () => {
            return `Taavi R\xFCbenhagen`;
          }
        })}`;
      }
    }
  )}</a></div></div></section>
</main>`;
});
export {
  Layout as default
};
