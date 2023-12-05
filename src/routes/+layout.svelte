<script lang="ts">
    import { navigating } from '$app/stores';
    import { globalScrollY } from "$state";
    import "$style";
    import { LargeHeading, Page } from '$tavy';
    import { Cursor } from '$tavy/identity';
    import { LegalFooter } from "$tavy/industrial";


    let windowHeight: number;
    let cursor: HTMLElement;
</script>


<svelte:window bind:innerHeight={windowHeight}/>




<main
    on:mousemove={(event) => {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    }}
    on:scroll={(event) => {
        scrollY = event?.currentTarget?.scrollTop;
        globalScrollY.set(event?.currentTarget?.scrollTop);
    }}
    class='relative cursor-none'
>
    {#if navigating}
        <Page>
            <LargeHeading>
                Loading ↺
            </LargeHeading>
        </Page>
    {:else}
        <!-- TODO: Add standard scrollbar effects -->
        <Cursor bindThis={cursor}/>
        <slot/>
        <LegalFooter contactLink='/legal/contact' ppLink='/legal/privacy-policy'/>
    {/if}
</main>