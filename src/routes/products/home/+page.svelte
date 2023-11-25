<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import "$style";
    import {
        SmallParagraph,
        MediumParagraph,
    } from '$tavy';
    import {
        Button,
    } from '$tavy/industrial/';

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<MediumParagraph>
    <main class="relative center_col">
        <div class='flex flex-col justify-center items-stretch'>
            <Button openInNew onClick={() => window.location.href = "/products/home"}>
                Stone Key Holder
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Inkless Printer
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Bottle Holder
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Humping Dog Charger
            </Button>
        </div>
        <div class='absolute bottom-8'>
            <SmallParagraph>
                As an Amazon Associate I earn from qualifying purchases.
            </SmallParagraph>
        </div>
    </main>
</MediumParagraph>