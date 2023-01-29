<script lang="ts">
  import '.././global.postcss'

  export let isWhite = false
  export let iconClass = ""
  export let version = "0.2"
  export let name: string
</script>

<div>
  <img
    src="/icons/{version}/{name}.svg"
    alt="Icon"
    class="{iconClass}
    {isWhite ? 'invert' : ''}" />
</div>
