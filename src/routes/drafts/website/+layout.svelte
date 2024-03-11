<script lang="ts">
    import { page } from '$app/stores';
    import { globalScrollY } from "$state";
    import "$style";
    import {
        SmallHeading,
        RawButton,
        InlineButton,
        Button,
    } from '$tavy';
  import SmallParagraph from '$tavy/main/text/paragraphs/SmallParagraph.svelte';


    let windowHeight: number;

    let scrollDependentClass = 'translate-y-0';
    let menuExpanded = false;

    const routes = $page.url.href.split('/').slice(3);
    globalScrollY.subscribe(
        (value) => scrollDependentClass =
            value === 0 &&
            routes.length === 2 && routes[0] === 'drafts' && routes[1] === 'website'
            ? '-translate-y-16'
            : 'translate-y-0',
    );
</script>


<svelte:window bind:innerHeight={windowHeight}/>




<main class='lowercase'>
    <div
        class=
        'transition duration-medium fixed z-40 {scrollDependentClass}
        bg-background border-b border-primary w-full h-16
        px-8 flex justify-between items-center'
    >
        <div class='w-28'>
            <InlineButton invisible onClick={() => menuExpanded = !menuExpanded}>
                {menuExpanded ? 'close' : 'menu'}
            </InlineButton>
        </div>
        <RawButton onClick={() => window.location.href = '/drafts/website'}>
            <img
                src="/images/logos/t-r_logo.svg"
                alt="Logo"
                class='h-[3.75rem]'
            >
        </RawButton>
        <div class='w-28 flex justify-end'>
            <InlineButton invisible onClick={() => window.location.href = 'https://buymeacoffee.com/taavirubenhagen'}>
                support me
            </InlineButton>
        </div>
    </div>
    <div
        class=
        'transition duration-long fixed z-30 {menuExpanded ? '-translate-x-0' : '-translate-x-full'}
        w-full h-full background p-8 pt-24 flex flex-col items-start gap-1'
    >
        {#each [
            ['home', '/drafts/website'],
            ['services', '/drafts/website'],
            ['shop', '/shop/dropshipping'],
            ['about', '/drafts/website'],
        ] as e}
            <RawButton onClick={() => window.location.href = e[1]}>
                <SmallHeading>{e[0]}</SmallHeading>
            </RawButton>
        {/each}
    </div>
    <slot/>
    <footer class='p-16 primary flex flex-col gap-16 normal-case'>
        <Button inverted onClick={() => window.location.href = 'https://instagram.com/taavirubenhagen'}>
            say hello
        </Button>
        <SmallParagraph>
            Taavi Rübenhagen<br/>
            Pothof 9d<br/>
            38122 Braunschweig, Germany<br/>
        </SmallParagraph>
    </footer>
</main>