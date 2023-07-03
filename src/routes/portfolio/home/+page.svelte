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
    <div class="min-h-screen p-16 flex flex-col justify-center items-center sm:items-start">
        <div class="w-full flex flex-col items-center">
            {#if true}
                <H2>Sign up for my newsletter.</H2>
            {:else}
                <H2>Thank you.</H2>
            {/if}
        </div>
    </div>
    <!-- TODO: Make it slide into view when scrolled like Cuberto -->
    <div class="w-full md:h-[50vh] primary p-16 md:p-32 flex flex-col md:flex-row justify-between md:items-center">
        <div class="h-full flex flex-col md:justify-between break-all">
            <P1><B>taavi.ruebenhagen@gmail.com</B></P1>
            <div class="pt-8 md:p-0 text-neutral-500">
                <div>Pothof 9d</div>
                <div>38122 Braunschweig</div>
            </div>
        </div>
        <div class="h-full pt-16 md:p-0 flex flex-col justify-end md:justify-between md:items-end">
            <div class="h-8 md:h-auto">LinkedIn</div>
            <div class="h-8 md:h-auto">Instagram</div>
            <div class="h-8 md:h-auto">TikTok</div>
        </div>
    </div>
</main>