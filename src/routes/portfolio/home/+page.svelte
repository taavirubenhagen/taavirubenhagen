<script lang="ts">
    import { globalScrollY } from "../state";
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, H2,
        O1, O2,
        P1, P3,
        B,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;

    $: typedMessageSectionOffset = windowHeight;
    $: phoneMockupSectionOffset = windowHeight + scrollTypingSpeed * windowHeight - windowHeight;

    const letterBasedTyping = true;
    const visibleMessage = "I'm a self-*taught 18-|year-old~UI/UX|Designer,~Developer|and Entre*preneur.";
    const scrollTypingSpeed = 8;
    let scrollTypingProgress = 0;

    globalScrollY.subscribe((value: number) => {
        scrollY = value;
        console.log(90 * ( ( scrollY - phoneMockupSectionOffset ) / windowHeight ) - 10);
        let tempScrollTypingProgress = Math.floor(
            visibleMessage.length * ( value - typedMessageSectionOffset ) / ( windowHeight * ( scrollTypingSpeed * 0.6 ) )
        );
        if (["|", " ", "-"].includes(visibleMessage[tempScrollTypingProgress]) || letterBasedTyping) {
            scrollTypingProgress = tempScrollTypingProgress;
        }
    });
</script>


<svelte:window bind:innerWidth={windowWidth} bind:outerHeight={windowHeight} />


<main>
    <div class="w-full min-h-screen sm:p-16 flex flex-col justify-center items-center lg:items-start">
        <div class="flex flex-col items-start">
            <O1>Hi, I'm</O1>
            {#if windowWidth < 1024}
                <H1>Taavi </H1>
                <H1>Rüben-</H1>
                <H1>hagen.</H1>
            {:else}
                <H1>Taavi Rübenhagen.</H1>
            {/if}
        </div>
    </div>
    <div class="bg-gradient-to-b from-background to-primary" style="padding-top: 50vh; min-height: {100 * scrollTypingSpeed}vh;">
        <div class="-translate-y-1/2 sticky top-1/2 pointer-events-none sm:p-16 text-center text-white">
            <H2>{@html (() => {
                let m = visibleMessage.substring(0, scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
                if (windowWidth > 768) {
                    return m.replaceAll("~", " ").replaceAll("*", "");
                }
                return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
            })()}</H2>
            <O2>{@html (() => {
                let m = visibleMessage.substring(scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
                if (windowWidth > 768) {
                    return m.replaceAll("~", " ").replaceAll("*", "");
                }
                return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
            })()}</O2>
        </div>
    </div>
    <div class="relative bg-gradient-to-b from-primary via-primary to-teal-900" style="min-height: 500vh;">
        <div class="sticky top-[15vh] h-[screen] flex_col_center text-onPrimary">
            <div class="transition duration-800 absolute">
                <div class="rounded-2xl border border-onPrimary w-[35vh] h-[70vh] flex_col_center text-onPrimary">
                    [Image]
                </div>
            </div>
            <div
                class="relative scale-75"
                style="left: {10 + ( windowWidth > 768 ? 5 : 2) * ( ( scrollY - phoneMockupSectionOffset ) / windowHeight )}vh;"
            >
                <div class="rounded-2xl border border-onPrimary w-[35vh] h-[70vh] flex_col_center">
                    [Image]
                </div>
            </div>
        </div>
    </div>
    <div class="h-screen p-16 flex flex_col_center items-start sm:items-center">
        <a href="/portfolio/newsletter">
            <H2><B>Sign up for my newsletter</B></H2>
        </a>
    </div>
</main>