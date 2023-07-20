<script lang="ts">
    import { cursorButtonHover } from "../../state";
    import '$style'

    export let onClick: any;
</script>


<button
    on:mouseenter={() => cursorButtonHover.set(true)}
    on:mouseleave={() => cursorButtonHover.set(false)}
    on:click={onClick}
>
    <slot/>
</button>