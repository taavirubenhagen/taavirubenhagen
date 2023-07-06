<script lang="ts">
    import { globalScrollY } from "../state";
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, H2,
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
    <div class="w-full min-h-screen sm:p-16 flex_col_center">
        <div class="flex flex-col items-start">
            <H1>Remember that your life is art.</H1>
        </div>
    </div>
</main>