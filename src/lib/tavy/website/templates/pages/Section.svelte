<script lang="ts">
    import '$style';
    import { Section } from '$tavy';

    export let top = false;
    export let className = '';
</script>


<Section className='{className} {top ? 'pt-16' : ''}'>
    <slot/>
</Section>