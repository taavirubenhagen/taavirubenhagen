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

    const projectNames = [
        "Offenes Kunstprojekt",
        "Ein Bild, das ...",
        "Kurzfilme",
        "AdLeF",
        "Musikalische Werke",
        "Schauspielkarriere",
    ];
    const imageUrls = [
        "https://www.blitzrechner.de/wp-content/uploads/2015/05/kunstwerke-preise.jpg",
        "https://www.sueddeutsche.de/image/sz.1.5914567/1200x675?v=1686329819",
        "https://www.ahlen.de/fileadmin/Fotos_ab_Mai_2020/Bildung_Kultur/paint-brush-Pixabay.jpg",
        "https://www.akki-ev.de/wp-content/uploads/2014/04/Akki-Kunstcamp-2014.jpg",
        "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg",
        "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg",
    ];
    let timerSeconds = 0;

    function calcScrollProgress(offset: number, sectionHeight: number, y: number): number {
        return ( y - offset ) / sectionHeight;
    }

    globalScrollY.subscribe((value: number) => {
        scrollY = value;
    });

    setInterval(() => {
        timerSeconds++;
    }, 500);
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<main>
    <div class="fixed pointer-events-none w-full h-screen text-onPrimary">
        <img
            src={imageUrls[Math.floor(timerSeconds / 10) % imageUrls.length]}
            alt=""
            class="absolute z-0 min-w-full min-h-screen object-cover"
        />
        <div class="absolute z-5 w-full h-screen">
            <div class="w-full h-full opacity-50 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div class="absolute z-15 w-full h-screen p-8 md:p-16 flex flex-col justify-end items-start">
            <div class="invert flex flex-wrap">
                {#each projectNames[Math.floor(timerSeconds / 10) % projectNames.length].split("") as letter}
                    <O2>{letter}</O2>
                {/each}
            </div>
            <Button onClick={() => {}}>
                <a
                    href="/fenni/projects/offenes-kunstprojekt"
                    class=
                        "relative z-20 my-8 pointer-events-auto
                        rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4
                        flex_row_center text-white"
                >
                    <P3>Mach es selbst</P3>
                </a>
            </Button>
            <div class="flex gap-4">
                <div class="rounded-full w-8 h-1 backdrop-invert"></div>
                <div class="rounded-full w-8 h-1 backdrop-invert"></div>
                <div class="opacity-25 rounded-full w-8 h-1 backdrop-invert"></div>
                <div class="opacity-25 rounded-full w-8 h-1 backdrop-invert"></div>
            </div>
        </div>
    </div>
    <div class="w-full" style="height: {imageUrls.length * 100}vh;"></div>
</main>