<script lang="ts">
    import '$style'
    import Icon from '$components/icon.svelte'
  
    import TextButton from '$buttons/text_button.svelte'
  
    let windowHeight: number
</script>
  
<svelte:window bind:innerHeight={windowHeight} />
  
<main>
    <section
        class="
            w-screen p-8 md:p-16 flex flex-col items-start
            text-center"
    >
      <div class="w-full flex justify-between items-end">
        <h3>Tavicons</h3>
        <div class="flex">
          <a href="mailto:taavi.ruebenhagen@gmail.com" class="flex_row_center">
            <TextButton>Normal stroke</TextButton>
          </a>
          <div class="w-4" />
          <a href="mailto:taavi.ruebenhagen@gmail.com" class="flex_row_center">
            <TextButton>Choose color</TextButton>
          </a>
          <div class="w-4" />
          <a href="mailto:taavi.ruebenhagen@gmail.com" class="flex_row_center">
            <TextButton>Choose category</TextButton>
          </a>
        </div>
      </div>
    </section>
    <section
      class="
        w-screen h-screen p-8 md:p-16
        flex text-center"
    >
      {#each [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] as data, i}
        <div class="m-1 w-32 h-8 bg-red-600">{i}</div>
      {/each}
    </section>
    <section
      class=
        "w-screen h-screen background p-8 md:p-16 flex_col_center relative
        text-center"
    >
      <h3>Tell which icons you miss in the set.</h3>
      <div class="h-16" />
      <a href="mailto:taavi.ruebenhagen@gmail.com" class="flex_row_center">
        <TextButton primary>E-Mail me</TextButton>
      </a>
    </section>
  </main>
  