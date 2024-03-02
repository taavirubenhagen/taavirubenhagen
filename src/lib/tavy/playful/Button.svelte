<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        Icon,
        RawButton,
    } from '$tavy';

    export let secondary = false;
    export let openInNew = false;
    export let next = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class=
        'rounded-lg h-12 px-4
        {secondary ? 'bg-green-300 text-black' : 'bg-green-900 text-white'}
        center_row font-body'
    >
        <SmallParagraph>
            <slot/>
            {#if openInNew}
                <Icon name="open-new-window"/>
            {:else if next}
                <Icon name="arrow-right"/>
            {/if}
        </SmallParagraph>
    </div>
</RawButton>