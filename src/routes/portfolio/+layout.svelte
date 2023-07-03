<script lang="ts">
    import DeviceDetector from "svelte-device-detector";

  import "$style";
</script>




<main class="font-sans">
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