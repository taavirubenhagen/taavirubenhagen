<script lang="ts">
    import "$style";
    import {
        SmallParagraph,
        Section,
    } from '$tavy';
    import {
        Button,
    } from '$tavy/industrial/';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<Section>
    No product yet
</Section>