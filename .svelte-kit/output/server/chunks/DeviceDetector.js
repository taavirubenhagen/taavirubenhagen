import { c as create_ssr_component, o as onMount } from "./index3.js";
import UAParser from "ua-parser-js";
const DeviceDetector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showInDevice = void 0 } = $$props;
  let { showInBrowser = void 0 } = $$props;
  let { showInOs = void 0 } = $$props;
  let showSlot = false;
  onMount(() => {
    const uaParser = new UAParser();
    let detectedBrowser = uaParser.getBrowser();
    let detectedDevice = uaParser.getDevice();
    let detectedOs = uaParser.getOS();
    let show = true;
    if (showInDevice && !equals(getDevice(detectedDevice), showInDevice)) {
      show = false;
    }
    if (showInBrowser && !equals(formatter(detectedBrowser.name), showInBrowser)) {
      show = false;
    }
    if (showInOs && !equals(formatter(detectedOs.name), showInOs)) {
      show = false;
    }
    showSlot = show;
  });
  const getDevice = (device) => {
    if (!device.type) {
      return "desktop";
    }
    return formatter(device.type);
  };
  const formatter = (string) => string.toLowerCase().normalize("NFD").replace(/ /g, "").replace(/[^\w\s]/gi, "").replace(/[\u0300-\u036f]/g, "");
  const equals = (value, option) => {
    if (Array.isArray(option)) {
      return option.some((item) => value === formatter(item));
    }
    return value === formatter(option);
  };
  if ($$props.showInDevice === void 0 && $$bindings.showInDevice && showInDevice !== void 0)
    $$bindings.showInDevice(showInDevice);
  if ($$props.showInBrowser === void 0 && $$bindings.showInBrowser && showInBrowser !== void 0)
    $$bindings.showInBrowser(showInBrowser);
  if ($$props.showInOs === void 0 && $$bindings.showInOs && showInOs !== void 0)
    $$bindings.showInOs(showInOs);
  return `${showSlot ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
export {
  DeviceDetector as D
};
