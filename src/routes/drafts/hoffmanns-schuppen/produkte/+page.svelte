<script lang="ts">
    import '$style';
    import {
        LargeHeading, MediumHeading,
        Section,
    } from "$tavy";
    import { Button } from '$tavy/hoffmanns';
</script>


<div style='font-family: "Roboto Serif"'>
    <Section className='bg-green-950 text-white'>
        <div class='p-16 pb-12 text-center'>
            <MediumHeading>
                Unser faires Produktsortiment
            </MediumHeading>
        </div>
        <div class='flex flex-col gap-8'>
            {#each [
                'g-s-dunkel_ls',
                'g-s-dunkel_ls',
                'g-s-dunkel_ls',
                'g-s-dunkel_ls',
            ] as title}
                <img
                    src="/drafts/hoffmanns-schuppen/ads/{title}.png"
                    alt="Die Gute Schokolade (Zartbitter)"
                    class='w-full'
                >
            {/each}
        </div>
    </Section>
</div>