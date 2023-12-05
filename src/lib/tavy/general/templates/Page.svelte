<script lang="ts">
    import '$style';
    import { Section, RouteIndicator } from "$tavy";

    export let withRouteIndicator = false;
</script>


<Section className='p-8 { withRouteIndicator ? 'pt-24' : '' } center_col'>
    {#if withRouteIndicator}
        <RouteIndicator/>
    {/if}
    <div class='flex flex-col justify-center items-stretch'>
        <slot/>
    </div>
</Section>