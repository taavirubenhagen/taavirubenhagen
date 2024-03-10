<script lang="ts">
    export let name: string;
    export let inverted = false;
    // Defaults to fit 'text-base'
    export let size = 16;
    export let textClass = ""   // TODO: R

    const tavyVersion = '2024-03';
</script>


<img
    src='/tavy/icons/{tavyVersion}/{name}.svg'
    alt={name}
    class='{inverted ? 'invert' : ''}'
    style='height: {size / 16 * 1.25}rem;'
/>