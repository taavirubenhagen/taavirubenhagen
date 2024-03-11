<meta http-equiv="Refresh" content="0; url='/drafts/website"/>


<script lang="ts">
    import '$style';
    import { Section } from "$tavy";
    import { Button, ButtonSeperator } from '$tavy/industrial';
</script>


<Section className='p-8 flex flex-col justify-center items-stretch'>
    <Button next onClick={() => window.location.href = '/drafts/website'}>
        Website (Unfinished)
    </Button>
    <Button next borderClass='border-t-0' onClick={() => window.location.href = '/projects'}>
        Projects
    </Button>
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