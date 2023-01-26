<script lang="ts">
  import { onMount } from 'svelte'
  import { fade, fly } from "svelte/transition"

  import DeviceDetector from 'svelte-device-detector'
  import * as scroller from 'svelte-scrollto'
  //import { Cursor, Interactive } from 'svelte-cursor'

  import * as g from '$store'
  import '$style'

  import Icon from '$components/icon.svelte'

  let menuData = ['Home', 'Work', 'Services', 'Contact']
  let isMenuOpen = false

  let isScrollButtonHovered = false

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />




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
  <!--
    class="fixed z-20 w-full h-full md:h-24 flex flex-col md:flex-row
    justify-start md:justify-center items-center">
    {#each menuData as data, i}
      <button
        on:click={() => {}}
        class="mx-2 py-2 invert-0 hover:invert rounded bg-background"
        style="transition: all 200ms cubic-bezier(.2, 0, .4, 1);">
        <a href={data.toLowerCase()}>
          <b1 class="text-right">{data}</b1>
        </a>
      </button>
    {/each}
  -->
  <div class="fixed z-50 w-screen h-8 bg-primary flex_row_center primary">
    <h5>This page is still under development.</h5>
  </div>
  <div
    on:mouseenter={() => setTimeout(() => isScrollButtonHovered = true)}
    on:mouseleave={() => setTimeout(() => isScrollButtonHovered = false)}
    class="
      fixed z-40 right-28 bottom-8
      shadow-xl rounded-full
      bg-background"
  >
    <h5 class="{isScrollButtonHovered ? "opacity-0" : "opacity-100"} rounded-full border border-primary w-32 h-16 pb-1 flex_row_center default_animation_long">Scroll</h5>
    <div class="{isScrollButtonHovered ? "opacity-100" : "opacity-0"} absolute left-0 top-0 rounded-full w-32 h-16 flex default_animation_long">
      <button
        on:click={() => scroller.scrollTo({ y: windowHeight })}
        class="
          rounded-l-full border border-r-0 border-primary hover:border-onPrimary
          w-16 h-16
          hover:invert
          pl-5 pr-3
          bg-onPrimary
          flex_row_center
          default_animation_base"
      >
        <Icon name="icons_1_down_8"/>
      </button>
      <button
        on:click={() => scroller.scrollTo({ y: 0 })}
        class="
          rounded-r-full border border-l-0 border-primary hover:border-onPrimary
          w-16 h-16
          hover:invert
          pl-3 pr-5
          bg-onPrimary
          flex_row_center
          default_animation_base"
      >
        <Icon name="icons_1_up_8"/>
      </button>
    </div>
  </div>
  <!--TODO: Add Rive icon hover interaction-->
  <button
    class="
      fixed z-40 right-6 bottom-8
      shadow-xl rounded-full border w-16 h-16
      bg-primary"
  >
    <Icon name="outfyx_menu" isWhite={true} iconClass="p-4"/>
  </button>
  <div
    class="{isMenuOpen ? 'blur md:blur-0' : 'blur-0'} max-h-screen"
    style=" transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;">
    <slot>
      <s1>This page is still under development.</s1>
    </slot>
  </div>
</main>
