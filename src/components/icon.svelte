<script lang="ts">
  import '.././global.postcss'

  export let version = "0.2"
  export let isThin = false
  export let isWhite = false
  export let size = 16
  export let name: string
  export let iconClass = ""
</script>

<div>
    <img
        src="/icons/{version}/{name}{isThin ? "_thin" : ""}.svg"
        alt="Icon"
        class=
            "{iconClass}
            {isWhite ? 'invert' : ''}
            w{size} h-{size}"
    />
</div>
