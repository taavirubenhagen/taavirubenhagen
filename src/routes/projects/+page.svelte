<script lang="ts">
    import '$style';
    import { Button, ButtonSeperator } from '$tavy/industrial';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<main class='p-8 center_col' style='min-height: {windowHeight}px;'>
    <div class='flex flex-col justify-center items-stretch'>
        <Button openInNew onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'}>
            Presenter (Android)
        </Button>
        <Button openInNew borderClass='border-t-0' onClick={() => alert('Coming soon!')}>Presenter (iOS)</Button>
        <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d'}>
            Presenter - Info
        </Button>
        <ButtonSeperator/>
        <Button openInNew onClick={() => window.location.href = 'https://fenni.me'}>FENNIs Website</Button>
        <Button next borderClass='border-t-0' onClick={() => window.location.href = '/'}>Personal Website</Button>
        <Button next borderClass='border-t-0' onClick={() => window.location.href = '/products'}>Product Shop</Button>
    </div>
</main>