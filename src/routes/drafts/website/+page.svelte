<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        SmallHeading,
        Icon,
        RawButton,
        ShowcaseCarouselItem,
        ShowcaseCarousel,
        Section,
    } from "$tavy";


    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>


<Section className='relative p-16 pb-24 primary center_col gap-8 text-center'>
    <!--<SmallHeading>
        Independent
        <InlineButton invisible onClick={() => {}}>
            designer,
        </InlineButton>
        &nbsp;
        <InlineButton onClick={() => {}}>
            developer ,
        </InlineButton>
        &nbsp;
        <InlineButton onClick={() => {}}>
            artist,
        </InlineButton>
        &nbsp;
        <InlineButton onClick={() => {}}>
            activist
        </InlineButton>
        &nbsp;and
        <InlineButton onClick={() => {}}>
            entrepreneur.
        </InlineButton>
    </SmallHeading>--><SmallHeading>
        Independent designer, developer, artist, activist and entrepreneur.
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
            external
            src='rubenhagen.com/drafts/hoffmanns-schuppen'
            title='hoffmanns-schuppen.com'
        />
        <ShowcaseCarouselItem
            external
            src='fenni.me'
            title='fenni.me'
        />
        <ShowcaseCarouselItem
            external
            src='rubenhagen.com'
            title='rubenhagen.com'
        />
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'graphic design'}>
        <ShowcaseCarouselItem
            target='play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'
            title='Presentation Master 2'
        />
        <ShowcaseCarouselItem title={'Hoffmann\'s Schuppen'}/>
        <ShowcaseCarouselItem title='JuPa Campaign'/>
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'design system'}>
        <ShowcaseCarouselItem
            target='rubenhagen.com/drafts/website/tavy'
            title='Tavy Design System'
        />
        <ShowcaseCarouselItem
            target='rubenhagen.com/drafts/website/tavy/icons'
            title='Tavy Icons'
        />
        <ShowcaseCarouselItem title='PM2 Design System'/>
    </ShowcaseCarousel>
    <ShowcaseCarousel title={'other businesses'}>
        <ShowcaseCarouselItem title={'Hoffmann\'s Schuppen'}/>
        <ShowcaseCarouselItem title='Affiliate Marketing'/>
        <ShowcaseCarouselItem title='Content Creation'/>
    </ShowcaseCarousel>
    <div class='rounded-2xl w-full h-16 primary flex justify-evenly items-center'>
        {#each ['instagram', 'tiktok', 'youtube', 'not-found'] as e}
        <!--TODO: Make IconButton component-->
            <RawButton onClick={() => alert('Coming soon!')}>
                <Icon inverted name={e} size={28}/>
            </RawButton>
        {/each}
    </div>
    <div class='h-16'></div>
</Section>