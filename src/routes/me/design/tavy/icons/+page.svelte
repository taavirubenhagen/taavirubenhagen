<script lang="ts">
    import '$style'
    import Icon from '$src/lib/util/deprecated/icon.svelte'
  
    import TextButton from '$buttons/text_button.svelte'
  
    let windowHeight: number
</script>
  
<svelte:window bind:innerHeight={windowHeight} />
  
<main>
    <section
        class="
            w-screen h-screen background p-8 md:p-16 flex_col_center relative
            text-center"
    >
        <h2>Tavy Icons</h2>
        <div class="h-8"/>
        <h4 class="text-neutral-500">An ultra minimalist UI icon set.</h4>
        <div class="h-16" />
        <div class="flex_row_center">
          <a href="/me/design/tavy/icons/explore">
            <TextButton primary>Explore icons</TextButton>
          </a>
          <div class="w-8" />
          <TextButton>Download set</TextButton>
        </div>
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
  