<script lang="ts">
    import "$style";
    import {
        SmallParagraph, MediumParagraph,
    } from '$tavy';
    import {
        Button, ButtonSeperator,
    } from '$tavy/industrial/';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<MediumParagraph>
    <main class="relative center_col" style='height: {windowHeight}px;'>
        <div class='flex flex-col justify-center items-stretch'>
            <Button openInNew onClick={() => window.location.href = "/products/home"}>
                The Affiliate
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Links Will
            </Button>
            <Button openInNew onClick={() => window.location.href = "/products/home"} borderClass='border-t-0'>
                Be Put Here
            </Button>
        </div>
        <div class='absolute bottom-8 px-8 text-center'>
            <SmallParagraph>
                <!--As an Amazon Associate I [will] earn from qualifying purchases.-->
            </SmallParagraph>
        </div>
    </main>
</MediumParagraph>