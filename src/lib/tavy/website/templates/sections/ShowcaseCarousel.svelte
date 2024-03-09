<script lang="ts">
    import '$style';
    import {
        SmallHeading,
    } from '$tavy/website';

    export let title: string;
</script>


<div class='flex gap-8 items-end'>
    <SmallHeading>
        <!--\ -->{title}
        <!--<Icon name='fast-arrow-right' textClass='relative top-1.5'/>-->
    </SmallHeading>
</div>
<div class="h-4"></div>
<div class='-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8'>
    <slot/>
</div>
<div class="h-16"></div>