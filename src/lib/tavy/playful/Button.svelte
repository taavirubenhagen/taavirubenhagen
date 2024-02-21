<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        Icon,
        RawButton,
    } from '$tavy';

    export let openInNew = false;
    export let next = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class='rounded-lg h-12 px-4 bg-red-700 center_row text-white'>
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