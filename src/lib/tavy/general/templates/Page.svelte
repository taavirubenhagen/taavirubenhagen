<script lang="ts">
    import '$style';
    import { Section, RouteIndicator } from "$tavy";

    export let withoutRouteIndicator = false;
</script>


<Section className='p-8 { withoutRouteIndicator ? '' : 'pt-24' } center_col'>
    {#if !withoutRouteIndicator && false}
        <RouteIndicator/>
    {/if}
    <div class='flex flex-col justify-center items-stretch'>
        <slot/>
    </div>
</Section>