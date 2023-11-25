<script lang="ts">
    import "$style";
    import {
        SmallParagraph, MediumParagraph,
    } from '$tavy';
    import {
        Button, ButtonSeperator,
    } from '$tavy/industrial/';

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<MediumParagraph>
    <main class="relative center_col" style='height: {windowHeight}px;'>
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
            <ButtonSeperator/>
            <Button onClick={() => window.location.href = '/main/privacy-policy'}>Privacy Policy</Button>
            <Button borderClass='border-t-0' onClick={() => window.location.href = '/main/contact'}>Contact</Button>
        </div>
        <div class='absolute bottom-8 px-8 text-center'>
            <SmallParagraph>
                As an Amazon Associate I [will] earn from qualifying purchases.
            </SmallParagraph>
        </div>
    </main>
</MediumParagraph>