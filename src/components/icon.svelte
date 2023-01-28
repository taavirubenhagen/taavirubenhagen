<script lang="ts">
  import '.././global.postcss'

  export let isWhite: boolean = false
  export let iconClass: string = ''
  export let name: string
</script>

<div>
  <img
    src="/icons/0.2/{name}.svg"
    alt="Icon"
    class="{iconClass}
    {isWhite ? 'invert' : ''}" />
</div>
