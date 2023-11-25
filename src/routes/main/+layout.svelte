<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import { page } from '$app/stores';
    import "$style";
    import { globalScrollY, cursorButtonHover } from "$state";
    import {
        P1, P3,
        B,
        Button,
    } from './lib';

    let windowHeight: number;
    let scrollY = 0;
    $: scrollPercentage = scrollY / windowHeight * 100;
    let localCursorButtonHover: boolean;

    $: showFooter =
        $page.route.id?.includes("home-dev")
        ? false
        : true;

    cursorButtonHover.subscribe((value: boolean) => {
        localCursorButtonHover = value;
    });
</script>


<svelte:window bind:innerHeight={windowHeight}/>


<main
    on:scroll={(event) => {
        scrollY = event?.currentTarget?.scrollTop;
        globalScrollY.set(event?.currentTarget?.scrollTop);
    }}
    class="h-screen overflow-x-hidden cursor-none"
>
    <!--TODO: Adapt to different page lengths-->
    <div class="group z-40 fixed w-full h-8">
        <div
            class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary"
            style="width: {scrollPercentage}%; transition-property: height;"
        >
        </div>
    </div>
    <div class="absolute z-35 w-full h-8 opacity-25 primary px-8 center_row">
        <DeviceDetector showInDevice="mobile">
            Best experienced on desktop.
        </DeviceDetector>
        <DeviceDetector showInDevice="desktop">
            Still under development.
        </DeviceDetector>
    </div>
    <slot></slot>
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    {#if showFooter}
        <div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center">
            <div class="h-full flex flex-col md:justify-between break-all">
                <!-- TODO: Add feedback page -->
                <a href="mailto:taavi.ruebenhagen@gmail.com"><Button onClick={() => {}}>
                    <P1><B onPrimary>taavi.ruebenhagen@gmail.com</B></P1>
                </Button></a>
                <div class="pt-8 md:p-0 text-neutral-500">
                    <div>Pothof 9d</div>
                    <div>38122 Braunschweig, Germany</div>
                </div>
            </div>
            <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end">
                <a href="/main/contact" class="h-8 md:h-auto"><P3><B onPrimary simple>Contact</B></P3></a>
                <a href="/main/privacy-policy" class="h-8 md:h-auto"><P3><B onPrimary simple>Privacy Policy (Website)</B></P3></a>
                <a href="/main/presenter/privacy-policy" class="h-8 md:h-auto"><P3><B onPrimary simple>Privacy Policy (Presentation Master 2)</B></P3></a>
            </div>
        </div>
    {/if}
</main>