<script lang="ts">
    import "$style";
    import {
        SmallParagraph,
        Page,
    } from '$tavy';
    import {
        Button,
    } from '$tavy/industrial/';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<Page withoutRouteIndicator>
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
</Page>