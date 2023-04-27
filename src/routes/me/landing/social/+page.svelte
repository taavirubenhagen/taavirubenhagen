<script lang="ts">
  import * as scroller from 'svelte-scrollto'

  import '$style'
  import Icon from '$util/icon.svelte'

  import TextButton from '$buttons/text_button.svelte'

  let windowHeight: number
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main>
  <section
    class="w-screen min-h-screen background p-8 md:p-16 text-center"
>
    <h4>Website</h4>
    <div class="h-8"></div>
    <div>
        <a href="/me/home"><TextButton>Home</TextButton></a>
        <div class="h-4"></div>
        <a href="/me/landing/projects"><TextButton>Projects</TextButton></a>
    </div>
    <div class="h-16"></div>
    <h4>External</h4>
    <div class="h-8"></div>
    <div>
        <a href="https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d">
            <TextButton>HvF-Homepage - The Presentation Master</TextButton>
        </a>
    </div>
    <div class="h-16"></div>
    <h4>Instagram</h4>
    <div class="h-8"></div>
    <div>
        <a href="https://www.instagram.com/taavirubenhagen/"><TextButton>@taavirubenhagen</TextButton></a>
        <div class="h-4"></div>
        <a href="https://www.instagram.com/the_presenter/"><TextButton>@the_presenter</TextButton></a>
    </div>
  </section>
</main>
