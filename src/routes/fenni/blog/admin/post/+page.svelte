<script>
    import ContentSection from "$components/frames/content_section.svelte";

    let foo = "baz";
    let bar = "qux";
    let result = null;

    async function doPost() {
        const res = await fetch("https://localhost:8000/blog", {
            method: "POST",
            body: JSON.stringify({
                text: "Example Text",
            }),
        });

        const json = await res.json();
        result = JSON.stringify(json);
        console.log(result);
    }
</script>

<ContentSection title="Post a post.">
    <button
        type="button"
        on:click={doPost}
        class="z-20 rounded-full px-4 py-2 bg-neutral-600 text-white focus:bg-black"
    >
        Upload
    </button>
</ContentSection>
