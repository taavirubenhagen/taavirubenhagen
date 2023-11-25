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


<svelte:window bind:innerHeight={windowHeight} />


<MediumParagraph>
    <main class="relative h-screen center_col">
        <div class='flex flex-col justify-center items-stretch'>
            <Button openInNew onClick={() => window.location.href = "/products/home"}>
                Here Will The
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Amazon Affiliate
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Links Be
            </Button>
        </div>
        <div class='absolute bottom-8 px-32 text-center'>
            <SmallParagraph>
                As an Amazon Associate I [will] earn from qualifying purchases.
            </SmallParagraph>
        </div>
    </main>
</MediumParagraph>