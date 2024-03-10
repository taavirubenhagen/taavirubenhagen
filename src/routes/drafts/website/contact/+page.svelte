<script lang="ts">
    import '$style';
    import {
        Icon,
    } from "$tavy";
  import SmallHeading from '$tavy/general/text/headings/SmallHeading.svelte';
    import {
        Button,
        ShowcaseCarouselItem,
        ShowcaseCarousel,
        Section,
    } from "$tavy";


    let windowWidth: number;
    let windowHeight: number;
</script>


<Section className='p-8 flex flex-col justify-center items-stretch gap-4'>
    <Button onClick={() => {}}>
        <a href='mailto:taavi.ruebenhagen@gmail.com' class='w-full'>
            e-mail me
        </a>
    </Button>
    <Button onClick={() => window.location.href = 'https://instagram.com/taavirubenhagen'}>
        dm me
    </Button>
    <!--TODO-->
    <Button onClick={() => window.location.href = '/drafts/website/legal/imprint'}>
        imprint
    </Button>
</Section>