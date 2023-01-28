<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from "svelte/transition"
  import * as easings from 'svelte/easing';
  import { page } from '$app/stores';

  import DeviceDetector from 'svelte-device-detector'
  import * as scroller from 'svelte-scrollto'
  //import { Cursor, Interactive } from 'svelte-cursor'

  import * as g from '$store'
  import '$style'

  import Icon from '$components/icon.svelte'
    import { CubicBezierCurve } from 'three';

  let menuData = ['Home', 'Work', 'Services', 'Contact']
  let isMenuOpen = false

  let menuButtonCanvas: HTMLCanvasElement;

  let isScrollButtonHovered = false

  let windowHeight: number
  let windowWidth: number
  
  onMount(() => {
    const r = new rive.Rive({
      src: "/icon_animations.riv",
      canvas: menuButtonCanvas,
      artboard: "icons_1_menu",
      animations: [],
      //artboard: "icons_1_menu",
      autoplay: true
    });
  });
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}/>




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
  <button
    on:mouseenter={() => setTimeout(() => isScrollButtonHovered = true)}
    on:mouseleave={() => setTimeout(() => isScrollButtonHovered = false)}
    on:click={() => windowWidth < 768 ? scroller.scrollTo({ y: windowHeight }) : {}}
    class="
      fixed z-40 right-28 bottom-8
      shadow-xl rounded-full
      bg-background"
  >
    <h5
      class=
        "{isScrollButtonHovered ? "opacity-0" : "opacity-100"} rounded-full border-2 border-primary w-32 h-16 pb-1
        flex_row_center default_animation_long"
    >
      Scroll
    </h5>
    <DeviceDetector deviceType="desktop">
      <div class="{isScrollButtonHovered ? "opacity-100" : "opacity-0"} absolute left-0 top-0 rounded-full w-32 h-16 flex default_animation_long">
        <button
          on:click={() => scroller.scrollTo({ y: windowHeight })}
          class="
            rounded-l-full border-2 border-r-0 border-primary hover:border-onPrimary
            w-16 h-16
            hover:invert
            pl-5 pr-3
            bg-onPrimary
            flex_row_center
            default_animation_short"
        >
          <Icon name="icons_1_down_8"/>
        </button>
        <button
          on:click={() => scroller.scrollTo({ y: 0 })}
          class="
            rounded-r-full border-2 border-l-0 border-primary hover:border-onPrimary
            w-16 h-16
            hover:invert
            pl-3 pr-5
            bg-onPrimary
            flex_row_center
            default_animation_short"
        >
          <Icon name="icons_1_up_8"/>
        </button>
      </div>
    </DeviceDetector>
  </button>
  <!--<button
    class="fixed z-30 rounded-full bg-primary"
    style="width: 100vw; height: 100vw;"
  ></button>-->
  <button
    on:click={() => isMenuOpen = !isMenuOpen}
    class="
      fixed z-40 right-6 bottom-8
      invert hover:invert shadow-xl rounded-full border-2 border-primary {isMenuOpen ? "" : "w-16 h-16"}
      bg-onPrimary
      flex_row_center
      default_animation_long"
    style={
      isMenuOpen
      ? "width: 500vh; height: 500vh; right: calc(-250vh + 1.5rem + 2rem); bottom: calc(-250vh + 2rem + 2rem);"
      : ""
    }
  >
    <canvas bind:this={menuButtonCanvas} width={32} height={32}/>
  </button>
  {#if isMenuOpen}
    <div class="fixed z-50 pointer-events-none w-screen h-screen flex_col_center">
        {#each menuData as data, i}
          <a href="/me/home">
            <h4
              in:fly={{duration: 800, delay: ( i + 3 ) * 100, y: 32}}
              out:fly={{easing: easings.sineInOut, duration: 200, x: windowWidth / 2 * 0.5, y: windowHeight / 2 * 0.5}}
              class=
                "pointer-events-auto
                {(() => {
                  let firstNestedRouteName = "/me"    // Change this only this line if overall routing structure changes
                  let currentUrl = firstNestedRouteName + "/" + data.toLowerCase()
                  let linkedRouteUrl = $page.url.pathname
                  return currentUrl === linkedRouteUrl ? "opacity-50" : "opacity-100"
                })()} hover:opacity-50
                m-1 p-1
                text-onPrimary
                default_animation_short"
            >
              {data}
            </h4>
          </a>
        {/each}
    </div>
  {/if}
  <div
    class="{isMenuOpen ? 'blur md:blur-0' : 'blur-0'} max-h-screen"
    style=" transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;">
    <slot>
      <s1>This page is still under development.</s1>
    </slot>
  </div>
</main>
