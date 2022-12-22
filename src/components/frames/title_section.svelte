<script lang="ts">
  import { get, writable } from "svelte/store"
  import { onMount } from "svelte"

  import * as scroller from "svelte-scrollto"
  import { Interactive } from 'svelte-cursor'

  import "../.././global.postcss"
  import Icon from "../../components/icon.svelte"
	import * as g from "../../stores"

  export let index: number
  export let primary = false
  export let scrollButton = true
  export let sectionCursorState = ""
  export let sectionClass: string = ""

  onMount(() => {
    g.wih.update(_ => window.innerHeight)
  })
</script>




<Interactive state={sectionCursorState}>
  <section class="{sectionClass} w-screen h-screen {primary ? "primary" : "background"} p-8 flex_col_center relative text-center">
    <slot/>
    {#if scrollButton}
      <Interactive state="hover">
        <button
          on:click={() => scroller.scrollTo({y: get(g.wih) * ( index + 1 )})}
          class="absolute left-0 bottom-0 w-screen flex_row_center"
        >
          <div
            class="w-24 h-24
              p-8 hover:p-7"
            style="transition-duration: 200ms; transition-timing-function: cubic-bezier(.2, 0, .2, 1);"
          >
            <Icon
              isWhite={primary}
              name="outfyx_flat_arrow_down"
            />
          </div>
        </button>
      </Interactive>
    {/if}
  </section>
</Interactive>