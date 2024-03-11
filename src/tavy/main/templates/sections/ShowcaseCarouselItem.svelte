<script lang="ts">
    import '$style';
    import {
        RawButton,
        Icon,
    } from '$tavy';
    import {
        SmallParagraph,
    } from '$tavy';

    export let external = false;
    export let title = '';
    export let target = '';
    export let src = '';

    if (title === '') {
        title = 'Showcase Item';
    }
    if (target === '') {
        target = src;
    }
    if (target === '') {
        external = false;
    }
    console.log(src);

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>


<RawButton onClick={() => {window.location.href = 'https://' + target}}>
    <div
        class=
            'relative shadow rounded-2xl h-32
            {external ? '' : 'bg-black'} aspect-video normal-case'
    >
        {#if external}
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
        {/if}
        <div
            class=
                'absolute
                {external ? 'bottom-4' : 'top-0 h-full'}
                w-full center_row text-white'
            >
            {#if external}
                <Icon inverted size={20} name='open-in-new'/>
            {:else}
                <SmallParagraph>{title}</SmallParagraph>
            {/if}
        </div>
    </div>
</RawButton>