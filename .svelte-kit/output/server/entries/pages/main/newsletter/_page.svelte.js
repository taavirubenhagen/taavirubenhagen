import { c as create_ssr_component, o as onMount, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "../../../../chunks/public.js";
import "ua-parser-js";
import { createClient } from "@supabase/supabase-js";
/* empty css                         */import { I as Icon } from "../../../../chunks/Icon.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { P as P1 } from "../../../../chunks/P1.js";
import { B } from "../../../../chunks/B.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase;
  let d;
  async function signInOrUp() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "taavi.ruebenhagen@gmail.com",
      password: "tZgvsgsYoRYBAHxDItij"
    });
    d = data;
    if (!d?.user) {
      console.log("Signing up");
      let { data: data2, error: error2 } = await supabase.auth.signUp({
        email: "taavi.ruebenhagen@gmail.com",
        password: "tZgvsgsYoRYBAHxDItij"
      });
      d = data2;
      console.log(data2?.user ?? error2);
    }
  }
  onMount(() => {
    supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
    signInOrUp();
  });
  return `<main><div class="min-h-screen p-16 flex flex-col justify-center items-center sm:items-start"><div class="${"w-full h-[75vh] flex flex-col " + escape(!d?.user?.email ? "justify-evenly" : "justify-center", true) + " items-center"}">${!d?.user?.email ? `${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Sign up for my newsletter.`;
    }
  })}
                <div class="rounded-full border-2 border-primary w-full md:w-1/2 h-16 pl-8 flex justify-between items-center text-center text-xl"><input type="text" placeholder="What is your E-Mail address?" class="outline-none w-full pr-2">
                    
                    <button class="group transition duration-100 rounded-r-full border-l-2 border-l-primary h-full px-8 bg-primary md:bg-background hover:bg-primary"><div class="pointer-events-none invert group-hover:invert-0">${validate_component(B, "B").$$render($$result, { onPrimary: true }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { name: "arrow-right" }, {}, {})}`;
    }
  })}</div></button></div>` : `${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Thank you.`;
    }
  })}
                <div class="h-8 md:h-16"></div>
                <button>${validate_component(P1, "P1").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(B, "B").$$render($$result, {}, {}, {
        default: () => {
          return `Unsubscribe`;
        }
      })}`;
    }
  })}</button>`}</div></div></main>`;
});
export {
  Page as default
};
