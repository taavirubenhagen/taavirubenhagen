<script lang="ts">
    import '$style';
    import { MediumParagraph, Icon } from '$tavy';
    import { Button } from '.';

    export let inverted = false;
    export let borderClass = '';
    export let title: string;
    export let buttonCount = 2;

    let expanded = false;
</script>


{#if expanded}
    <div class='flex'>
        <div class='w-full grid' style='grid-template-columns: repeat({buttonCount}, minmax(0, 1fr));'>
            <slot/>
        </div>
        <Button inverted={inverted} uniformPadding borderClass='border-l-0 {borderClass}' onClick={() => expanded = false}>
            <!--TODO: Center icon-->
            <Icon name="minus-circle"/>
        </Button>
    </div>
{:else}
    <Button inverted={inverted} nested borderClass={borderClass} onClick={() => expanded = true}>{title}</Button>
{/if}