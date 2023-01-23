<script lang="ts">
  import "$style"
  
  import TextButton from "$buttons/text_button.svelte"
  import TitleSection from "$frames/title_section.svelte"
</script>




<main>
  <TitleSection index={0}>
    <h1>Simple.</h1>
  </TitleSection>
  <TitleSection primary index={1} sectionClass="bg-primary text-onPrimary">
    <h3 class="primary">I'm a self-taught UI/UX Designer and Front-End Engineer.</h3>
  </TitleSection>
  <TitleSection index={2}>
    <h3>Contact me for any collaboration.</h3>
    <div class="h-16"></div>
    <div class="flex_row_center">
      <TextButton primary>E-Mail me</TextButton>
    </div>
  </TitleSection>
</main>