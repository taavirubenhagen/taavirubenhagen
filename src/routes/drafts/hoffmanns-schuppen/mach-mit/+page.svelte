<script lang="ts">
    import '$style';
    import {
        LargeHeading, MediumHeading,
        Section,
    } from "$tavy";
    import {
        Button,
        TextSection,
    } from '$tavy/hoffmanns';
</script>


<div style='font-family: "Roboto Serif"'>
    <Section className='bg-green-900 text-white'>
        <div class='relative'>
            <img
                src="/drafts/hoffmanns-schuppen/investing.jpg" alt=""
                class="w-full h-screen object-cover brightness-75"
            >
            <div class='absolute bottom-8'>
                <TextSection
                    headerMessage='Investiere direkter als je zuvor ...'
                    bodyMessage="
                        Bei uns kannst du Aktien kaufen,
                        die dich direkt am Erfolg von Hoffmann's Schuppen beteiligen.
                        <br/>
                        Außerdem freuen wir uns über jede*n, die*r bei Hoffmann's Schuppen mitarbeiten möchte.
                        Egal ob Einkauf, Verkauf oder Marketing - dein Einsatz zählt!"
                    primaryButtonTitle='Investiere jetzt'
                    backgroundClick={() => window.location.href = '/drafts/hoffmanns-schuppen/investor-relations'}
                    secondaryButtonTitle='Oder bewirb dich'
                    onSecondaryClick={() => window.location.href = '/drafts/hoffmanns-schuppen/mach-mit'}
                />
            </div>
        </div>
        {#if false}
            <div class='grid grid-cols-2 gap-8'>
                {#each [0, 0, 0, 0] as _}
                    <div class='rounded-2xl w-full h-64 bg-green-200'></div>
                {/each}
            </div>
        {/if}
    </Section>
</div>