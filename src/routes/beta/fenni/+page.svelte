<script lang="ts">
  import * as scroller from 'svelte-scrollto'

  import './fenni.postcss'
  import Icon from '$components/icon.svelte'

  import TextButton from '$buttons/text_button.svelte'
  import TitleSection from '$frames/title_section.svelte'

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main>
    <section class="w-screen h-screen">
        <img src="https://www.1517.org/hubfs/two%20natures%20of%20Christ.jpeg" alt="" class="absolute z-5">
        <div
            class=
                "absolute w-screen h-screen bg-black bg-opacity-25 p-8 md:p-16 flex_col_center
                text-center"
        >
            <h4 class="relative z-10 text-white italic">
                Je kleiner die Dinge,<br/><br/>
                in denen ich Schönheit entdecke,<br/><br/>
                desto größer das Lächeln,<br/><br/>
                dass sie in mein Gesicht zaubern.
            </h4>
        </div>
    </section>
  <section
    class=
      "w-screen h-screen background p-8 md:p-16 flex_col_center relative
      text-center"
  >
    <h3>Every aspect of any app on any platform.</h3>
    <div class="h-16" />
    <div class="flex_row_center">
      {#each ['Mobile', 'Web', 'Server', 'Graphics', 'Deploy', 'Market'] as data}
        <a href="/me/design/tavy/icons">
          <div class="m-6 mb-12 shadow-xl rounded-2xl shadow-neutral-300 w-24 h-24 flex_row_center">
            <!--TODO: Make icon stroke 1-->
            <Icon isThin name="phone" iconClass="w-12 h-12 opacity-100"/>
          </div>
          <h6>{data}</h6>
        </a>
      {/each}
    </div>
  </section>
  <section
    class=
      "w-screen h-screen background p-8 md:p-16 flex_col_center relative
      text-center"
  >
    <h3>Contact me for any collaboration.</h3>
    <div class="h-16" />
    <a href="mailto:taavi.ruebenhagen@gmail.com" class="flex_row_center">
      <TextButton primary>E-Mail me</TextButton>
    </a>
  </section>
</main>
