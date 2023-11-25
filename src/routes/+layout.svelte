<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import { page } from "$app/stores";
    import { cursorButtonHover, globalScrollY } from "$state";
    import "$style";
    import { LegalFooter } from "$tavy/industrial";


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
    class="relative w-full min-h-full cursor-none bg-background text-onBackground selection:primary font-body"
>
    <!-- TODO: Add standard scrollbar effects -->
    <DeviceDetector showInDevice="desktop">
        <div
            bind:this={cursor}
            class="{localCursorButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100"} duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"
            style=
                "transition-property: transform, opacity, width, height;
                {
                    localCursorButtonHover
                    ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);"
                    : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);"
                }"
        ></div>
    </DeviceDetector>
    <slot/>
    <LegalFooter contactLink='/main/contact' ppLink='/main/privacy-policy'/>
</main>