<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import { page } from '$app/stores';
    import "$style";
    import { globalScrollY, cursorButtonHover } from "$state";
    import {
        MediumParagraph,
        LargeParagraph,
    } from '$tavy';
    import {
        RawButton,
    } from '$tavy';
    import {
        Button,
    } from '$tavy/minimal';

    let windowHeight: number;
    let scrollY = 0;
    let cursor: HTMLElement;
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
    on:mousemove={(event) => {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    }}
    on:scroll={(event) => {
        scrollY = event?.currentTarget?.scrollTop;
        globalScrollY.set(event?.currentTarget?.scrollTop);
    }}
    class="overflow-x-hidden cursor-none"
    style='height: {windowHeight};'
>
    <!-- TODO: Add standard scrollbar effects -->
    <DeviceDetector showInDevice="desktop">
        <div
            bind:this={cursor}
            class="{localCursorButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100"} duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"
            style=
                "transition-property: transform, opacity, width, height;
                {localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);"}
                bo-shadow: 0 0 32px white, 0 0 32px white, 0 0 32px white, 0 0 32px white;"
        ></div>
    </DeviceDetector>
    <slot></slot>
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    {#if showFooter}
        <div class="w-full h-[65vh] sm:h-[50vh] primary p-16 lg:p-32 flex flex-col lg:flex-row justify-between lg:items-center">
            <div class="h-full flex flex-col md:justify-between break-all">
                <!-- TODO: Add feedback page -->
                <a href="mailto:taavi.ruebenhagen@gmail.com" class='text-left'><Button onClick={() => {}}>
                    <LargeParagraph>taavi.ruebenhagen@gmail.com</LargeParagraph>
                </Button></a>
                <div class="pt-8 md:p-0 text-neutral-500">
                    Pothof 9d<br/>
                    38122 Braunschweig<br/>
                    Germany<br/>
                </div>
            </div>
            <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end">
                <RawButton onClick={() => window.location.href = '/main/contact'}>
                    <MediumParagraph>Contact</MediumParagraph>
                </RawButton>
                <RawButton onClick={() => window.location.href = '/main/privacy-policy'}>
                    <MediumParagraph>Privacy Policy</MediumParagraph>
                </RawButton>
            </div>
        </div>
    {/if}
</main>