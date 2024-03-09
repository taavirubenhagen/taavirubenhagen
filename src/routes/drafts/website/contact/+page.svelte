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
    } from "$tavy/website";


    let windowWidth: number;
    let windowHeight: number;
</script>


<Section className='p-8 flex flex-col justify-center items-stretch gap-4'>
    <!--TODO: Fix-->
    <Button borderClass='center_row' onClick={() => {}}>
        <a href='mailto:taavi.ruebenhagen@gmail.com' class='w-full'>
            e-mail me
        </a>
    </Button>
    <Button onClick={() => window.location.href = 'https://instagram.com/taavirubenhagen'}>
        dm me
    </Button>
</Section>