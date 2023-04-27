import { c as create_ssr_component, h as each, d as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
/* empty css                      */import { T as Text_button } from "../../../chunks/text_button.js";
const tts = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let voiceIndex = 3;
  let speedInUI = 100;
  let text = "";
  let msg;
  let recorder;
  let speak = async (volume = 1) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support text-to-speech yet");
      return;
    }
    if (!msg) {
      msg = new SpeechSynthesisUtterance(text);
      msg.onend = (_) => recorder.state == "recording" ? recorder.stop() : _;
    }
    msg.text = text;
    msg.volume = Math.round(volume);
    msg.voice = window.speechSynthesis.getVoices()[voiceIndex];
    msg.rate = Math.fround((speedInUI / 100) ** 2 + 0.05);
    window.speechSynthesis.speak(msg);
  };
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}




<main class="${"h-screen p-16 flex flex-col justify-between font-mono"}"><div class="${"flex sm:flex-col justify-between"}"><div><h3>Convert text to speech.</h3>
            <div class="${"h-16"}"></div></div>
        <div class="${"flex justify-between"}"><div class="${"flex flex-wrap items-start justify-start gap-1"}"><p1 class="${"mr-4 h-12 flex_row_center"}">Voice</p1>
                ${each(Array(10), (_, i) => {
    return `<button class="${"transition-all rounded-lg border hover:border-2 border-primary w-12 h-12 " + escape(voiceIndex == i ? "primary" : "", true)}">${escape(i + 1)}
                    </button>`;
  })}</div>
            <div class="${"flex"}"><button>X</button>
                <div class="${"w-8"}"></div>
                <input type="${"range"}"${add_attribute("min", 30, 0)}${add_attribute("max", 300, 0)} class="${"accent-primary"}"${add_attribute("value", speedInUI, 0)}></div></div></div>
    <textarea class="${"my-16 rounded-lg border border-primary w-full h-full p-4"}" placeholder="${"Enter your text here. You can convert as much text as you like - for free."}">${""}</textarea>
    <div class="${"grid grid-cols-2 gap-8"}">${validate_component(Text_button, "TextButton").$$render($$result, { onClicked: () => speak(1) }, {}, {
    default: () => {
      return `Listen only
        `;
    }
  })}
        <div class="${"flex"}">${validate_component(Text_button, "TextButton").$$render(
    $$result,
    {
      buttonClass: "w-full",
      onClicked: () => {
        if (recorder.state != "recording") {
          recorder.start();
        }
        speak(1);
      }
    },
    {},
    {
      default: () => {
        return `Listen &amp; Download
            `;
      }
    }
  )}
            ${``}</div></div></main>
<footer class="${"h-16 primary flex_row_center font-mono"}"><a href="${"/contact"}"><p1>Contact</p1></a></footer>`;
});
export {
  Page as default
};
