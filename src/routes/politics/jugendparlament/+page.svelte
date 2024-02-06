<script lang="ts">
    import '$style';
    import { Icon, Section, LargeHeading } from '$tavy';
    import { Button, NestedButton, ButtonSeperator } from '$tavy/industrial';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<Section className='bg-black font-[Dongle] center_row'>
    <img
        src="/politics/jugendparlament/wahlplakat_hochformat.png"
        alt="Jung, dynamisch, zielstrebig. Dein Kandidat für das Braunschweiger Jugendparlament."
        class='max-h-screen'
    >
    <div></div>