<script lang="ts">
    //import { DeviceDetector } from "svelte-device-detector";

    import { B, Button, H2, Icon, Modal, P1, P2, P3 } from "../../lib";

    let helpModalIndex = 0;
</script>




<main class="relative max-w-screen min-h-screen p-8 flex flex-col justify-center items-start gap-16 text-left">
    <!--<DeviceDetector showInDevice="desktop">-->
        <H2>Presentation Master 2 for PC</H2>
        <div class="md:w-full flex flex-col md:flex-row md:justify-start items-start gap-8">
            <Button onClick={() => {}}><P2>
                <a download href="/presenter/Presentation Master 2.msi" class="transition duration-200 hover:scale-[101%] rounded-full h-20 bg-black px-8 flex items-center gap-4 text-white">
                    <Icon name="download" textClass="text-4xl md:text-5xl"/>
                    Download for Windows
                </a>
            </P2></Button>
            <!--{#each ["apple-mac", "linux"] as iconData}
                <Button onClick={() => {}}><P2>
                    <div
                        class=
                            "transition duration-100 hover:invert rounded-full border border-black w-20 h-20
                            bg-white px-8 {iconData == "linux" ? "pb-2" : "pb-1"} center_row"
                    >
                        <Icon name={iconData} textClass="text-4xl md:text-5xl"/>
                    </div>
                </P2></Button>
            {/each}-->
        </div>
        <div>
            <a target="_blank" href="https://www.youtube.com/watch?v=cctYDdnPzTU">
                <Button onClick={() => {}}>
                    <B><P3>Video tutorial <Icon name="open-new-window"/></P3></B>
                </Button>
            </a>
            <div class="h-4"></div>
            <Button onClick={() => helpModalIndex = 1}><B><P3>Will there be a MacOS version?</P3></B></Button>
            <div class="h-4"></div>
            <Button onClick={() => helpModalIndex = 2}><B><P3>Why am I getting antivirus warnings?</P3></B></Button>
        </div>
    <!--<DeviceDetector showInDevice="mobile">
        <div class=""><P1>Open this page on a Windows PC to download Presentation Master 2 Desktop</P1></div>
    </DeviceDetector>-->
</main>
<Modal open={helpModalIndex != 0} onDismissed={() => helpModalIndex = 0}>
    <div class="relative z-50 text-left">
        {#if helpModalIndex == 1}
            <P3>A MacOS version is planned, yet it is really hard to build because I don't have a Mac myself. If you want to help to make it happen, <B><a href="/main/contact">contact me</a></B>.</P3>
            <!--<P3>If you don't know what the symbols on the buttons mean, just click the "Download for Windows" button and you should be OK.</P3>-->
        {:else}
            <P3>
                In some cases, Presentation Master 2 produces false-positive warnings.<br/><br/>
                <B><a href="TODO: /contact">Contact me</a></B> if you want to make sure that I take full responsibility for the app's security.<br/><br/>
                I don't exactly know the reason for the antivirus warning,
                but it's probably that I did not buy an expensive security certificate to let the app be checked independently.
                This would be just a proof and changes nothing about the actual security though.
            </P3>
        {/if}
    </div>
</Modal>