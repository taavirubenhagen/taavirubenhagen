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
    <a href=>
        <Button onClick={() => window.location.href = 'https://mailto:taavi.ruebenhagen@gmail.com'}>
            e-mail me
        </Button>
    </a>
    <Button onClick={() => window.location.href = 'https://instagram.com/taavirubenhagen'}>
   