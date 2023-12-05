<script lang="ts">
    import '$style';
    import { SmallParagraph } from '$tavy';
    import { InlineButton } from '$tavy/industrial';

    export let inverted = false;
    export let onClick: any;
</script>


<InlineButton inverted={inverted} onClick={onClick}>
    <SmallParagraph>
        <slot/>
    </SmallParagraph>
</InlineButton>