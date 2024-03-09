<script lang="ts">
    export let name: string;
    export let inverted = false;
    export let textClass = ""
</script>


<i class="relative {inverted ? 'invert' : ''} {textClass} iconoir-{name}"></i>