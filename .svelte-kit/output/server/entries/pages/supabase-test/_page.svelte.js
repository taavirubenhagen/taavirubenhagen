import { c as create_ssr_component, o as onMount, e as escape } from "../../../chunks/index2.js";
import { createClient } from "@supabase/supabase-js";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase;
  let d;
  async function signInOrUp() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "taavi.ruebenhagen@gmail.com",
      password: "tZgvsgsYoRYBAHxDItij"
    });
    d = data;
    if (!data?.user) {
      let { data: data2, error: error2 } = await supabase.auth.signUp({
        email: "taavi.ruebenhagen@gmail.com",
        password: "tZgvsgsYoRYBAHxDItij"
      });
      d = data2;
    }
  }
  onMount(() => {
    supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
    signInOrUp();
  });
  return `<main>${escape(d?.user?.email)}</main>`;
});
export {
  Page as default
};
