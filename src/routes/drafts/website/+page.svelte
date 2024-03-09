<script lang="ts">
    import '$style';
    import {
        Icon,
    } from "$tavy";
    import {
        SmallParagraph,
        SmallHeading,
        ShowcaseCarouselItem,
        ShowcaseCarousel,
        Section,
    } from "$tavy/website";
    import {
        InlineButton,
        TertiaryButton,
        Button,
    } from '$tavy/industrial';


    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

<Section className='relative p-16 pb-24 primary center_col gap-8 text-center'>
    <SmallHeading>
        Independent
        {#each [
            'designer',
            'developer',
            'artist',
            'activist',
            'entrepreneur',
        ] as e}
            {#if e === 'designer'}
                <InlineButton onClick={() => {}}>
                    {e},
                </InlineButton>
            {:else if e === 'activist'}
                &nbsp;
                <InlineButton onClick={() => {}}>
                    {e}
                </InlineButton>
            {:else if e === 'entrepreneur'}
                &nbsp;and
                <InlineButton onClick={() => {}}>
                    {e}.
                </InlineButton>
            {:else}
                &nbsp;
                <InlineButton onClick={() => {}}>
                    {e},
                </InlineButton>
            {/if}
        {/each}
    </SmallHeading>
    <div class='absolute bottom-8'>
        <SmallParagraph>Scroll.</SmallParagraph>
    </div>
</Section>
<Section className='p-8 pt-16'>
    <ShowcaseCarousel title={'apps'}>
        <ShowcaseCarouselItem
            target='play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'
            title='Presentation Master 2'
        />
        <ShowcaseCarouselItem
            target='play.google.com/store/apps/details?id=fluent.simple.counter'
            title='Simple Counter'
        />
        <ShowcaseCarouselItem src='' title='Outfyx'/>
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'websites'}>
        <ShowcaseCarouselItem
            website
            src='rubenhagen.com/drafts/hoffmanns-schuppen'
            title='hoffmanns-schuppen.com'
        />
        <ShowcaseCarouselItem
            website
            src='fenni.me'
            title='fenni.me'
        />
        <ShowcaseCarouselItem
            website
            src='rubenhagen.com'
            title='rubenhagen.com'
        />
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'graphic design'}>
        <ShowcaseCarouselItem
            target='play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'
            title='Presentation Master 2'
        />
        <ShowcaseCarouselItem src='' title={'Hoffmann\'s Schuppen'}/>
        <ShowcaseCarouselItem src='' title='JuPa Campaign'/>
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'design system'}>
        <ShowcaseCarouselItem src='' title='Tavy Design System'/>
        <ShowcaseCarouselItem src='' title='Tavy Icons'/>
        <ShowcaseCarouselItem src='' title='PM2 Design System'/>
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'other businesses'}>
        <ShowcaseCarouselItem src='' title={'Hoffmann\'s Schuppen'}/>
        <ShowcaseCarouselItem src='' title='Affiliate Marketing'/>
        <ShowcaseCarouselItem src='' title='Content Creation'/>
    </ShowcaseCarousel>
    <div class='rounded-2xl w-full h-16 primary flex justify-evenly items-center'>
        {#each ['instagram', 'tiktok', 'youtube', 'github'] as e}
            <Icon name={e} textClass='text-3xl'/>
        {/each}
    </div>
    <div class='h-16'></div>
</Section>