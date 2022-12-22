<script lang="ts">
  import "../.././global.postcss"

  export let title: string = ""
</script>




<section class="bg-surface p-8 md:p-16 pt-24">
  <h1>{title}</h1>
  <div class="h-16"></div>
  <slot>
    <s1>This page is still under development.</s1>
  </slot>
</section>