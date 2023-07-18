<script lang="ts">
    import { globalScrollY } from "../state";
    import DeviceDetector from "svelte-device-detector";
    
    import "$style";
    import {
        Icon,
        H1, H2,
        O2,
        P1, P3,
        B,
        Button,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;
    let timerSeconds = 0;


    setInterval(() => {
        timerSeconds++;
    }, 500);
</script>


<svelte:window bind:innerWidth={windowWidth} bind:outerHeight={windowHeight} bind:scrollY={scrollY} />


<section class="relative h-screen">
    <div class="fixed brightness-75 contrast-200 w-full h-screen">
        <img
            alt=""
            src="/color_explosion.png"
            class="w-full"
        />
    </div>
    <div class="fixed brightness-75 w-full h-screen flex_col_center" style="opacity: {1 - 0 * ( scrollY / windowHeight )};">
        <img
            alt="Portrait von mir"
            src="/colorful_woman.png"
            class="h-full"
        />
    </div>
    <div class="absolute z-15 w-full h-screen p-16 flex_col_center">
        <div class="mt-4 mb-4 invert font-logo">
            <H2>Hi, ich bin FENNI.</H2>
        </div>
        <Button onClick={() => {}}>
            <a href="/fenni/projects" class="relative z-20 my-8 rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4 flex_row_center">
                <P3><div class="text-white">Sag Hallo</div></P3>
            </a>
        </Button>
    </div>
</section>


<!--<main>
    <div class="relative w-full h-screen">
        <div class="absolute z-15 w-full h-screen p-16 flex_col_center">
            <div class="mt-4 mb-4 font-logo">
                <H2>Hi, ich bin FENNI.</H2>
            </div>
            <Button onClick={() => {}}>
                <a href="/fenni/projects" class="relative z-20 my-8 rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4 flex_row_center">
                    <P3><div class="text-white">Sag Hallo</div></P3>
                </a>
            </Button>
        </div>
    </div>
    <div class="relative w-full h-screen text-onPrimary">
        <img
            src="https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg"
            alt=""
            class="absolute z-0 w-full h-screen border-[0px] border-yellow-600"
        />
        <div class="absolute z-5 w-full h-screen p-[0px]">
            <div class="w-full h-full opacity-50 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div class="absolute z-15 w-full h-screen p-16 flex_col_center">
            <div class="mt-4 mb-4 invert">
                <O2>Remember that your life is art.</O2>
            </div>
            <Button onClick={() => {}}>
                <a href="/fenni/projects" class="relative z-20 my-8 rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4 flex_row_center">
                    <P3><div class="text-white">Sieh meine Projekte</div></P3>
                </a>
            </Button>
        </div>
    </div>
</main>-->