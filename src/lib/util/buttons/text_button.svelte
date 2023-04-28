<script lang="ts">
    import "$style"
    import SecondaryButtonLabel from "$src/lib/tavy/text/button_text/secondary_button_label.svelte"

    export let buttonClass: string = ""
    export let onPrimary = false
    export let primary = false
    export let onClicked = () => {}
</script>




<button
    on:click={onClicked}
    class="{buttonClass}
        transition-all duration-200 relative
        hover:scale-[101%] rounded-lg border-2 {onPrimary ? "border-onPrimary" : "border-onBackground"}
        h-12
        {
        primary
        ? (
            onPrimary
            ? "bg-onPrimary text-onBackground"
            : "bg-primary text-onPrimary"
            )
        : (
            onPrimary
            ? "text-onPrimary"
            : "text-onBackground"
            )
        }
        px-4"
    >
    <SecondaryButtonLabel><slot/></SecondaryButtonLabel>
</button>