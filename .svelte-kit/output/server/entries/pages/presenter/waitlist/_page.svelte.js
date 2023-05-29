import { c as create_ssr_component, o as onMount, v as validate_component } from "../../../../chunks/index2.js";
import { createClient } from "@supabase/supabase-js";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "../../../../chunks/public.js";
/* empty css                         */import { M as Main_headline } from "../../../../chunks/main_headline.js";
import { T as Text_button } from "../../../../chunks/text_button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase;
  async function signInOrUp() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "taavi.ruebenhagen@gmail.com",
      password: "tZgvsgsYoRYBAHxDItij"
    });
    if (!data?.user) {
      await supabase.auth.signUp({
        email: "taavi.ruebenhagen@gmail.com",
        password: "tZgvsgsYoRYBAHxDItij"
      });
    }
  }
  onMount(() => {
    supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
    signInOrUp();
  });
  return `<main class="${"max-w-screen min-h-screen p-8 flex flex-col justify-center items-start md:items-center font-sans"}">${validate_component(Main_headline, "MainHeadline").$$render($$result, {}, {}, {
    default: () => {
      return `Join Waitlist`;
    }
  })}
    <div class="${"h-16"}"></div>
    <input type="${"text"}" placeholder="${"Enter E-Mail"}" class="${"outline-none rounded-full border-2 border-primary w-full md:w-1/2 h-16 text-center text-xl"}">
    <div class="${"h-16"}"></div>
    
    ${validate_component(Text_button, "TextButton").$$render($$result, { large: true, primary: true }, {}, {
    default: () => {
      return `Sign up`;
    }
  })}
    </main>`;
});
export {
  Page as default
};
