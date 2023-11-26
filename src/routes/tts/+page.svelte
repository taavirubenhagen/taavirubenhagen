<script lang="ts">
    import { onMount } from "svelte"
    import { fly } from "svelte/transition"

    import "$style"
    import "./tts.postcss"
  
    import TextButton from "$buttons/text_button.svelte"

    let voiceIndex = 3
    let speedInUI = 100
    let text = ""
    let msg: SpeechSynthesisUtterance
    let recorder: MediaRecorder
    let recorderResult: string

    let speak = async (volume = 1) => {
        if (!('speechSynthesis' in window)) {
            alert("Sorry, your browser does not support text-to-speech yet")
            return
        }
        if (!msg) {
            msg = new SpeechSynthesisUtterance(text)
            msg.onend = (_) => recorder.state == "recording" ? recorder.stop() : _
        }
        msg.text = text
        msg.volume = Math.round(volume)
        msg.voice = window.speechSynthesis.getVoices()[voiceIndex]
        msg.rate = Math.fround(( speedInUI / 100 ) ** 2 + 0.05)
        window.speechSynthesis.speak(msg)
    }

    onMount(() => {
        navigator.mediaDevices.getUserMedia({audio: true})
        .then((stream) => {
            recorder = new MediaRecorder(stream, {mimeType: 'audio/webm'})
            recorder.ondataavailable = (e) => {
                recorderResult = URL.createObjectURL(e.data)
            };
        })
        .catch((err) => console.error(`Error setting up the media recorder: ${err}`))
    })
</script>




<svelte:head></svelte:head>




<main
    class="h-screen p-16 flex flex-col justify-between font-mono"
>
    <div class="flex sm:flex-col justify-between">
        <div>
            <t3>Convert text to speech.</t3>
            <div class="h-16"></div>
        </div>
        <div class="flex justify-between">
            <div class="flex flex-wrap items-start justify-start gap-1">
                <t1 class="mr-4 h-12 center_row">Voice</t1>
                {#each Array(10) as _, i}
                    <button
                        on:click={() => voiceIndex = i}
                        class=
                            "transition-all
                            rounded-lg border hover:border-2 border-primary w-12 h-12
                            {voiceIndex == i ? "primary" : ""}"
                    >
                        {i + 1}
                    </button>
                {/each}
            </div>
            <div class="flex">
                <button on:click={() => speedInUI = 100}>X</button>
                <div class="w-8"></div>
                <input
                    bind:value={speedInUI}
                    type="range"
                    min={30}
                    max={300}
                    class="accent-primary"
                />
            </div>
        </div>
    </div>
    <textarea
        bind:value={text}
        class="my-16 rounded-lg border border-primary w-full h-full p-4"
        placeholder="Enter your text here. You can convert as much text as you like - for free."
    />
    <div class="grid grid-cols-2 gap-8">
        <TextButton
            onClicked={() => speak(1)}
        >
            Listen only
        </TextButton>
        <div class="flex">
            <TextButton
            buttonClass="w-full"
                onClicked={() => {
                    if (recorder.state != "recording") {
                        recorder.start()
                    }
                    speak(1)
                }}
            >
                Listen & Download
            </TextButton>
            {#if recorderResult}
                <button in:fly={{duration: 1600}}>
                    <a
                        download="Recorded Audio"
                        href={recorderResult}
                        class="transition-all ml-8 hover:invert rounded-full border-2 border-primary w-14 h-14 background center_row"
                    >
                        ✓
                    </a>
                </button>
            {/if}
        </div>
    </div>
</main>
<footer class="h-16 primary center_row font-mono">
    <a href="/legal/contact">
        <t1>Contact</t1>
    </a>
</footer>