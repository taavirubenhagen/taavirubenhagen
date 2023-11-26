<script lang="ts">
    import '$style';

    export let className: string;

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight} />


<main class={className} style='min-height: {windowHeight}px;'>
    <slot/>
</main>