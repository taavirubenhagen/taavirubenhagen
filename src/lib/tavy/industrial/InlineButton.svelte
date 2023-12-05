<script lang="ts">
    import '$style';
    import { Icon, RawButton } from '$tavy';

    export let openInNew = false;
    export let inverted = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="{inverted ? 'invert' : ''} flex gap-2 underline underline-offset-4 capitalize">
        <slot/>
        {#if openInNew}
            <Icon name="open-new-window"/>
        {/if}
    </div>
</RawButton>