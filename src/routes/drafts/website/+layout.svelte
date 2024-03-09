<script lang="ts">
    import { navigating } from '$app/stores';
    import { globalScrollY } from "$state";
    import "$style";
    import {
        InlineButton,
    } from '$tavy/website';


    let windowHeight: number;

    let scrollDependentClass = '';
    let menuToggleClass = '';

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
        class="
            transition duration-medium fixed z-40 top-0 {scrollDependentClass}
            bg-background border-b border-primary w-full h-16
            px-8 flex justify-between items-center"
    >
        <div class='w-24'>
            <InlineButton invisible onClick={() => {}}>
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
    <div class='w-full h-full background'></div>
    <slot/>
</ma