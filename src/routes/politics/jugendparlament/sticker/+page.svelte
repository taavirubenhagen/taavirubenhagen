<script lang="ts">
    import LargeParagraph from '$src/lib/tavy/general/text/paragraphs/large_paragraph.svelte';
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


<Section className='p-16 bg-black font-[Dongle] text-white'>
    <LargeHeading>Weil wir Fortschritt brauchen.</LargeHeading>
    <div class='h-8'></div>
    <LargeParagraph>
        Vom 26.2. - 8.3. ist in Braunschweig Jugendparlamentswahl.
        Eine Stimme für mich ist eine Stimme für realen und anhaltenden politischen Einfluss der Braunschweiger Jugend.
        Überdies inkludieren die Zielsetzungen meines Wahlprogramms die Konzeption von Legislatur,
        die das Jugendparlament zu einer dauerhaften Senkung
        des durchschnittlichen Preisniveaus für Döner auf einen Wert von 3,50€ (±0,50€, inflationsbereinigt) befähigt
        und zum frühestmöglichen Zeitpunkt mit Wirkung für alle Braunschweiger Minderjährigen zu implementieren ist.
    </LargeParagraph>
    <Button openInNew onClick={() => window.location.href = 'https://www.instagram.com/taavirubenhagen'}></Button>
</Section>