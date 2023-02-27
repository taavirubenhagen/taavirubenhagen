import { c as create_ssr_component } from "./index2.js";
import "ua-parser-js";
const DeviceDetector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showInDevice = void 0 } = $$props;
  let { showInBrowser = void 0 } = $$props;
  let { showInOs = void 0 } = $$props;
  if ($$props.showInDevice === void 0 && $$bindings.showInDevice && showInDevice !== void 0)
    $$bindings.showInDevice(showInDevice);
  if ($$props.showInBrowser === void 0 && $$bindings.showInBrowser && showInBrowser !== void 0)
    $$bindings.showInBrowser(showInBrowser);
  if ($$props.showInOs === void 0 && $$bindings.showInOs && showInOs !== void 0)
    $$bindings.showInOs(showInOs);
  return `${``}`;
});
export {
  DeviceDetector as D
};
