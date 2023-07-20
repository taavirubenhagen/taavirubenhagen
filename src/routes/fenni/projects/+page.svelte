<script lang="ts">
    import { globalScrollY } from "../state";
    import DeviceDetector from "svelte-device-detector";
    import { ScaleOut } from 'svelte-loading-spinners';

    import "$style";
    import {
        Icon,
        P1, P3,
        B,
        Button,
    } from '../lib';

    let windowWidth: number;
    let windowHeight: number;
    let scrollY: number;

    const apiUrl = "https://api.github.com/repos/taavirubenhagen/taavirubenhagen/contents/static/fenni/projects";
    const projectData = [
        ["Offenes Kunstprojekt", "https://www.blitzrechner.de/wp-content/uploads/2015/05/kunstwerke-preise.jpg"],
        ["Ein Bild, das keine Farbe hat", "https://www.sueddeutsche.de/image/sz.1.5914567/1200x675?v=1686329819"],
        ["Kurzfilme", "https://www.ahlen.de/fileadmin/Fotos_ab_Mai_2020/Bildung_Kultur/paint-brush-Pixabay.jpg"],
        ["AdLeF", "https://www.akki-ev.de/wp-content/uploads/2014/04/Akki-Kunstcamp-2014.jpg"],
        ["Musikalische Werke", "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg"],
        ["Schauspielkarriere", "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg"],
    ];
    let timerIntervals = 0;

    function calcScrollProgress(offset: number, sectionHeight: number, y: number): number {
        return ( y - offset ) / sectionHeight;
    }

    globalScrollY.subscribe((value: number) => {
        scrollY = value;
    });

    setInterval(() => {
        timerIntervals++;
    }, 5000);
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<main>
    {#await (async () => {
        let apiData;
        try {
            apiData: [] = await ( await fetch(apiUrl) ).json();
            let projectNames = (apiData ?? [{type: "", name: ""}]).filter((item) => item.type === 'dir').map((item) => item.name)
        } catch (e) {
            return [e, e, e];
        }
        const projectData = [apiData]
        return [projectData];
    })()}
        <div class="w-full h-screen flex_col_center">
            <ScaleOut duration="800ms" unit="px" size="64" color="rgb(202 138 4)"/>
        </div>
    {:then projetData}
        <div class="fixed w-full h-full text-onPrimary">
            <img
                src={projectData[timerIntervals % projectData.length][1]}
                alt=""
                class="absolute z-0 min-w-full min-h-full object-cover"
            />
            <div class="absolute z-5 w-full h-full">
                <div class="w-full h-full opacity-50 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div class="absolute z-15 w-full h-full p-8 md:p-16 flex flex-col justify-end items-start">
                <div class="flex flex-wrap">
                    {#each projectData[timerIntervals % projectData.length][0].split("") as letter}
                        <h2 class="font-handwriting">{letter}</h2>
                    {/each}
                </div>
                <Button onClick={() => {}}>
                    <a
                        href="/fenni/projects/offenes-kunstprojekt"
                        class=
                            "relative z-20 my-8
                            rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4
                            flex_row_center text-white"
                    >
                        <P3>Mach es selbst</P3>
                    </a>
                </Button>
                <div class="flex gap-2">
                    {#each projectData as _, i}
                        <div class="transition duration-[5s] ease-linear rounded-full w-8 h-1 {timerIntervals >= i ? "bg-yellow-600" : "bg-white"}"></div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="w-full" style="height: {projectData.length * 100}%;"></div>
    {/await}
</main>