<script lang="ts">
    import { navigating } from '$app/stores';
    import { cursorPosition, globalScrollY } from "$state";
    import "$style";
    import { Page, LargeHeading } from "$tavy";
    import { Cursor } from '$tavy/identity';
    import { LegalFooter } from "$tavy/industrial";


    let windowHeight: number;
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
        <Page>
            <LargeHeading>
                Loading ↺
            </LargeHeading>
        </Page>
    {:else}
        <!-- TODO: Add standard scrollbar effects -->
        <slot/>
    {/if}
    <LegalFooter contactLink='/legal/contact' ppLink='/legal/privacy-policy'/>
</main>