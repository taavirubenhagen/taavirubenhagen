<script lang="ts">
    import '$style'

    export let onPrimary = false;
    export let simple = false;
</script>

<t
    class=
        "transition duration-400
        {simple ? "" : "underline underline-offset-8"}
        {onPrimary ? "text-onPrimary hover:text-neutral-400" : "text-onBackground hover:text-neutral-600"}"
>
    <slot/>
</t>