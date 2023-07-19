<script lang="ts">
    import fs from 'fs';
    import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown';
    import { page } from "$app/stores";

    import "$style";
    import {
        Icon,
        P1, P2, P3,
        B,
        Button,
    } from '../../lib';

    let windowWidth: number;
    let windowHeight: number;
    
    const projectPath = `https://raw.githubusercontent.com/taavirubenhagen/taavirubenhagen/main/static/fenni/projects/${$page.params.name}/`;
    let postTitle = "";
    let imageUrls: string[] = [];
    let blogMarkdown = "Inhalt wird geladen. Bitte gedulde dich einen Moment.";

    onMount(async () => {
        const projectData = JSON.parse(await ( await fetch(projectPath + "data.json") ).text());
        postTitle = projectData["title"];
        imageUrls = projectData["onlineImageUrls"];
        blogMarkdown = await ( await fetch(projectPath + "blog.md") ).text();
        console.log(blogMarkdown);
    });
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<img src="/fenni/images/centered_explosion.png" alt="Color Explosion" class="fixed -z-5 opacity-0 w-full">
<main class="relative z-0 w-full bg-gradient-to-br from-transparent to-transparent">
    <div class="mt-44 flex_col_center">
        <!--<div class="flex gap-4">
            {#each imageUrls as url, i}
                <div class="w-64 h-64">
                    <img src={url} alt="Image {i}" class="object-cover rounded-lg h-full"/>
                </div>
            {/each}
        </div>-->
    </div>
    <div class="w-full p-8 md:p-16 pt-32 md:pb-16 flex flex-wrap text-black font-logo">
        {#each postTitle.split("") as letter}
            <h1>{letter}</h1>
        {/each}
    </div>
    <div class="p-8 md:px-16 text-black font-handwriting">
        <SvelteMarkdown source={blogMarkdown}/>
    </div>
</main>