<script lang="ts">
  import { Cursor, Interactive } from 'svelte-cursor'

  import "$style"
  
  import TextButton from "../../components/buttons/text_button.svelte"

  import ContentSection from "$frames/content_section.svelte"
  import TitleSection from "../../components/frames/title_section.svelte"
</script>




<main>
  <TitleSection index={0}>
    <h3>I design, build and deploy digital products like websites, icons or apps from 10€.</h3>
    <div class="h-16"></div>
    <div class="flex_row_center">
      <TextButton>Hire me</TextButton>
    </div>
  </TitleSection>
  <ContentSection primary title="Projects" sectionClass="bg-primary text-onPrimary">
    <div class="h-0"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-8">
      {#each [
        [
          "The Presenter.",
          "The Presenter is a holistic presentation tool app featuring remote control for your PowerPoint or Google Presentation from your phone, speaker notes and an integrated timer that vibrates at customizable times.",
          "presenter",
        ],
        [
          "Tavy Design System & TavyIcons.",
          "TavyIcons is an ultra minimalist UI icon set for apps or websites. Animated versions of all icons are under development.",
          "icons",
        ],
        [
          "The Simplest Counter.",
          "Just a simple counting app, but with excellent execution. xd.",
          "counter",
        ],
        [
          "Outfyx App.",
          "What if you never had to think about what to wear again?",
          "outfyx",
        ],
        [
          "Personal Website.",
          "You see it here.",
          "home",
        ],
      ] as data, i}
        <Interactive state="hover">
          <a href={data[2]}>
            <button class="w-full h-full">
              <div
                class="
                  duration-800
                  hover:invert
                  rounded-2xl border border-onPrimary
                  w-full h-full bg-primary p-8
                  text-justify"
              >
                <h4 class="">{data[0]}</h4>
                <div class="h-8"></div>
                <s1 class="">{data[1]}</s1>
              </div>
            </button>
          </a>
        </Interactive>
      {/each}
    </div>
  </ContentSection>
  <TitleSection index={2}>
    <h3>Contact me for any collaboration.</h3>
    <div class="h-16"></div>
    <div class="flex_row_center">
      <TextButton primary>E-Mail me</TextButton>
    </div>
  </TitleSection>
</main>