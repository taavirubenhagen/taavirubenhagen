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
        Button,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;

    function calcScrollProgress(offset: number, sectionHeight: number, y: number): number {
        return ( y - offset ) / sectionHeight;
    }

    $: typedMessageSectionOffset = windowHeight;
    $: scrollTypingSectionHeight = scrollTypingSpeed * windowHeight;
    const letterBasedTyping = true;
    const visibleMessage = "I'm a self-*taught 18-|year-old~UI/UX|Designer,~Developer|and Entre*preneur.";
    const scrollTypingSpeed = 8;
    let scrollTypingProgress = 0;

    $: phoneMockupSectionOffset = windowHeight + scrollTypingSectionHeight - windowHeight;
    $: phoneMockupSectionHeight = 8 * windowHeight;
    $: phoneMockupScrollProgress = calcScrollProgress(phoneMockupSectionOffset, phoneMockupSectionHeight, scrollY);

    globalScrollY.subscribe((value: number) => {
        scrollY = value;
        let tempScrollTypingProgress = Math.floor(
            visibleMessage.length * ( value - typedMessageSectionOffset ) / ( windowHeight * ( scrollTypingSpeed *  + ( windowWidth > 768 ? 0.7 : 0.2 ) ) )
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
    <div class="bg-gradient-to-b from-background to-primary" style="padding-top: 50vh; height: {100 * scrollTypingSpeed}vh;">
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
    <div
        class="relative pb-[100vh] primary"
        style="height: {windowWidth < 768 ? 0 : phoneMockupSectionHeight}px;"
    >
        <div
            class="sticky top-[25vh] h-[50vh] flex_col_center text-onPrimary"
            style={windowWidth < 768 ? "transform: translateY(-" + ( 3 * 90 + 50 ) + "vh);" : ""}
        >
            <img src="/mockups/presenter_notes_mockup.png" alt="" class="static md:absolute rotate-90 h-[90vh]"/>
            <img
                src="/mockups/presenter_notes_mockup.png" alt=""
                class="static md:relative -z-10 top-[45vh] h-[90vh]"
                style=
                    "right: {windowWidth > 768 ? 3 + 30 * phoneMockupScrollProgress : 0}vw;
                    transform: scale({windowWidth > 768 ? 85 + 15 * phoneMockupScrollProgress : 100}%) rotate(90deg);"
            />
            <img
                src="/mockups/presenter_notes_mockup.png" alt=""
                class="static md:relative -z-10 bottom-[45vh] h-[90vh]"
                style=
                    "left: {windowWidth > 768 ? 3 + 30 * phoneMockupScrollProgress : 0}vw;
                    transform: scale({windowWidth > 768 ? 85 + 15 * phoneMockupScrollProgress : 100}%) rotate(90deg);"
            />
        </div>
    </div>
    <div class="h-screen p-16 flex flex_col_center items-start sm:items-center">
        <a href="/portfolio/newsletter">
            <Button onClick={() => {}}><H2><B>Sign up for my newsletter</B></H2></Button>
        </a>
    </div>
</main>