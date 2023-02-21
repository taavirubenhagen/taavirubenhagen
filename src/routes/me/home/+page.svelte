<script lang="ts">
  import * as scroller from 'svelte-scrollto'

  import '$style'
  import Icon from '$components/icon.svelte'

  import TextButton from '$buttons/text_button.svelte'
  import TitleSection from '$frames/title_section.svelte'

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main>
  <section
    class="w-screen h-screen background p-8 md:p-16 flex_col_center relative
    text-center">
    <h2>
      Hi, I'm Taavi<br />Rübenhagen.
    </h2>
    <div class="h-8" />
    <h4 class="text-neutral-500">
      I'm a self-taught UI/UX Designer
      <br />
      and Front-End Engineer.
    </h4>
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
  <section
    class=
      "w-screen h-screen background flex_col_center"
  >
    <img
        src="/logos/logo.svg" alt="Logo"
        class="w-1/2"
    />
  </section>
</main>
