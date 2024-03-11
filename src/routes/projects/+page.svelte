<script lang="ts">
    import '$style';
    import { Icon, Section } from '$tavy';
    import { Button, NestedButton, ButtonSeperator } from '$tavy/industrial';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<Section className='p-8 flex flex-col justify-center items-stretch'>
    <Button openInNew onClick={() => window.location.href = '/drafts/hoffmanns-schuppen'}>Hoffmann's Schuppen</Button>
    <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://fenni.me'}>FENNIs Website</Button>
    <Button next borderClass='border-t-0' onClick={() => window.location.href = '/drafts/website'}>
        Personal Website
    </Button>
    <ButtonSeperator/>
    <NestedButton title='Presenter' buttonCount={3}>
        <Button onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'}>
            <Icon name='open-in-new'/>
        </Button>
        <Button borderClass='border-l-0' onClick={() => alert('Coming soon!')}>
            <Icon name='apple-mac'/>
        </Button>
        <Button borderClass='border-l-0' onClick={() => window.location.href = 'https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d'}>
            <Icon name='info-circle'/>
        </Button>
    </NestedButton>
    <NestedButton borderClass='border-t-0' title='Counter'>
        <Button borderClass='border-t-0 w-full' onClick={() => alert('Coming soon!')}>
            <Icon name='open-in-new'/>
        </Button>
        <Button borderClass='border-l-0 border-t-0 w-full' onClick={() => alert('Coming soon!')}>
            <Icon name='apple-mac'/>
        </Button>
    </NestedButton>
</Section>