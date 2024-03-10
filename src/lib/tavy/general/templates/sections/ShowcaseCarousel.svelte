<script lang="ts">
    import '$style';
    import {
        SmallHeading,
    } from '$tavy';

    export let title: string;
</script>


<SmallHeading>{title}</SmallHeading>
<div class="h-4"></div>
<div class='-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8'>
    <slot/>
</div>
<div class="h-16"></div>