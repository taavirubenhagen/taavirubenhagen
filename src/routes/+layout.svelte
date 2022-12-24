<script lang="ts">
  import { fade, fly } from "svelte/transition"

  import DeviceDetector from "svelte-device-detector"
  import { Cursor, Interactive } from 'svelte-cursor'

  import "../global.postcss"
  
  import Icon from "../components/icon.svelte"


  let isMenuOpen = false

  function getMenu(): string[][] {
    let menu = [["Home", "home"], ["Mission", "mission"], ["Team", "team"], ["Contact", "contact"]]
    return isMenuOpen ? menu : []
  }
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
  <header class="fixed z-20 w-full h-24 flex flex-col md:flex-row justify-start md:justify-center items-center">
    <DeviceDetector showInDevice="desktop">
      {#each getMenu().slice(0, 2) as data, i}
        <Interactive state="hover">
          <button
            on:click={() => isMenuOpen = false}
            in:fly="{{ x: 10 * ( 2 - i ), duration: 400 }}"
            out:fly="{{ x: 10 * ( 2 - i ), duration: 400 }}"
            class="w-32"
          >
            <a href={data[1] ?? "404"}>
              <b1 class="text-right">{data[0]}</b1>
            </a>
          </button>
        </Interactive>
      {/each}
    </DeviceDetector>
    <Interactive state="hover">
      <button on:click={() => isMenuOpen = !isMenuOpen} class="z-40 mx-4">
        <img src="full_logo.svg" alt="Logo" class="m-8 h-8">
      </button>
    </Interactive>
    <DeviceDetector showInDevice="mobile">
      {#each getMenu() as data, i}
        <Interactive state="hover">
          <button
            on:click={() => isMenuOpen = false}
            in:fly="{{ y: -1.5 * ( i + 2 ), duration: 400 }}"
            out:fly="{{ y: -1.5 * ( i + 2 ), duration: 400 }}"
            class="h-16"
          >
            <a href={data[1] ?? "404"}>
              <b1 class="text-right">{data[0]}</b1>
            </a>
          </button>
        </Interactive>
      {/each}
    </DeviceDetector>
    <DeviceDetector showInDevice="desktop">
      {#each getMenu().slice(-2) as data, i}
        <Interactive state="hover">
          <button
            on:click={() => isMenuOpen = false}
            in:fly="{{ x: 10 * ( -1 - i ), duration: 400 }}"
            out:fly="{{ x: 10 * ( -1 - i ), duration: 400 }}"
            class="w-32"
          >
            <a href={data[1] ?? "404"}>
              <b1 class="text-right">{data[0]}</b1>
            </a>
          </button>
        </Interactive>
      {/each}
    </DeviceDetector>
  </header>
  <div
    class="{isMenuOpen ? "blur md:blur-0" : "blur-0"}"
    style="transition: all 400ms cubic-bezier(0, .2, 1, .4);"
  >
    <slot></slot>
  </div>
</main>