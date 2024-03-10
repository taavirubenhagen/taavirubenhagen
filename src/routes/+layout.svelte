<script lang="ts">
    import { page, navigating } from '$app/stores';
    import { cursorPosition, globalScrollY } from "$state";
    import "$style";
    import { Section, LargeHeading } from "$tavy";
    import { Cursor } from '$tavy';
    import { LegalFooter } from "$tavy/industrial";


    let windowHeight: number;

    const routes = $page.url.href.split('/').slice(3);
    const legalFooterVisible = !(
        routes.includes('hoffmanns-schuppen') ||
        routes.includes('website')
    );
</script>


<svelte:window bind:innerHeight={windowHeight}/>




<main
    on:mousemove={(event) => $cursorPosition = [event.clientX, event.clientY]}
    on:scroll={(event) => {
        scrollY = event?.currentTarget?.scrollTop;
        globalScrollY.set(event?.currentTarget?.scrollTop);
    }}
    class='relative h-screen overflow-x-hidden cursor-none'
>
    <Cursor/>
    {#if $navigating}
        <Section>
            <LargeHeading>
                Loading ↺
            </LargeHeading>
        </Section>
    {:else}
        <!-- TODO: Add standard scrollbar effects -->
        <slot/>
    {/if}
    {#if legalFooterVisible}
        <LegalFooter contactLink='/legal/contact' ppLink='/legal/privacy-policy'/>
    {/if}
</main>