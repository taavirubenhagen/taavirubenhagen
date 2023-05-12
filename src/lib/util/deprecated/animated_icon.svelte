<script lang="ts">
  import "$style"

  export let isWhite: boolean = false
  export let iconClass: string = ""
  export let path: string
</script>




<div>
  <canvas id="canvas" width="32" height="32" class="{iconClass} {isWhite ? "invert" : ""}"></canvas>
  <script src="https://unpkg.com/@rive-app/canvas@1.0.96"></script>
  <script>
    new rive.Rive({
      src: "./outfyx_icon_animations.riv",    // TODO: Make path
      canvas: document.getElementById("canvas"),
      autoplay: false,
    });
  </script>
</div>