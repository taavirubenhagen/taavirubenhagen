<script lang="ts">
    import { page } from '$app/stores';
    import { globalScrollY } from "$state";
    import "$style";
    import {
        RawButton,
    } from '$tavy';
    import {
        SmallHeading,
        InlineButton,
    } from '$tavy/website';


    let windowHeight: number;

    let scrollDependentClass = '';
    let menuExpanded = false;

    const routes = $page.url.href.split('/').slice(3);
    console.log(routes);

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
            ['presenter', '/drafts/website'],
            ['design', '/drafts/website'],
            ['about', '/drafts/website'],
            ['contact', '/drafts/website/contact'],
        ] as e}
            <RawButton onClick={() => window.location.href = e[1]}>
                <SmallHeading>{e[0]}</SmallHeading>
            </RawButton>
        {/each}
        <!--<div
            class="absolute bottom-8 flex justify-between"
            style='width: calc(100% - 4rem);'
        >
            <InlineButton onClick={() => {}}>Instagram</InlineButton>
            <InlineButton onClick={() => {}}>TikTok</InlineButton>
            <InlineButton onClick={() => {}}>YouTube</InlineButton>
            <InlineButton onClick={() => {}}>GitHub</InlineButton>
        </div>-->
    </div>
    <slot/>
</main>