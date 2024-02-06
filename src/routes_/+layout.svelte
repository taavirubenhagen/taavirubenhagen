<script lang="ts">
    //import { navigating } from '$app/stores';
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
    on:scroll={(event) => {
        scrollY = event?.currentTarget?.scrollTop;
        globalScrollY.set(event?.currentTarget?.scrollTop);
    }}
    class='relative cursor-none'
>
    <Cursor bindThis={cursor}/>
    <!--{#if !navigating}
        <Page>
            <LargeHeading>
                Loading ↺
            </LargeHeading>
        </Page>
    {:else}-->
        <!-- TODO: Add standard scrollbar effects -->
        <slot/>
    <!--{/if}-->
    <LegalFooter contactLink='/legal/contact' ppLink='/legal/privacy-policy'/>
</main>