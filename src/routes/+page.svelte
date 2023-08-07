<script lang="ts">

  import '$style'
  import Icon from '$src/lib/util/deprecated/icon.svelte'

  import TextButton from '$buttons/text_button.svelte'

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main class="h-screen p-16 center_col">
    <div class="md:w-1/2 flex justify-between">
        {#each ["home", "speech", "arrow-separate", "github", "instagram", "chat-bubble-empty"] as e, i}
            <i class="text-2xl md:text-5xl iconoir-{e}"></i>
        {/each}
    </div>
</main>
