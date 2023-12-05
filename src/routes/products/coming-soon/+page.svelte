<script lang="ts">
    import "$style";
    import {
        SmallParagraph,
        Page,
    } from '$tavy';
    import {
        Button,
    } from '$tavy/industrial/';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<Page withoutRouteIndicator>
    No product yet
</Page>