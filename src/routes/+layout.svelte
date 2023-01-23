<script lang="ts">
  import { onMount } from "svelte";

  import DeviceDetector from "svelte-device-detector";
  import { Cursor, Interactive } from "svelte-cursor";

  import * as g from "$store";
  import "$style";

  import MenuButton from "$src/routes/local_menu_button.svelte";

  let isMenuOpen = false;

  function getMenu(): string[] {
    let menu = ["Home", "Work", "Services", "Contact"];
    return isMenuOpen ? menu : [];
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
  <header
    class="fixed z-20 w-full h-24 flex flex-col md:flex-row justify-start md:justify-center items-center"
  >
    <DeviceDetector showInDevice="desktop">
      {#each getMenu().slice(0, getMenu().length / 2) as data, i}
        <MenuButton
          context="left"
          {data}
          {i}
          onClick={() => (isMenuOpen = false)}
        />
      {/each}
    </DeviceDetector>
    <Interactive state="hover">
      <button on:click={() => (isMenuOpen = !isMenuOpen)} class="z-40">
        <img
          src="/full_logo.svg"
          alt="Logo"
          class="
            shadow-0 hover:shadow-0
            m-4 mx-2 rounded h-16 p-4
            bg-background"
          style="
            transition: all 400ms cubic-bezier(.2, 0, .4, 1);"
        />
      </button>
    </Interactive>
    <DeviceDetector showInDevice="mobile">
      {#if isMenuOpen}
        <button
          on:click={() => (isMenuOpen = false)}
          class="absolute w-screen h-screen"
        />
      {/if}
      {#each getMenu() as data, i}
        <MenuButton
          context="mobile"
          {data}
          {i}
          onClick={() => (isMenuOpen = false)}
        />
      {/each}
    </DeviceDetector>
    <DeviceDetector showInDevice="desktop">
      {#each getMenu().slice(-(getMenu().length / 2)) as data, i}
        <MenuButton
          context="right"
          {data}
          {i}
          onClick={() => (isMenuOpen = false)}
        />
      {/each}
    </DeviceDetector>
  </header>
  <div
    class="{isMenuOpen ? 'blur md:blur-0' : 'blur-0'} max-h-screen"
    style="
      transition: all 400ms cubic-bezier(0, 0, 1, 1);
      max-height: 100vh;"
  >
    <slot>
      <s1>This page is still under development.</s1>
    </slot>
  </div>
</main>
