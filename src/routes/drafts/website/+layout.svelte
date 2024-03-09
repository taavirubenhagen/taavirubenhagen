<script lang="ts">
    import { navigating } from '$app/stores';
    import { globalScrollY } from "$state";
    import "$style";
    import {
        SmallHeading,
        InlineButton,
    } from '$tavy/website';


    let windowHeight: number;

    let scrollDependentClass = '';
    let menuExpanded = false;

    globalScrollY.subscribe(
        (value) => {
            console.log(value);
            scrollDependentClass = value === 0 ? '-translate-y-16' : 'translate-y-0';
        }
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
        <div class='w-24'>
            <InlineButton invisible onClick={() => menuExpanded = !menuExpanded}>
                menu
            </InlineButton>
        </div>
        <img
            src="/images/logos/t-r_logo.svg"
            alt="Logo"
            class='h-[3.75rem]'
        >
        <div class='w-24 flex justify-end'>
            <InlineButton invisible onClick={() => {}}>
                support me
            </InlineButton>
        </div>
    </div>
    <div
        class=
        'transition duration-long fixed z-30 {menuExpanded ? '-translate-x-0' : '-translate-x-full'}
        w-full h-full background p-8 pt-24 flex flex-col gap-1'
    >
        {#each [
            'home',
            'design',
            'software',
            'politiucs',
            'contact',
            'support me',
        ] as e}
            <SmallHeading>{e}</SmallHeading>
        {/each}
    </div>
    <slot/>