<script lang="ts">
    import { onMount } from 'svelte';

    import { createClient, type AuthResponse, type Session, type User, SupabaseClient } from '@supabase/supabase-js';

    import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

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
        supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
        signInOrUp();
    });
</script>
  



<main>
    {d?.user?.email}
</main>