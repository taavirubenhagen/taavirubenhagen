<script lang="ts">
    import '$style';
    import {
        RawButton,
        Icon,
    } from '$tavy';
    import {
        SmallParagraph,
    } from '$tavy/website';

    export let website = false;
    export let title = '';
    export let src = '';
    export let target = '';

    if (title === '') {
        title = 'Showcase Item';
    }
    if (target === '') {
        target = src;
    }

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>


<RawButton onClick={() => {window.location.href = 'https://' + target}}>
    <div class='relative shadow rounded-2xl h-32 aspect-video normal-case'>
        {#if website}
            <iframe
                title={title}
                src='https://{src}'
                height='{windowHeight}px'
                frameborder={0}
                class=
                'origin-top-left absolute top-0 pointer-events-none
                rounded-full aspect-video brightness-75'
                style='
                transform: scale({128 / windowHeight});
                border-radius: {1 * windowHeight / 128}rem;'
            ></iframe>
        {:else if src !== ''}
            <img src={src} alt={title}>
        {:else}
            <div class='h-full p-4 center_col text-center'>
                <SmallParagraph>{title}</SmallParagraph>
            </div>
        {/if}
        <div class='absolute bottom-4 w-full center_row {src === '' ? '' : 'text-white'}'>
            <Icon name='open-new-window' textClass='scale-150'/>
        </div>
        <!--<div class="h-2"></div>
        <SmallParagraph>{title}</SmallParagraph>-->
    </div>
</RawButton>