<script lang="ts">
    import "$style";
    import { Icon } from "$tavy";
    import { Button } from "$tavy/minimal";

    export let content = "";
</script>

<Button onClick={() => console.log('TODO')}>
    {content}<Icon name="nav-arrow-down" textClass='relative left-1 top-1'/>
</Button>