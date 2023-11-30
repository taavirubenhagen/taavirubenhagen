<script lang="ts">
    import '$style';
    import {
        MediumParagraph,
        Icon,
        RawButton,
    } from '$tavy';

    export let inverted = false;
    export let openInNew = false;
    export let next = false;
    export let uniformPadding = false;
    /// Set the border width to 1 on a side you want to merge with another button
    export let borderClass = '';
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="{inverted ? 'invert' : ''} border-2 {borderClass} border-onBackground">
        <MediumParagraph>
            <div class="transition duration-200 ease-in hover:invert bg-background text-onBackground {uniformPadding ? 'px-2' : 'px-4'} py-2 flex {openInNew || next ? 'justify-between' : 'justify-center'} items-center gap-2">
                <slot/>
                {#if openInNew}
                    <Icon name="open-new-window"/>
                {:else if next}
                    <Icon name="arrow-right"/>
                {/if}
            </div>
        </MediumParagraph>
    </div>
</RawButton>