<script lang="ts">
    import "$style"
    import SecondaryButtonLabel from "$src/lib/tavy/text/button_text/secondary_button_label.svelte"

    export let buttonClass: string = ""
    export let onPrimary = false
    export let primary = false
    export let large = false
    export let onClicked = () => {}
</script>




<button
    on:click={onClicked}
    class="{buttonClass}
        transition-all duration-200 relative
        hover:scale-[101%] rounded-full {primary ? "" : 'border-2 ${( onPrimary ? "border-onPrimary" : "border-onBackground" )}'}
        { large ? "h-16" : "h-12"}
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
        { large ? "px-16" : "px-8"}"
    >
    <SecondaryButtonLabel><slot/></SecondaryButtonLabel>
</button>