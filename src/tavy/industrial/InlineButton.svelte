<script lang="ts">
    import '$style';
    import { Icon, RawButton } from '$tavy';

    export let openInNew = false;
    export let inverted = false;
    //export let punctuationMark: string | null = null;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="inline gap-2 underline underline-offset-4">
        <slot/>
        {#if openInNew}
            <Icon inverted={inverted} name="open-in-new"/>
        {/if}
    </div>
</RawButton>