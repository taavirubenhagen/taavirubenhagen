<script lang="ts">
    import { fade, blur } from 'svelte/transition';

    import { globalScrollY } from "../state";
    import "$style";
    import {
        Icon,
        H1, H2,
        O1, O2,
        P1, P3,
        B,
        ScrollReactiveElement,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;

    function calcScrollProgress(offset: number, sectionHeight: number, y: number): number {
        return ( y - offset ) / sectionHeight;
    }
    $: globalScrollProgress = calcScrollProgress(0, windowHeight, scrollY);




    // TODO
    const heightFactor = 6;
    $: scrollData = {
        hiVisible: globalScrollProgress < 0.5,
        scrollTypingProgress: Math.floor(visibleMessage.length * ( scrollY - windowHeight * 2 ) / ( windowHeight * 3 )),
        scrollTypingElementVisible: 1.5 < globalScrollProgress && globalScrollProgress < 5.5,
    };




    $: scrollTypingSectionHeight = scrollTypingSpeed * windowHeight;
    const visibleMessage = "I'm a self-*taught 18-|year-old~UI/UX|Designer,~Developer|and Entre*preneur.";
    const visibleMessageChunks = ["I'm", "a", "self-", "taught", "18-", "year-", "old", "UI", "/", "UX", "Designer,", "Developer", "and", "Entrepreneur", "."];
    const scrollTypingSpeed = 8;

    $: phoneMockupSectionOffset = windowHeight + scrollTypingSectionHeight - windowHeight;
    $: phoneMockupSectionHeight = 8 * windowHeight;
    $: phoneMockupScrollProgress = calcScrollProgress(phoneMockupSectionOffset, phoneMockupSectionHeight, scrollY);

    globalScrollY.subscribe((value: number) => {
        scrollY = value;
    });
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<!--TODO: Check if buttons interfere with scroll effects-->
<main class="relative z-0">
    <div class="absolute z-20 w-screen h-[6400vh]"></div>
    <ScrollReactiveElement condition={scrollData.hiVisible}>
        <!--TODO: Implement fade in/fade out-->
        <div
            transition:blur={{ amount: 8 }}
            class="w-full h-screen sm:p-16 flex flex-col justify-center items-center lg:items-start"
        >
            <div class="flex flex-col items-start">
                <O1>Hi, I'm</O1>
                {#if windowWidth < 1024}
                    <H1>Taavi </H1>
                    <H1>Rüben-</H1>
                    <H1>hagen.</H1>
                {:else}
                    <H1>Taavi Rübenhagen.</H1>
                    {scrollY}
                {/if}
            </div>
        </div>
    </ScrollReactiveElement>
    <ScrollReactiveElement condition={scrollData.scrollTypingElementVisible} wrapperClass="center_col text-center">
        <div class="sm:p-16" transition:blur={{ amount: 8 }}>
            <h2 class="inline">
                {@html (() => {
                    let m = visibleMessage.substring(0, scrollData.scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
                    if (windowWidth > 768) {
                        return m.replaceAll("~", " ").replaceAll("*", "");
                    }
                    return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
                })()}
            </h2><h2 class="inline opacity-10">{@html (() => {
                let m = visibleMessage.substring(scrollData.scrollTypingProgress).replaceAll(" ", "&nbsp;").replaceAll("|", "<br/>");
                if (windowWidth > 768) {
                    return m.replaceAll("~", " ").replaceAll("*", "");
                }
                return m.replaceAll("~", "<br/>").replaceAll("*", "<br/>");
            })()}</h2>
        </div>
    </ScrollReactiveElement>
    <ScrollReactiveElement condition={scrollData.scrollTypingElementVisible}>
        <p2
            class="
                w-full h-full flex flex-col md:flex-row justify-evenly items-center gap-16 md:gap-0 text-center"
            transition:blur={{ amount: 8 }}
        >
            {#each [
                ["buymeacoffee.svg", "Buy me a coffee"],
                "speech",
                "arrow-separate",
            ] as e, i}
                <div class="border border-primary w-2/3 sm:1/2 md:w-1/4 p-8 lg:p-16">
                    <img src="{e[0]}" alt={e[1]}>
                    <div class="h-16"></div>
                    <B>{"/main/home/" + e[1]}</B>
                </div>
            {/each}
        </p2>
    </ScrollReactiveElement>
        <!--<div
            class="relative pb-[100vh] primary"
            style="height: {windowWidth < 768 ? 0 : phoneMockupSectionHeight}px;"
        >
            <div
                class="sticky top-[25vh] h-[50vh] center_col text-onPrimary"
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
        </div>-->
</main>