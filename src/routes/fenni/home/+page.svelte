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


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} bind:scrollY={scrollY} />


<main class="bg-gradient-to-br from-yellow-50 via-yellow-700 to-yellow-900 text-center">
    <section class="relative h-screen">
        <div class="fixed opacity-75 brightness-75 contrast-200 w-full h-screen flex_col_center justify-start">
            <img
                alt=""
                src="/centered_explosion.png"
                class="w-full min-w-screen"
                style="transform: scale({(() => {
                    let x = scrollY / windowHeight / ( windowWidth > windowHeight ? 2 : 1 );
                    let limit = ( windowWidth > windowHeight ? 1 : 1.25 );
                    return x > limit ? limit : x;
                })()});"
            />
        </div>
        <div class="fixed brightness-75 w-full h-screen {windowWidth > windowHeight ? "" : "px-8"} flex_col_center" style="opacity: {1 - 0 * ( scrollY / windowHeight )};">
            <img
                alt="Portrait von mir"
                src="/colorful_woman.png"
                class={windowWidth > windowHeight ? "h-full" : "w-full"}
                style="opacity: {(() => {
                    let limit = 1.25;
                    let x = scrollY / windowHeight;
                    let y = limit * 2 - scrollY / windowHeight;
                    return x < limit ? limit : ( y < 0 ? 0 : y );
                })()};"
            />
        </div>
        <div class="absolute z-15 w-full h-screen overflow-hidden p-16 flex_col_center">
            <div class="mt-4 mb-4 font-logo">
                <H2>Hi, ich bin FENNI.</H2>
            </div>
            <Button onClick={() => {}}>
                <!--
                    Shadow color is yellow-500
                    yellow-200: rgb(254 240 138)
                    yellow-300: rgb(253 224 71)
                    yellow-400: rgb(250 204 21)
                    yellow-500: rgb(234 179 8)
                    yellow-600: rgb(202 138 4)
                -->
                <a
                    href="/fenni/projects"
                    class=
                        "relative z-20
                        my-8 rounded-full
                        h-12 bg-yellow-600 px-6
                        flex_row_center text-white"
                    style="filter: drop-shadow(0px 0px 0px rgb(250 204 21));"
                >
                    <P3>Sieh Projekte</P3>
                </a>
            </Button>
        </div>
    </section>
    <section class="h-screen"></section>
    <section class="h-screen"></section>
    <section class="h-[50vh]"></section>
    <section class="relative z-30 w-full h-screen flex_col_center">
        <div class="w-full p-8 md:w-1/2 md:p-0">
            <P1>
                Ich bin eine freie Künstlerin aus Braunschweig und mache Kunst aller Art:
                Bücher schreiben, Musik aufnehmen, Leute vollabern etc.<br/><br/>
                Auf der "Projekte"-Seite kannst du gerne meine bisherigen Erfolge bewundern.<br/><br/>
                Bei Interesse an Zusammenarbeit oder um einfach mal Hallo zu sagen, schreib mich gerne an;
                die Kontaktdaten findest du unten.
            </P1>
        </div>
    </section>
</main>


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