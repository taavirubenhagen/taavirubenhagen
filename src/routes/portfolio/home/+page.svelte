<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, H2,
        O1,
        P1, P3,
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
        <div class="w-full h-[75vh] flex flex-col justify-evenly items-center">
            
            <a href="/portfolio/newsletter">
                <H2><B>Sign up for my newsletter</B></H2>
            </a>
        </div>
    </div>
</main>