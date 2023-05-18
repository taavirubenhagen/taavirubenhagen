<script lang="ts">
  import * as scroller from 'svelte-scrollto'

  import '$style'

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main class="">
    Welcome to my blog
</main>
