<script lang="ts">
  import * as scroller from "svelte-scrollto"
  import { Interactive } from 'svelte-cursor'

  import "../.././global.postcss"
  import Icon from "../../components/icon.svelte"

  export let primary = false
  export let scrollButton = true
  export let sectionCursorState = ""
  export let title: string
  export let sectionClass: string = ""




  let windowHeight: number
</script>




<section
class="{sectionClass} w-screen min-h-screen {primary ? "primary" : "background"} bg-surface p-8 md:p-16 pt-24">
  <h2 class={primary ? "primary" : "background"}>{title}</h2>
  <div class="h-16"></div>
  <slot>
    <s1>This page is still under development.</s1>
  </slot>
</section>