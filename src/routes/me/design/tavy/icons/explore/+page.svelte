<script lang="ts">
    import '$style'
    import Icon from '$src/lib/util/deprecated/icon.svelte'
  
    import TextButton from '$buttons/text_button.svelte'
  
    let windowHeight: number


    let areIconsThin = false

    const iconData = [
        [
            ["Hardware"],
            [
                "Phone",
            ],
        ],
        [
            ["Navigation"],
            [
                "Down"
            ],
        ],
    ]
</script>
  
<svelte:window bind:innerHeight={windowHeight} />
  
<main>
    <section
        class="
            w-screen p-8 md:p-12 md:pt-16 pb-0 flex flex-col items-start
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
    <section class="p-4 md:p-8 pt-0">
        {#each iconData as data, i}
            <h4 class="ml-4 mt-8 md:mt-16 mb-4 md:mb-8 w-full text-left">{data[0]}</h4>
            <div
                class="
                    w-screen
                    flex flex-wrap items-start text-center"
            >
                {#each data[1] as d, i}
                    <div
                        class=
                            "m-4 hover:shadow-xl shadow-neutral-300 border border-primary rounded-2xl w-40 h-40
                            flex_col_center
                            duration-400"
                    >
                        <Icon size={16} isThin={areIconsThin} name={d.toLowerCase()}/>
                        <div class="h-4"></div>
                        <h6>{d}</h6>
                    </div>
                {/each}
            </div>
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
  