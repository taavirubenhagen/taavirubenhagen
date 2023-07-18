<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        Icon,
        H1, H2,
        P1, P2, P3,
        B,
        Button,
    } from '../../lib';

    let windowWidth: number;
    let windowHeight: number;
    
    const postTitle = "Offenes Kunstprojekt";
    const imageUrls = [
        "https://www.blitzrechner.de/wp-content/uploads/2015/05/kunstwerke-preise.jpg",
        "https://www.sueddeutsche.de/image/sz.1.5914567/1200x675?v=1686329819",
        "https://www.ahlen.de/fileadmin/Fotos_ab_Mai_2020/Bildung_Kultur/paint-brush-Pixabay.jpg",
        "https://www.akki-ev.de/wp-content/uploads/2014/04/Akki-Kunstcamp-2014.jpg",
        "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg",
        "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg",
    ];
</script>


<svelte:window bind:innerWidth={windowWidth} bind:outerHeight={windowHeight} />


<img src="/centered_explosion.png" alt="Color Explosion" class="fixed -z-5 opacity-0 w-full">
<main class="relative z-0 w-full bg-gradient-to-br from-transparent to-transparent">
    <div class="mt-44 flex_col_center">
        <div class="flex gap-4">
            {#each imageUrls as url, i}
                <div class="w-64 h-64">
                    <img src={url} alt="Image {i}" class="object-cover rounded-lg h-full"/>
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full p-16 pt-32 flex flex-wrap text-black font-logo">
        {#each postTitle.split("") as letter}
            <H1>{letter}</H1>
        {/each}
    </div>
    <div class="p-16 text-black">
        <P2>
            Bei meinem offenen Kunstprojekt habe ich den Park mit Sachen vollgestellt und Leute in Kontakt mit ihrer künstlerischen Seite gebracht.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </P2>
    </div>
</main>