<script lang="ts">
    import DeviceDetector from "svelte-device-detector";

    let innerHeight: number;
    let scrollY: number;
    $: scrollPercentage = scrollY / innerHeight * 100

    import "$style";
</script>



<svelte:window bind:innerHeight={innerHeight} bind:scrollY={scrollY} />


<main class="font-sans">
    <div class="absolute z-50 w-1/2 h-[{scrollPercentage + 30}%] primary"></div>
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