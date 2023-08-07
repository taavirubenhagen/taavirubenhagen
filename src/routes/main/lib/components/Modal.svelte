<!--Place on the very end of layout to ensure it covers everything-->

<script lang="ts">
    import '$style'
    import { Button, Icon } from '..';

    export let open: boolean;
    export let onDismissed: () => {};
</script>


<div class="transition duration-100 {open ? "" : "opacity-0 pointer-events-none"}">
    <div class="fixed z-45 left-0 top-0 w-full h-full bg-opacity-50 bg-black center_col">
        <button class="fixed w-full h-full" on:click={onDismissed}></button>
        <div class="rounded-2xl w-1/2 p-8 bg-background center_col">
            <slot/>
            <Button onClick={onDismissed}>
                <div class="mt-8 h-8">
                    <Icon name="cancel" textClass="text-2xl"/>
                </div>
            </Button>
        </div>
    </div>
</div>