<script lang="ts">
  import * as scroller from 'svelte-scrollto'

  import '$style'
  import Icon from '$src/lib/util/deprecated/icon.svelte'

  import TextButton from '$buttons/text_button.svelte'

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main class="font-sans">
  <section class="w-screen h-screen background p-8 md:p-16">
    <h2 class="mb-24">
      Shop
    </h2>
    <div class="flex flex-wrap gap-16">
        {#each [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] as e, i}
            <div
                class=
                    "transition duration-200
                    relative w-64"
            >
                <img src="https://api.lorem.space/image/{["watch", "furniture", "fashion"][i % 3]}?w=150&h=150" alt="Shop Item" class="rounded-lg w-full primary"/>
                <div class="absolute z-10 bottom-0 backdrop-brightness-75 backdrop-blur-sm rounded-b-lg w-full p-4 flex flex-col items-end">
                    <div class="w-full flex flex-col">
                        <h5 class="text-white">Inkless Pen</h5>
                        <h5 class="text-white">15$</h5>
                    </div>
                    <!--TODO: <div class="mr-4 mb-4 rounded-xl border border-primary w-32 h-12">
                        X X X
                    </div>-->
                </div>
            </div>
        {/each}
    </div>
  </section>
</main>
