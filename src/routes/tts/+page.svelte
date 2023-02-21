<script lang="ts">
    import "$style"
    import "./tts.postcss"
  
    import TextButton from "$buttons/text_button.svelte"
    import { onMount } from "svelte";

    onMount(() => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Hello World";
        window.speechSynthesis.speak(msg);
    })
</script>




<main
    class="p-4 font-mono"
>
    <h3>Convert text to speech. Completely for free.</h3>
    <div class="h-8"></div>
    <TextButton>Speak</TextButton>
    <div class="h-8"></div>
    <TextButton>Download</TextButton>
</main>