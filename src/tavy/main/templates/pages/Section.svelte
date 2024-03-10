<script lang="ts">
    import '$style';

    export let className = '';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight}/>


<div class={className} style='min-height: {windowHeight}px;'>
    <slot/>
</div>