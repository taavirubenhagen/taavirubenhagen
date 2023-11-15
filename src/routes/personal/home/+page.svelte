<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, H2,
        O1, O2,
        P1, P3,
        B,
        Button,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<main class="bg-black text-white" style="font-family: 'Young Serif';">
    <img
        src="/images/depri_portrait_square.jpg"
        alt="Depri portrait"
        class="absolute -z-5 right-0 h-full object-cover"
    />
    <div class="absolute z-5 right-0 h-full aspect-square bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
    <!--TODO: Make completely consistent typography-->
    <div class="relative z-20 h-screen flex flex-col justify-end md:justify-center p-16">
        <h2>
            I'm Taavi
            <br/>
            Rübenhagen.
        </h2>
        <div class="h-8"></div>
        <h4>Entrepreneur, App developer, Student.</h4>
        <div class="h-16"></div>
        <a href="/personal/home">
            <Button onClick={() => alert("Under development. Stay tuned!")}>
                <div class="border border-white h-12 pl-8 pr-6 center_row gap-4">
                    Projects
                    <img src="/icons/beta/bold_forward.svg" alt="Forward icon" class="h-5 invert"/>
                </div>
            </Button>
        </a>
    </div>
</main>