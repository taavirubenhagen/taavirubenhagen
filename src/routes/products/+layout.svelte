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
    class="overflow-x-hidden cursor-none"
>
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
                    38122 Braunschweig, Germany<br/>
                </div>
            </div>
            <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end text-left md:text-right">
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