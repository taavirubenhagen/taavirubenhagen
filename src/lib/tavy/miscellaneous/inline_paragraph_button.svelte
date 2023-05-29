<script lang="ts">
    import "$style";

    import {Icon} from "$tavy";

    export let content = "";
</script>

<button class="transition-all duration-200 inline -mr-1 opacity-50 hover:scale-[101%]">
    {content}<Icon name="nav-arrow-down" textClass="relative left-1 top-2"/>
</button>