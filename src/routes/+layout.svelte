<script lang="ts">
  import { Cursor, Interactive } from 'svelte-cursor'

  import "../global.postcss"
  
  import Icon from "../components/icon.svelte"
</script>




<main class="w-screen min-h-screen bg-background text-onBackground">
  <!--<Cursor let:state>
    <div
      class="base_cursor"
      class:hover_cursor={state === 'hover'}
    >
      {#if state === "hover"}
        <Icon name="outfyx_menu"/>
      {:else}
        <div></div>
      {/if}
    </div>
  </Cursor>-->
  <header class="fixed z-40 w-screen h-24 flex_row_center">
    <Interactive state="hover">
      <img src="full_logo.svg" alt="Logo" class="h-8">
    </Interactive>
  </header>
  <slot></slot>
</main>