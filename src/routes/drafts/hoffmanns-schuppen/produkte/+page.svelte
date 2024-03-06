<script lang="ts">
    import '$style';
    import {
        LargeHeading, MediumHeading,
        Section,
    } from "$tavy";
    import { Button } from '$tavy/hoffmanns';
</script>


<div style='font-family: "Roboto Serif"'>
    <Section className='bg-green-900 text-white'>
        <div class='relative'>
            <img
                src="/drafts/hoffmanns-schuppen/local_business.jpg" alt=""
                class="w-full h-screen object-cover brightness-75"
            >
            <div class=
                'absolute left-8 bottom-16 md:bottom-0
                md:h-full flex flex-col justify-center gap-8'
            >
                <MediumHeading>
                    Nachhaltig, nützlich, nahbar.<br/>
                    Willkommen bei Hoffmann's Schuppen.
                </MediumHeading>
                <div class='flex gap-4'>
                    <Button onClick={() => window.location.href = '/drafts/hoffmanns-schuppen/produkte'}>
                        Produkte entdecken
                    </Button>
                    <Button secondary onClick={() => window.location.href = '/drafts/hoffmanns-schuppen/mach-mit'}>
                        Mach mit
                    </Button>
                </div>
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