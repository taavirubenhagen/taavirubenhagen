<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import DeviceDetector from "svelte-device-detector";
    import { animateScroll } from 'svelte-scrollto-element';

    import "$style";
    import { globalScrollY, cursorButtonHover, contrastingTextColorWhite } from "./state";
    import {
        P1, P3,
        B,
        Icon,
        Button,
    } from './lib';

    let windowHeight: number;
    let scrollY: number;
    $: scrollPercentage = scrollY / windowHeight * 100;
    let currentlyAnimatingScroll = false;
    let cursor: HTMLElement;
    let localCursorButtonHover: boolean;
    let contrastingTextColorClass: string;


    globalScrollY.subscribe((value: number) => {
        contrastingTextColorWhite.set(value >= 0 || $page.route.id != "/fenni/home");
    });
    cursorButtonHover.subscribe((value: boolean) => {
        localCursorButtonHover = value;
    });
    contrastingTextColorWhite.subscribe((value: boolean) => {
        contrastingTextColorClass = value ? "text-white" : "text-black";
    });
    
    onMount(() => {
        const unsubscribe = page.subscribe(($page) => {
            if ($page) {
                contrastingTextColorWhite.set($page.route.id != "/fenni/home");
            }
        });
        contrastingTextColorWhite.set(true);
        return unsubscribe;
    });
</script>


<svelte:window
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
    class="relative bg-gradient-to-br from-yellow-50 via-yellow-700 to-yellow-900 font-sans overflow-x-hidden cursor-none"
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
    <div class="transition duration-200 fixed z-30 top-0 pointer-events-none w-full h-screen p-16 flex justify-between items-start {contrastingTextColorClass} font-handwriting">
        <Button onClick={() => {}}>
            <!-- TODO: Choose font -->
            <a href="/fenni/home" class="pointer-events-auto flex_row_center gap-8 font-logo" style="font-family: 'Yellowtail';">
                <div class="rounded-full w-8 h-8 bg-yellow-600"></div>
                <P1>FENNI</P1>
            </a>
        </Button>
        <div class="group pointer-events-auto backdrop-blur-sm rounded-full bg-opacity-25 bg-white px-1 py-1 flex justify-end items-start gap-8">
            {#each [
                ["Home", "/fenni/home"],
                ["Projekte", "/fenni/projects"],
                ["Über mich", "/fenni/about"],
            ] as e}
                <Button onClick={() => {}}>
                    <a
                        href={e[1]}
                        class=
                            "transition rounded-full h-8
                            {
                                $page.route.id == e[1]
                                    ? "text-white"
                                    : "bg-opacity-0"
                            }  hover:bg-opacity-50
                            bg-yellow-600 px-4 flex_row_center"
                    >
                        <P3>{e[0]}</P3>
                    </a>
                </Button>
            {/each}
        </div>
    </div>
    <slot/>
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    <section class="w-full h-screen p-16 lg:p-32 lg:pb-16">
        <div class="pt-16 md:p-0 flex_row_center gap-16 text-5xl">
            {#each ["mail", "instagram", "youtube"] as platform}
                <Button onClick={() => {animateScroll.scrollToTop()}}><Icon name={platform}></Icon></Button>
            {/each}
        </div>
        <div class="w-full pt-16 flex justify-between items-end">
            <div class="text-neutral-500">Fenja Rübenhagen<br/>Pothof 9d<br/>38122 Braunschweig</div>
            <div class="text-right text-lg">Website von<br/>
                <a href="/fenni/projects" class="font-bold"><Button onClick={() => {}}>
                    <B>Taavi Rübenhagen</B>
                </Button></a></div>
        </div>
    </section>
</main>


<style>
    .custom-cursor {
        box-shadow: 10px 10px 10px black;
    }
</style>