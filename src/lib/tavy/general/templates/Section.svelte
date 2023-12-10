<script lang="ts">
    import '$style';

    export let className: string;

    let windowWidth: number;
    let windowHeight: number;
</script>


<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>


<main class={className} style='width: {windowWidth}px; min-height: {windowHeight}px;'>
    <slot/>
</main>