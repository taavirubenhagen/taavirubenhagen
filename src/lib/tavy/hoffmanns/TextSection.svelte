<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        MediumHeading,
    } from '$tavy';
    import {
        Button,
    } from '.';

    export let className='';
    export let headerMessage: string;
    export let bodyMessage = '';
    export let primaryButtonTitle: string;
    export let backgroundClick = () => {};
    export let secondaryButtonTitle: string;
    export let onSecondaryClick = () => {};
</script>


<div class='{className} p-8 flex flex-col gap-4'>
    <MediumHeading>
        {headerMessage}
    </MediumHeading>
    {#if bodyMessage}
        <SmallParagraph>
            {@html bodyMessage}
        </SmallParagraph>
    {/if}
    <div></div>
    <div class='flex gap-4'>
        <Button onClick={backgroundClick}>
            {primaryButtonTitle}
        </Button>
        <Button secondary onClick={onSecondaryClick}>
            {secondaryButtonTitle}
        </Button>
    </div>
</div>