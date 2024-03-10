<script lang="ts">
    import '$style';
    import { Section } from "$tavy";
    import { Button, ButtonSeperator } from '$tavy/industrial';
</script>


<Section>
    <Button next onClick={() => window.location.href = '/'}>Personal Website</Button>
    <Button next borderClass='border-t-0' onClick={() => window.location.href = '/projects'}>Projects</Button>
    <Button next borderClass='border-t-0' onClick={() => window.location.href = '/shop/dropshipping'}>Product Shop</Button>
    <ButtonSeperator/>
    <Button openInNew onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'}>
        Presenter (Android)
    </Button>
    <Button openInNew borderClass='border-t-0' onClick={() => alert('Coming soon!')}>Presenter (iOS)</Button>
    <ButtonSeperator/>
    <Button openInNew onClick={() => window.location.href = 'https://www.instagram.com/taavirubenhagen'}>
        @taavirubenhagen
    </Button>
    <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://www.buymeacoffee.com/taavirubenhagen'}>
        Buy Me a Coffee
    </Button>
    <ButtonSeperator/>
    <Button next onClick={() => window.location.href = '/admin'}>Admin</Button>
</Section>