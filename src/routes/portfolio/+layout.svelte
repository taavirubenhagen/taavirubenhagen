<script lang="ts">
    import DeviceDetector from "svelte-device-detector";

    let innerHeight: number;
    let scrollY: number;
    $: scrollPercentage = scrollY / innerHeight * 100;
    import "$style";
</script>



<svelte:window bind:innerHeight={innerHeight} bind:scrollY={scrollY} />


<main class="font-sans">
    <!-- TODO: Add standard scrollbar effects -->
    <div class="group z-50 fixed w-full h-8">
        <div
            class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary"
            style="width: {scrollPercentage}%; transition-property: height;"
        >
        </div>
    </div>
    <div class="absolute z-45 w-full h-8 opacity-25 primary px-8 flex_row_center">
        <DeviceDetector showInDevice="mobile">
            Best experienced on desktop.
        </DeviceDetector>
        <DeviceDetector showInDevice="desktop">
            Still under development.
        </DeviceDetector>
    </div>
    <slot></slot>
</main>