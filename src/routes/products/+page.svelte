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


<Page>
    <Button openInNew onClick={() => window.location.href = "https://amzn.eu/d/gZVxnZl"}>
        Stone Key Hider
    </Button>
    <Button openInNew onClick={() => window.location.href = "/products/coming-soon"} borderClass='border-t-0'>
        ...
    </Button>
    <Button openInNew onClick={() => window.location.href = "/products/coming-soon"} borderClass='border-t-0'>
        ...
    </Button>
    <div class='absolute bottom-8 px-8 text-center'>
        <SmallParagraph>
            <!--As an Amazon Associate I [will] earn from qualifying purchases.-->
        </SmallParagraph>
    </div>
</Page>