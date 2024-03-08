<script lang="ts">
    import { navigating } from '$app/stores';
    import { globalScrollY } from "$state";
    import "$style";
    import { Page, LargeHeading } from "$tavy";
    import { Cursor } from '$tavy/identity';
    import { LegalFooter } from "$tavy/industrial";


    let windowHeight: number;

    let scrollDependentClass = '';

    globalScrollY.subscribe(
        (value) => scrollDependentClass = value === 0 ? '' : 'bg-background',
    );
</script>


<svelte:window bind:innerHeight={windowHeight}/>




<main>
    <div class="fixed z-40 top-0 w-full h-16 {scrollDependentClass} border-b border-primary"></div>
    <slot/>
</main>