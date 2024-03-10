<script lang="ts">
    import {
        tavyVersion,
    } from '$tavy/info';

    export let name: string;
    export let inverted = false;
    // Defaults to fit 'text-base'
    export let size = 16;
    export let textClass = ""   // TODO: R

    const src = `/tavy/icons/${tavyVersion}/svg/${name}.svg`;
    //`https://raw.githubusercontent.com/taavirubenhagen/taavirubenhagen/main/tavy/main/icons/${tavyVersion}/${name}.svg`;
</script>


<img
    src={src}
    alt={name}
    class='{inverted ? 'invert' : ''}'
    style='height: {size / 16 * 1.25}rem;'
/>