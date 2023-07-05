<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import { globalScrollY } from "./state";
    import {
        P1, P3,
        B,
    } from './lib';

    let windowHeight: number;
    let scrollY: number;
    $: scrollPercentage = scrollY / windowHeight * 100;
    let cursor: HTMLElement;
</script>


<svelte:window bind:innerHeight={windowHeight} bind:scrollY={scrollY} />


<main
    on:mousemove={(event) => {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    }}
    on:scroll={(event) => globalScrollY.set(event?.currentTarget?.scrollTop)}
    class="font-sans h-screen overflow-x-hidden overflow-y-scroll cursor-none"
>
    <!-- TODO: Add standard scrollbar effects -->
    <DeviceDetector showInDevice="desktop">
        <div
            bind:this={cursor}
            class="fixed z-50 pointer-events-none backdrop-invert rounded-full w-4 h-4"
            style="box-shadow: 0 0 32px white, 0 0 32px white, 0 0 32px white, 0 0 32px white;"
        ></div>
    </DeviceDetector>
    <div class="group z-45 fixed w-full h-8">
        <div
            class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary"
            style="width: {scrollPercentage}%; transition-property: height;"
        >
        </div>
    </div>
    <div class="absolute z-40 w-full h-8 opacity-25 primary px-8 flex_row_center">
        <DeviceDetector showInDevice="mobile">
            Best experienced on desktop.
        </DeviceDetector>
        <DeviceDetector showInDevice="desktop">
            Still under development.
        </DeviceDetector>
    </div>
    <slot></slot>
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    <div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center">
        <div class="h-full flex flex-col md:justify-between break-all">
            <!-- TODO: Add feedback page -->
            <a href="mailto:taavi.ruebenhagen@gmail.com"><P1><B onPrimary>taavi.ruebenhagen@gmail.com</B></P1></a>
            <div class="pt-8 md:p-0 text-neutral-500">
                <div>Pothof 9d</div>
                <div>38122 Braunschweig</div>
            </div>
        </div>
        <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end">
            <div class="h-8 md:h-auto"><P3><B onPrimary simple>LinkedIn</B></P3></div>
            <div class="h-8 md:h-auto"><P3><B onPrimary simple>Instagram</B></P3></div>
            <div class="h-8 md:h-auto"><P3><B onPrimary simple>TikTok</B></P3></div>
        </div>
    </div>
</main>


<style>
    .custom-cursor {
        box-shadow: 10px 10px 10px black;
    }
</style>