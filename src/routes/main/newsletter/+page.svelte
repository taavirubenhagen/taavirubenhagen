<!--<script lang="ts">
    import { onMount } from 'svelte';
    import { VITE_PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
    import DeviceDetector from "svelte-device-detector";

    import { createClient, type AuthResponse, type Session, type User, SupabaseClient } from '@supabase/supabase-js';
    import "$style";
    import {
        Icon,
        H1, H2,
        O1,
        P1,
        B,
    } from '../lib';

    let supabase: SupabaseClient<any, "public", any>;
    let d: { user: User | null; session: Session | null; };
    async function signInOrUp() {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: 'taavi.ruebenhagen@gmail.com',
            password: 'tZgvsgsYoRYBAHxDItij'
        });
        d = data;
        if (!d?.user) {
            console.log("Signing up")
            let { data, error } = await supabase.auth.signUp({
                email: 'taavi.ruebenhagen@gmail.com',
                password: 'tZgvsgsYoRYBAHxDItij'
            });
            d = data;
            console.log(data?.user ?? error)
        }
    }
    onMount(() => {
        supabase = createClient(VITE_PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
        signInOrUp();
    });
</script>


<main>
    <div class="min-h-screen p-16 flex flex-col justify-center items-center sm:items-start">
        <div class="w-full h-[75vh] flex flex-col {!d?.user?.email ? "justify-evenly" : "justify-center"} items-center">
            {#if !d?.user?.email}
                <H2>Sign up for my newsletter.</H2>
                <div
                    class=
                        "rounded-full border-2 border-primary w-full md:w-1/2 h-16 pl-8
                        flex justify-between items-center text-center text-xl"
                >
                    <input
                        type="text" placeholder="What is your E-Mail address?"
                        class="outline-none w-full pr-2"
                    />
                    <!-TODO: Add user to db in auth as well as in the custom table, and show success message if successful->
                    <button
                        on:click={() => signInOrUp()}
                        class=
                            "group transition duration-100
                            rounded-r-full border-l-2 border-l-primary
                            h-full px-8 bg-primary md:bg-background hover:bg-primary"
                    ><div class="pointer-events-none invert group-hover:invert-0">
                        <B onPrimary><Icon name="arrow-right"/></B>
                    </div></button>
                </div>
            {:else}
                <H2>Thank you.</H2>
                <div class="h-8 md:h-16"></div>
                <button>
                    <P1><B>Unsubscribe</B></P1>
                </button>
            {/if}
        </div>
    </div>
</main>-->