<script lang="ts">
    import { onMount } from 'svelte'
    import { fly } from "svelte/transition"
    import * as easings from 'svelte/easing'
    import { page } from '$app/stores'
  
    import DeviceDetector from 'svelte-device-detector'
    import * as scroller from 'svelte-scrollto'
    //import { Cursor, Interactive } from 'svelte-cursor'
  
    import '$style'
  
    import Icon from '$components/icon.svelte'
  
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
      })
    })
  </script>




<main class="relative w-screen min-h-screen background">
    <header class="absolute z-10 w-screen h-32 bg-primary"></header>
    <header class="w-screen h-32 bg-primary"></header>
    <button
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
                <a href="/dropshipz/{data.toLowerCase()}">
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
        style=" transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;">
        <slot>
            <s1>This page is still under development.</s1>
        </slot>
    </div>
    <!--TODO: <footer class="absolute bottom-0 w-full h-16 primary"></footer>-->
</main>