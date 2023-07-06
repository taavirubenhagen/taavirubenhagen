<script lang="ts">
    import { globalScrollY } from "../state";
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, O2,
        P1, P3,
        B,
        Button,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;

    function calcScrollProgress(offset: number, sectionHeight: number, y: number): number {
        return ( y - offset ) / sectionHeight;
    }
</script>


<svelte:window bind:innerWidth={windowWidth} bind:outerHeight={windowHeight} />


<main>
    <div class="relative text-onPrimary">
        <img
            src={[
                "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg",
                "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg",
            ][0]}
            alt=""
            class="absolute w-full h-screen border-[0px] border-yellow-600"
        />
        <div class="absolute z-5 w-full h-screen p-[0px]">
            <div class="w-full h-full bg-opacity-50 bg-black"></div>
        </div>
        <div class="absolute z-10 w-full h-screen p-16 flex flex-col justify-end items-start">
            <div class="relative invert">
                <O2>Offenes Kunstprojekt</O2>
            </div>
        </div>
        <div class="absolute z-10 w-full h-screen p-16 flex justify-between items-start font-handwriting">
            <button class="flex items-center gap-8">
                <div class="rounded-full w-8 h-8 bg-yellow-700"></div>
                <P1>Fenni</P1>
            </button>
            <div class="flex justify-end items-start gap-16">
                <button>
                    <P3>Home</P3>
                </button>
                <button>
                    <P3>Projekte</P3>
                </button>
                <button>
                    <P3>Über mich</P3>
                </button>
            </div>
        </div>
    </div>
</main>