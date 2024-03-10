<script lang="ts">
    import '$style';

    export let className = '';
</script>


<div class={className} style='min-height: 100vh;'>
    <slot/>
</div>