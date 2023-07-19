<script lang="ts">
    import fs from 'fs';
    import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown';
    //import { page } from "$app/stores";

    import "$style";
    import {
        Icon,
        P1, P2, P3,
        B,
        Button,
    } from '../../lib';

    let windowWidth: number;
    let windowHeight: number;
    
    //const projectName = $page.params.name;
    //let postTitle = 'JSON.parse(fs.readFileSync(`${import.meta.env.BASE_URL}/fenni/projects/${projectName}/data.json`, "utf-8"))["title"]';
    //let imageUrls = 'JSON.parse(fs.readFileSync(`${import.meta.env.PUBLIC_URL}/fenni/projects/${projectName}/data.json`, "utf-8"))["onlineImageUrls"]';
    let source: string;

    onMount(async () => {
        console.log("Started");
        const response = await fetch(`fenni/projects/offenes-kunstprojekt/blog.md`);
        console.log(response);
        source = await response.text();
    });
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<img src="/fenni/images/centered_explosion.png" alt="Color Explosion" class="fixed -z-5 opacity-0 w-full">
<main class="relative z-0 w-full bg-gradient-to-br from-transparent to-transparent">
    <div class="mt-44 flex_col_center">
        <div class="flex gap-4">
            {#each ["imageUrls"] as url, i}
                <div class="w-64 h-64">
                    <img src={url} alt="Image {i}" class="object-cover rounded-lg h-full"/>
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full p-8 md:p-16 pt-32 md:pb-16 flex flex-wrap text-black font-logo">
        {#each "postTitle".split("") as letter}
            <h1>{letter}</h1>
        {/each}
    </div>
    <div class="p-8 md:px-16 text-black font-handwriting">
        <SvelteMarkdown {source}/>
    </div>
</main>