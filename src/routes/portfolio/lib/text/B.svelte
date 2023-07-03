<script lang="ts">
    import '$style'

    export let underline = true;
</script>

<t
    class=
        "transition duration-400
        {underline ? "underline underline-offset-8" : ""}
        hover:text-neutral-400"
>
    <slot/>
</t>