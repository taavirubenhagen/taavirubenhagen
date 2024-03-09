<script lang="ts">
    import '$style';
    import {
        RawButton,
        Icon, Section,
        LargeHeading, SmallHeading,
        LargeParagraph, MediumParagraph,
    } from '$tavy';
    import { Button, NestedButton, ButtonSeperator } from '$tavy/industrial';

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<meta http-equiv="Refresh" content="0; url='https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'" />
<Section className='primary font-[Dongle]'>
    <div class='p-8 md:p-16'>
        <LargeHeading>Weil wir Fortschritt brauchen.</LargeHeading>
        <div class='h-8'></div>
        <LargeParagraph>
            Vom 26.2. - 8.3. ist in Braunschweig Jugendparlamentswahl.
            Eine Stimme für mich (Listenplatz 69) ist eine Stimme für realen und anhaltenden politischen Einfluss der Braunschweiger Jugend.
        </LargeParagraph>
        <div style='height: {4 + 3 + 3 + 3 + 4}rem;'></div>
    </div>
    <div class='fixed bottom-0 w-full bg-gradient-to-t from-black via-black to-transparent p-8 md:p-16 flex flex-col items-stretch gap-8'>
        <Button inverted openInNew onClick={() => window.location.href = 'https://thezukunft.de/jugendparlament'}>
            <LargeParagraph>
                Jetzt abstimmen
            </LargeParagraph>
        </Button>
        <Button inverted openInNew onClick={() => window.location.href = 'https://www.instagram.com/taavirubenhagen'}>
            <LargeParagraph>
                Folge mir
            </LargeParagraph>
        </Button>
    </div>
</Section>