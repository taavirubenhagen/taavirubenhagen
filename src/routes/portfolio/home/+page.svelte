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

    const letterBasedTyping = true;
    const visibleMessage = "I'm a self-~taught 18-|year-old~UI/UX|Designer,~Developer|and Entre*preneur.";
    $: typedMessageSectionOffset = windowHeight;
    const scrollTypingSpeed = 8;
    let scrollTypingProgress = 0;

    globalScrollY.subscribe((scrollY: number) => {
        /*let words: any[] = [];
        visibleMessage.split(" ").forEach(e => words.push(e.split("|")))
        console.log(words.flat());*/
        let tempScrollTypingProgress = Math.floor(
            visibleMessage.length * ( scrollY - typedMessageSectionOffset ) / ( windowHeight * ( scrollTypingSpeed * 0.6 ) )
        );
        if (["|", " ", "-"].includes(visibleMessage[tempScrollTypingProgress]) || letterBasedTyping) {
            scrollTypingProgress = tempScrollTypingProgress;
        }
    });
</script>


<svelte:window bind:innerWidth={windowHeight} bind:outerHeight={windowHeight} />


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
    <div class="min-h-screen primary p-16 flex flex-col justify-center items-center sm:items-start">
        <div class="w-full h-[75vh] flex flex-col justify-evenly items-center">
            <a href="/portfolio/newsletter">
                <H2><B onPrimary>Sign up for my newsletter</B></H2>
            </a>
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