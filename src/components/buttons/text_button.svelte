<script lang="ts">
  import "../.././global.postcss"

  export let buttonClass: string = ""
  export let onPrimary = false
  export let primary = false
  export let onClicked = () => {}
</script>




<button
    on:click={onClicked}
    class="{buttonClass}
        transition-all relative
        m-0 hover:m-0 rounded-full border-2 hover:border-2 {onPrimary ? "border-onPrimary" : "border-onBackground"}
        h-14
        {
        primary
        ? (
            onPrimary
            ? "bg-onPrimary hover:bg-transparent text-onBackground hover:text-onPrimary"
            : "bg-primary hover:bg-transparent text-onPrimary hover:text-onBackground"
            )
        : (
            onPrimary
            ? "bg-transparent hover:bg-onPrimary text-onPrimary hover:text-onBackground"
            : "bg-transparent hover:bg-primary text-onBackground hover:text-onPrimary"
            )
        }
        px-5
        { onPrimary ? "text-onPrimary hover:text-onBackground" : "text-onBackground hover:text-onPrimary" }"
    >
    <b2><slot/></b2>
</button>