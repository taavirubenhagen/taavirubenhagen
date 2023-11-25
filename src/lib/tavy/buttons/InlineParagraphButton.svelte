<script lang="ts">
    import "$style";

    import { Icon, RawButton } from "$tavy";

    export let content = "";
</script>

<RawButton onClick={() => console.log('TODO')}>
    {content}<Icon name="nav-arrow-down" textClass="relative left-1 top-2"/>
</RawButton>