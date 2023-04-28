<script lang="ts">
    import { onMount } from 'svelte'
    import { fly } from "svelte/transition"
    import * as easings from 'svelte/easing'
    import { page } from '$app/stores'

    import DeviceDetector from 'svelte-device-detector'
    import * as scroller from 'svelte-scrollto'
    //import { Cursor, Interactive } from 'svelte-cursor'

    import '$style'
    import {
        PrimaryButtonLabel,
        SecondaryButtonLabel,
        TertiaryButtonLabel,
    } from '$tavy';
    import TextButton from '$src/lib/util/buttons/text_button.svelte';


    let windowHeight: number;
    let windowWidth: number;

    function updateScrollToTopButtonPositionClass(y: number): string {
        const dy = lastScrollY - y;
        lastScrollY = y;
        if (y === 0 || dy <= -8) {
            return "-bottom-10";
        }
        if (Math.abs(dy) <= 16) {
            return scrollToTopButtonPositionClass;
        }
        setTimeout(() => scrollToTopButtonPositionClass = updateScrollToTopButtonPositionClass(scrollY), 8000);
        return "bottom-8";
    }
    let scrollY = 0;
    let lastScrollY = 0;
    $: scrollToTopButtonPositionClass = updateScrollToTopButtonPositionClass(scrollY);

    let isInDevelopmentBannerExpanded = false;      // TODO: R

    const menuData = ['Home', 'Work', 'Services', 'Contact'];
    let isMenuOpen = false;

    let menuButtonCanvas: HTMLCanvasElement;
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} bind:scrollY={scrollY}/>




<main class="max-w-screen min-h-screen background">
    <button  on:click={() => isInDevelopmentBannerExpanded = !isInDevelopmentBannerExpanded} class="transition-all duration-400 fixed z-50 w-screen {isInDevelopmentBannerExpanded ? "h-screen" : "h-8"} primary flex_row_center">
        <div class="w-screen h-8 flex_row_center">
            <SecondaryButtonLabel>
                <div class="transition-all duration-400 {isInDevelopmentBannerExpanded ? "text-5xl" : "text-xl"} font-display">
                    Still under development
                </div>
            </SecondaryButtonLabel>
        </div>
        <div class="transition-all duration-400 absolute bottom-16 w-screen {isInDevelopmentBannerExpanded ? "opacity-100" : "opacity-0"} flex_row_center">
            <TextButton primary onPrimary>Visit anyway</TextButton>
        </div>
    </button>
    <div class="transition-all duration-400 fixed z-30 {scrollToTopButtonPositionClass} w-screen flex_row_center">
        <button
            on:click={() => scroller.scrollTo({ y: 0 })}
            class="transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"
        >
            <TertiaryButtonLabel>Back to top</TertiaryButtonLabel>
        </button>
    </div>
    <slot>
        <s1>This page is still under development.</s1>
    </slot>
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
  <!--<button
    on:click={() => isMenuOpen = !isMenuOpen}
    class="
      fixed z-40 right-6 bottom-8
      invert hover:invert shadow-xl rounded-full {isMenuOpen ? "" : "w-16 h-16"}
      bg-onPrimary
      flex_row_center
      duration-800"
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
          <button on:click={() => isMenuOpen = false}>
            <a href="/me/{data.toLowerCase()}">
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
                  duration-200"
              >
                {data}
              </h4>
            </a>
          </button>
        {/each}
    </div>
  {/if}
    <div
        class="{isMenuOpen ? 'blur md:blur-0' : 'blur-0'} max-h-screen"
        style=" transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;"
    >
        <slot>
            <s1>This page is still under development.</s1>
        </slot>
  </div>-->
</main>
