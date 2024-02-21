<script lang="ts">
    import '$style';
    import {
        MediumParagraph,
        Icon,
        RawButton,
    } from '$tavy';

    export let inverted = false;
    export let nested = false;
    export let openInNew = false;
    export let next = false;
    export let download = false;
    export let uniformPadding = false;
    /// Set the border width to 1 on a side you want to merge with another button
    export let borderClass = '';
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="{inverted ? 'invert' : ''} border-2 {borderClass} border-onBackground">
        <MediumParagraph>
            <div
                class="transition duration-200 ease-in
                    h-12 {uniformPadding ? 'w-12' : ''}
                    hover:invert bg-background text-onBackground px-4
                    flex {nested || openInNew || next ? 'justify-between' : 'justify-center'} items-center gap-2"
            >
                <slot/>
                {#if nested}
                    <Icon name="plus-circle"/>
                {:else if openInNew}
                    <Icon name="open-new-window"/>
                {:else if next}
                    <Icon name="arrow-right"/>
                {:else if download}
                    <Icon name="download"/>
                {/if}
            </div>
        </MediumParagraph>
    </div>
</RawButton>