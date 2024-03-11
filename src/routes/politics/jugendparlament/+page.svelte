<script lang="ts">
    import '$style';
    import {
        RawButton,
        Icon, Section,
        LargeHeading, SmallHeading,
    } from '$tavy';
    import { Button, NestedButton, ButtonSeperator } from '$tavy/industrial';

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<Section className='bg-black font-[Dongle] center_row'>
    <img
        src="/politics/jugendparlament/wahlplakat_hochformat.png"
        alt="Jung, dynamisch, zielstrebig. Dein Kandidat für das Braunschweiger Jugendparlament."
        class='max-h-screen'
    >
    <div
        class='absolute bottom-20 flex justify-between text-5xl'
        style='width: {( windowWidth > windowHeight ? windowHeight / ( 16/9 ) : windowWidth ) - 64}px;'
    >
        {#each [
            ['open-in-new', 'https://thezukunft.de/'],
            ['home', '/'],
            ['instagram', 'https://www.instagram.com/taavirubenhagen'],
        ] as data}
            <RawButton onClick={() => window.location.href = data[1]}>
                <div class='backdrop-blur-sm rounded-2xl bg-white bg-opacity-25 p-4 pb-0 aspect-square'>
                    <Icon name={data[0]}/>
                </div>
            </RawButton>
        {/each}
    </div>
</Section>