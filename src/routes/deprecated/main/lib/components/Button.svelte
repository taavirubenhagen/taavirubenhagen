<script lang="ts">
    import { buttonHover } from "$state";
    import '$style'

    export let onClick: any;
</script>


<button
    on:mouseenter={() => buttonHover.set(true)}
    on:mouseleave={() => buttonHover.set(false)}
    on:click={onClick}
    class="relative z-20"
>
    <slot/>
</button>