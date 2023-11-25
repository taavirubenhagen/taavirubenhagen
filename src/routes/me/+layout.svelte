<script lang="ts">
    import '$style'
    import {
        SmallParagraph,
    } from '$tavy';


    let windowHeight: number;
    let windowWidth: number;

    function updateScrollToTopButtonPositionClass(y: number): string {
        const dy = lastScrollY - y;
        lastScrollY = y;
        if (y === 0 || dy <= -8) {
            return "-bottom-10";
        }
        if (Math.abs(dy) <= 16) {
            return scrollToTopButtonPositionClass;
        }
        setTimeout(() => scrollToTopButtonPositionClass = updateScrollToTopButtonPositionClass(scrollY), 8000);
        return "bottom-8";
    }
    let scrollY = 0;
    let lastScrollY = 0;
    $: scrollToTopButtonPositionClass = updateScrollToTopButtonPositionClass(scrollY);

    const menuData = ['Home', 'Work', 'Services', 'Contact'];
    let isMenuOpen = false;

    let menuButtonCanvas: HTMLCanvasElement;
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} bind:scrollY={scrollY}/>




<main class="max-w-screen min-h-screen background">
    <div class="transition-all duration-400 fixed z-40 {scrollToTopButtonPositionClass} w-screen center_row">
        <button
            on:click={() => {}}
            class="transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"
        >
            <SmallParagraph>Back to top</SmallParagraph>
        </button>
    </div>
    <slot>
        <s1>This page is still under development.</s1>
    </slot>
</main>
