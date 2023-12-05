<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import { buttonHover } from "$state";
    import "$style";

    export let bindThis: HTMLElement;

    let localButtonHover: boolean;

    buttonHover.subscribe((value: boolean) => {
        localButtonHover = value;
    });
</script>


<DeviceDetector showInDevice="desktop">
    <div
        bind:this={bindThis}
        class="{localButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100"} duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"
        style=
            "transition-property: transform, opacity, width, height;
            {
                localButtonHover
                ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);"
                : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);"
            }"
    ></div>
</DeviceDetector>