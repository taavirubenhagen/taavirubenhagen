<script lang="ts">
    import '$style';
    import { Page } from "$tavy";
    import { Button, ButtonSeperator } from '$tavy/industrial';
</script>


<Page>
    <Button next onClick={() => window.location.href = '/projects'}>Projects</Button>
    <ButtonSeperator/>
    <Button openInNew onClick={() => window.location.href = 'https://www.instagram.com/taavirubenhagen'}>
        @taavirubenhagen
    </Button>
    <Button openInNew borderClass='border-t-0' onClick={() => window.location.href = 'https://www.buymeacoffee.com/taavirubenhagen'}>
        Buy Me a Coffee
    </Button>
    <ButtonSeperator/>
    <Button next onClick={() => window.location.href = '/admin'}>Admin</Button>
</Page>