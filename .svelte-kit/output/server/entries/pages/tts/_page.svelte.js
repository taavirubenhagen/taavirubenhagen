import { c as create_ssr_component, e as escape, v as validate_component, o as onMount, h as each, f as add_attribute } from "../../../chunks/index3.js";
/* empty css                      */import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
const tts = "";
const Text_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonClass = "" } = $$props;
  let { onPrimary = false } = $$props;
  let { primary = false } = $$props;
  let { large = false } = $$props;
  let { onClicked = () => {
  } } = $$props;
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.onClicked === void 0 && $$bindings.onClicked && onClicked !== void 0)
    $$bindings.onClicked(onClicked);
  return `<button class="${escape(buttonClass, true) + " transition-all duration-200 relative hover:scale-[101%] rounded-full " + escape(
    primary ? "" : 'border-2 ${( onPrimary ? "border-onPrimary" : "border-onBackground" )}',
    true
  ) + " " + escape(large ? "h-16" : "h-12", true) + " " + escape(
    primary ? onPrimary ? "bg-onPrimary text-onBackground" : "bg-primary text-onPrimary" : onPrimary ? "text-onPrimary" : "text-onBackground",
    true
  ) + " " + escape(large ? "px-16" : "px-8", true)}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let voiceIndex = 3;
  let speedInUI = 100;
  let text = "";
  let msg;
  let recorder;
  let recorderResult;
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
  onMount(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      recorder.ondataavailable = (e) => {
        recorderResult = URL.createObjectURL(e.data);
      };
    }).catch((err) => console.error(`Error setting up the media recorder: ${err}`));
  });
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}




<main class="h-screen p-16 flex flex-col justify-between font-mono"><div class="flex sm:flex-col justify-between"><div><t3>Convert text to speech.</t3>
            <div class="h-16"></div></div>
        <div class="flex justify-between"><div class="flex flex-wrap items-start justify-start gap-1"><t1 class="mr-4 h-12 center_row">Voice</t1>
                ${each(Array(10), (_, i) => {
    return `<button class="${"transition-all rounded-lg border hover:border-2 border-primary w-12 h-12 " + escape(voiceIndex == i ? "primary" : "", true)}">${escape(i + 1)}
                    </button>`;
  })}</div>
            <div class="flex"><button>X</button>
                <div class="w-8"></div>
                <input type="range"${add_attribute("min", 30, 0)}${add_attribute("max", 300, 0)} class="accent-primary"${add_attribute("value", speedInUI, 0)}></div></div></div>
    <textarea class="my-16 rounded-lg border border-primary w-full h-full p-4" placeholder="Enter your text here. You can convert as much text as you like - for free.">${""}</textarea>
    <div class="grid grid-cols-2 gap-8">${validate_component(Text_button, "TextButton").$$render($$result, { onClicked: () => speak(1) }, {}, {
    default: () => {
      return `Listen only
        `;
    }
  })}
        <div class="flex">${validate_component(Text_button, "TextButton").$$render(
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
            ${recorderResult ? `<button><a download="Recorded Audio"${add_attribute("href", recorderResult, 0)} class="transition-all ml-8 hover:invert rounded-full border-2 border-primary w-14 h-14 background center_row">\u2713
                    </a></button>` : ``}</div></div></main>
<footer class="h-16 primary center_row font-mono"><a href="/legal/contact"><t1>Contact</t1></a></footer>`;
});
export {
  Page as default
};
