<script lang="ts">
    import { page } from "$app/stores";
    import SvelteMarkdown from 'svelte-markdown';
    import { ScaleOut } from 'svelte-loading-spinners';

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
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<img src="/fenni/images/centered_explosion.png" alt="Color Explosion" class="fixed -z-5 opacity-0 w-full">
<main>
    <!--<div class="mt-44 flex_col_center">
        <div class="flex gap-4">
            {#each imageUrls as url, i}
                <div class="w-64 h-64">
                    <img src={url} alt="Image {i}" class="object-cover rounded-lg h-full"/>
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full p-8 md:p-16 pt-32 md:pb-16 flex flex-wrap text-black font-logo">
        {#each postTitle.split("") as letter}
            <h1>{letter}</h1>
        {/each}
    </div>-->
    {#await (async () => {
        let projectData;
        try {
            projectData = JSON.parse(await ( await fetch(projectPath + "data.json") ).text());
        } catch (e) {
            return [e, e, e];
        }
        const postTitle = projectData["title"];
        const imageUrls = projectData["onlineImageUrls"];
        let blogMarkdown;
        try {
            blogMarkdown = await ( await fetch(projectPath + "blog.md") ).text();
        } catch (e) {
            return [e, e, e];
        }
        return [postTitle, imageUrls, blogMarkdown];
    })()}
        <div class="w-full h-screen flex_col_center">
            <ScaleOut duration="800ms" unit="px" size="64" color="rgb(202 138 4)"/>
        </div>
    {:then projectData}
        <div class="relative z-20 selection:bg-opacity-20 selection:bg-yellow-600 p-8 md:p-16 pt-28 md:pt-44 text-black font-handwriting">
            <SvelteMarkdown source={projectData[2]}/>
        </div>
    {/await}
</main>