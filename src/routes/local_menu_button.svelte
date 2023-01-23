<script lang="ts">
  import { fly } from "svelte/transition"

  import { Interactive } from 'svelte-cursor'

  import "$style"


  export let context: "mobile" | "left" | "right"
  export let data: string
  export let i: number
  export let onClick: Function




  let flyParamsX: number =
    context == "mobile"
    ? 0
    : context == "left"
    ? 10 * ( 2 - i )
    : 10 * ( -1 - i )
  let flyParamsY: number = context == "mobile" ? -1.5 * ( i + 2 ) : 0
</script>




<Interactive state="hover">
  <button
    on:click={() => onClick()}
    in:fly="{{ x: flyParamsX, y: flyParamsY, duration: 400 }}"
    out:fly="{{ x: flyParamsX, y: flyParamsY, duration: 400 }}"
    class="
      {context == "mobile" ? "my-1 h-14 px-1" : "mx-2 w-28 py-2"}
      invert-0 hover:invert
      rounded bg-background"
    style="
      transition: all 200ms cubic-bezier(.2, 0, .4, 1);"
  >
    <a href={data.toLowerCase()}>
      <b1 class="text-right">{data}</b1>
    </a>
  </button>
</Interactive>