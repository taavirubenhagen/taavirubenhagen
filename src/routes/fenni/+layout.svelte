<script lang="ts">
    import { page } from "$app/stores";
    import DeviceDetector from "svelte-device-detector";
    import { animateScroll } from 'svelte-scrollto-element';

    import "$style";
    import { cursorButtonHover } from "./state";
    import {
        P1, P3,
        B,
        Icon,
        Button,
    } from './lib';


    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;
    $: scrollPercentage = scrollY / windowHeight * 100;
    let cursor: HTMLElement;
    let localCursorButtonHover: boolean;

    $: pageDependentHeaderClass = $page.route.id?.includes("/fenni/projects/") ? "absolute text-black" : "fixed text-white";


    cursorButtonHover.subscribe((value: boolean) => {
        localCursorButtonHover = value;
    });
</script>


<svelte:window
    bind:innerWidth={windowWidth}
    bind:innerHeight={windowHeight}
    bind:scrollY={scrollY} 
    on:mousemove={(event) => {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    }}
    on:scroll={(event) => {
        /*if (!currentlyAnimatingScroll) {
            if (event.currentTarget.scrollY < scrollY - windowHeight / 8) {
                animateScroll.scrollTo({offset: Math.round(scrollY / windowHeight) * windowHeight + windowHeight, duration: 0});
                //currentlyAnimatingScroll = true;
                //setTimeout(() => currentlyAnimatingScroll = false, 1000);
            }
        }
        globalScrollY.set(scrollY);*/
    }}
/>


<main
    class="relative overflow-x-hidden font-sans text-white cursor-none"
>
    <!-- TODO: Add standard scrollbar effects -->
    <DeviceDetector showInDevice="desktop">
        <div
            bind:this={cursor}
            class="{localCursorButtonHover ? "w-8 h-8 opacity-50 invert bg-yellow-600" : "w-4 h-4 invert bg-yellow-600"} duration-300 fixed z-50 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
            style=
                "transition-property: transform, opacity, width, height;
                {localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);"}"
        ></div>
    </DeviceDetector>
    <div class="group z-45 fixed w-full h-8">
        <div
            class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary"
            style="width: {scrollPercentage}%; transition-property: height;"
        >
        </div>
    </div>
    <div
        class=
            "transition duration-200
            {pageDependentHeaderClass} z-30 top-0 pointer-events-none
            w-full h-screen p-8 md:p-16
            flex justify-between items-start font-handwriting"
    >
        <Button onClick={() => {}}>
            <!-- TODO: Choose font -->
            <a href="/fenni/home" class="pointer-events-auto mt-1 flex_row_center gap-8 font-logo" style="font-family: 'Yellowtail';">
                <div class="rounded-full w-8 h-8">
                    <img src="/centered_explosion.png" alt="Portrait von mir" class="object-cover">
                </div>
                <P1>FENNI</P1>
            </a>
        </Button>
        <div class="group pointer-events-auto rounded-full flex justify-end items-start gap-8 md:gap-16">
            <!-- TODO: Replace with icons? -->
            {#each [
                ["Home", "home", "/fenni/home"],
                ["Projekte", "director-chair", "/fenni/projects"],
                ["Über mich", "info-empty", "/fenni/about"],
            ] as e}
                <Button onClick={() => {}}>
                    <a
                        href={e[1]}
                        class="transition rounded-full h-10 flex_row_center"
                        style={$page.route.id?.includes(e[2]) ? "filter: drop-shadow(0px 0px 4px rgb(250 204 21));" : ""}
                    >
                        {#if windowWidth > 768}
                            <P3>{e[0]}</P3>
                        {:else}
                            <Icon name={e[1]} textClass="text-xl font-bold"/>
                        {/if}
                    </a>
                </Button>
            {/each}
        </div>
    </div>
    <slot/>
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    <!--<section class="relative z-20 w-full h-screen p-16 lg:p-32 lg:pb-16">
        <!-<div class="pt-16 md:p-0 flex_row_center gap-16 text-4xl">
            {#each ["mail", "instagram", "youtube"] as platform}
                <Button onClick={() => {animateScroll.scrollToTop()}}><Icon name={platform}></Icon></Button>
            {/each}
        </div>->
        <div class="w-full h-screen pt-16 flex_col_center text-center text-5xl">
            <!-<div class="text-neutral-500">Fenja Rübenhagen<br/>Pothof 9d<br/>38122 Braunschweig</div>->
            Website designed von
            <div class="h-6"></div>
            <a href="/" class="font-bold"><Button onClick={() => {}}>
                <B>Taavi Rübenhagen</B>
            </Button></a>
        </div>
    </section>-->
</main>