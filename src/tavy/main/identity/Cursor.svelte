<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import { cursorPosition, buttonHover } from "$state";
    import "$style";
</script>


<DeviceDetector showInDevice="desktop">
    <div
        class=
            "{$buttonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100"}
            duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2
            pointer-events-none backdrop-invert rounded-full"
        style="
            left: {$cursorPosition[0]}px;
            top: {$cursorPosition[1]}px;
            transition-property: transform, opacity, width, height;
            {
                $buttonHover
                ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);"
                : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);"
            }"
    ></div>
</DeviceDetector>