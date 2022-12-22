<script lang="ts">
  import ".././global.postcss"

  export let isWhite: boolean = false
  export let size = "0"
  export let iconClass: string = ""
  export let name: string
</script>




<div class="w-{size} h-{size}">
  <img src="icons/{name}.svg" alt="Icon" class="{iconClass} {isWhite ? "invert" : ""}"/>
</div>