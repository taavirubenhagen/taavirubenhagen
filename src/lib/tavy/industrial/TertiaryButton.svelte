<script lang="ts">
    import '$style';
    import { SmallParagraph } from '$tavy';
    import { InlineButton } from '$tavy/industrial';

    export let openInNew = false;
    export let inverted = false;
    export let onClick: any;
</script>


<InlineButton openInNew={openInNew} inverted={inverted} onClick={onClick}>
    <SmallParagraph>
        <slot/>
    </SmallParagraph>
</InlineButton>