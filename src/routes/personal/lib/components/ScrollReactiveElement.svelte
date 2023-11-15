<!--Place on the very end of layout to ensure it covers everything-->

<script lang="ts">
    import '$style'

    export let condition = true;
    export let wrapperClass = "";
</script>


<div class="{wrapperClass} fixed z-5 w-screen h-screen overflow-hidden">
    {#if condition}
        <slot/>
    {/if}
</div>