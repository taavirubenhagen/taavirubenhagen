<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        MediumParagraph,
        Icon,
        RawButton,
    } from '$tavy';

    export let inverted = false;
    export let nested = false;
    export let emphasized = false;
    export let openInNew = false;
    export let next = false;
    export let download = false;
    export let uniformPadding = false;
    /// Set the border width to 1 on a side you want to merge with another button
    export let borderClass = '';
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="{inverted ? 'invert' : ''} border-2 {borderClass} border-primary">
        <SmallParagraph>
            <div
                class="transition duration-short ease-in
                    h-12 {uniformPadding ? 'w-12' : ''}
                    {emphasized ? '[&:not(:hover)]:invert' : 'hover:invert'} background px-4
                    flex {nested || openInNew || next || download ? 'justify-between' : 'justify-center'} items-center gap-2"
            >
                <slot/>
                {#if nested}
                    <Icon name="plus-circle"/>
                {:else if openInNew}
                    <Icon name="open-in-new"/>
                {:else if next}
                    <Icon name="arrow-forward"/>
                {:else if download}
                    <Icon name="download"/>
                {/if}
            </div>
        </SmallParagraph>
    </div>
</RawButton>