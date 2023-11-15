<script lang="ts">
    import { fade, blur } from 'svelte/transition';

    import { globalScrollY } from "$state";
    import "$style";
    import {
        Icon,
        H1, H2,
        O1, O2,
        P1, P3,
        B,
        ScrollReactiveElement,
    } from '../lib';
  import Button from '../lib/components/Button.svelte';
</script>


<!--<main class="relative bg-primary text-onPrimary">
    <img src="/images/programming.jpg" alt="absolute" class="w-full h-screen brightness-50">
    <div class="absolute top-0 w-full h-screen p-8 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {#each [0, 1, 2, 3] as e}
            <div class="backdrop-blur-sm shadow-2xl rounded-2xl w-full h-full bg-opacity-10 bg-background p-4 center_col text-center">
                <h2>Presentation Master 2</h2>
            </div>
        {/each}
    </div>
</main>-->
<main class="relative w-full h-screen px-4 py-2 primary selection:background center_col font-mono">
    {#each ["Presentation Master 2", "Personal Website", "FENNI's website"] as title}
        <Button onClick={() => {}}>
            <h3 class="py-2 font-thin">{title} ></h3>
        </Button>
    {/each}
</main>