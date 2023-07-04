<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, H2,
        O1, O2,
        P1, P3,
        B,
    } from '../lib';

    let windowHeight: number;

    const typedMessage = "I'm a self-taught 17-y/o UI/UX-Designer, Developer and Entrepreneur.";
    const scrollTypingSpeed = 5
    let scrollTypingProgress = 0

    function typeOnScroll(event: any) {
        console.log(event.target.scrollTop, windowHeight * scrollTypingSpeed - 1);
        scrollTypingProgress++;
    }
</script>


<svelte:window bind:innerHeight={windowHeight} />


<main>
    <div class="w-full min-h-screen sm:p-16 flex flex-col justify-center items-center sm:items-start">
        <div class="flex flex-col items-start">
            <O1>Hi, I'm</O1>
            <DeviceDetector showInDevice="mobile">
                <H1>Taavi </H1>
                <H1>Rüben-</H1>
                <H1>hagen.</H1>
            </DeviceDetector>
            <DeviceDetector showInDevice="desktop">
                <H1>Taavi Rübenhagen.</H1>
            </DeviceDetector>
        </div>
    </div>
    <div
        on:scroll={typeOnScroll}
        class="relative w-full h-screen overflow-y-scroll sm:p-16 flex_col_center"
    >
        <div class="h-[{100 * scrollTypingSpeed}vh]"></div>
        <div class="relative z-30">
            <O2>{typedMessage.substring(0, scrollTypingProgress)}</O2>
        </div>
    </div>
    <div class="min-h-screen p-16 flex flex-col justify-center items-center sm:items-start">
        <div class="w-full h-[75vh] flex flex-col justify-evenly items-center">
            <a href="/portfolio/newsletter">
                <H2><B>Sign up for my newsletter</B></H2>
            </a>
        </div>
    </div>
</main>