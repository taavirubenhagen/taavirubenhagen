import { c as create_ssr_component, f as subscribe } from "./index.js";
import { w as writable } from "./index2.js";
const cursorState = writable(null);
const Interactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cursorState;
  $$unsubscribe_cursorState = subscribe(cursorState, (value) => value);
  let { state = "hover" } = $$props;
  let hovering = false;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  $$unsubscribe_cursorState();
  return `<span>${slots.default ? slots.default({ hovering }) : ``}</span>`;
});
export {
  Interactive as I
};
