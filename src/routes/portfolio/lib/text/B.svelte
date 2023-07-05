<script lang="ts">
    import '$style'

    export let onPrimary = false;
    export let simple = false;
</script>


<t
    class=
        "transition duration-400
        {simple ? "" : "underline underline-offset-8"}
        {onPrimary ? "text-onPrimary" : "text-onBackground"}"
>
    <slot/>
</t>