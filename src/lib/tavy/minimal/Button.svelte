<script lang="ts">
    import '$style';

    import { Icon, RawButton } from '$tavy';

    export let openInNew = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <t class="underline underline-offset-8">
        <slot/>
        {#if openInNew}
            <Icon name="open-new-window" textClass="relative top-2"/>
        {/if}
    </t>
</RawButton>