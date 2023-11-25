<script lang="ts">
    import '$style';
    import {
        MediumParagraph,
        MediumSubtitle, LargeSubtitle,
        SmallHeading, MediumHeading, LargeHeading,
        Icon,
        InlineParagraphButton,
    } from '$tavy';
    import { Button } from '$tavy/industrial';
</script>




<main class='h-screen p-8 center_col'>
    <div class='flex flex-col justify-center items-stretch'>
        <Button openInNew onClick={() => window.location.href = '/terminal'}>Terminal Website</Button>
        <Button borderClass='pointer-events-none invert border-t-0 border-background text-background' onClick={() => {}}>_</Button>
        <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'}>
            Presenter (Android)
        </Button>
        <Button openInNew borderClass='border-t-0' onClick={() => alert('Coming soon!')}>Presenter (iOS)</Button>
        <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d'}>
            Presenter - Info
        </Button>
        <Button borderClass='pointer-events-none invert border-t-0 border-background text-background' onClick={() => {}}>_</Button>
        <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://www.instagram.com/taavirubenhagen/'}>
            @taavirubenhagen
        </Button>
    </div>
</main>