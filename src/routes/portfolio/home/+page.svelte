<script lang="ts">
    import DeviceDetector from "svelte-device-detector";

    import "$style";
    import {
        H1, H2,
        O1,
        P1,
        B,
    } from '../lib';
</script>

<!--<svelte:window bind:innerHeight={} />-->

<main>
    <div class="w-full min-h-screen p-16 flex flex-col justify-center items-center sm:items-start">
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
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    <div class="w-full half_screen primary p-16 md:p-32 flex flex-col md:flex-row justify-between items-center">
        <div class="h-full flex flex-col justify-between">
            <P1><B>taavi.ruebenhagen@gmail.com</B></P1>
            <div class="text-neutral-500">
                <div>Pothof 9d</div>
                <div>38122 Braunschweig</div>
            </div>
        </div>
        <div class="h-full flex flex-col justify-between items-end">
            <div>LinkedIn</div>
            <div>Instagram</div>
            <div>TikTok</div>
        </div>
    </div>
</main>




<style>
    .half_screen {
        height: 50vh;
    }
</style>