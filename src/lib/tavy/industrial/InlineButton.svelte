<script lang="ts">
    import '$style';
    import { RawButton } from '$tavy';

    export let inverted = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="{inverted ? 'invert' : ''} underline underline-offset-4 capitalize">
        <slot/>
    </div>
</RawButton>