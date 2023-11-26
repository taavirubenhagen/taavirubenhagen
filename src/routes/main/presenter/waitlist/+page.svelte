<!--<script lang="ts">
    import { onMount } from 'svelte';

    import { createClient, type AuthResponse, type Session, type User, SupabaseClient } from '@supabase/supabase-js';

    import { VITE_PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
    import '$style'
    import {
        LargeHeading,
    } from '$tavy';
    import TextButton from '$src/lib/util/buttons/text_button.svelte';


    let supabase: SupabaseClient<any, "public", any>;
    let d: { user: User | null; session: Session | null; };

    async function signInOrUp() {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: 'taavi.ruebenhagen@gmail.com',
            password: 'tZgvsgsYoRYBAHxDItij'
        });
        d = data;
        if (!data?.user) {
            let { data, error } = await supabase.auth.signUp({
                email: 'taavi.ruebenhagen@gmail.com',
                password: 'tZgvsgsYoRYBAHxDItij'
            });
            d = data;
        }
    }
    onMount(() => {
        supabase = createClient(VITE_PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
        signInOrUp();
    });
</script>




<main class="max-w-screen min-h-screen p-8 flex flex-col justify-center items-start md:items-center font-sans">
    <LargeHeading>Join Waitlist</LargeHeading>
    <div class="h-16"></div>
    <input
        type="text" placeholder="Enter E-Mail"
        class="outline-none rounded-full border-2 border-primary w-full md:w-1/2 h-16 text-center text-xl"
    />
    <div class="h-16"></div>
    <!-TODO: Add user to db in auth as well as in the custom table, and show success message if successful->
    <TextButton large primary>Sign up</TextButton>
    <!-{d?.user?.email}->
</main>-->