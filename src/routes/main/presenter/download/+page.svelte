<script lang="ts">
    import { B, Button, H2, Icon, Modal, P1, P2, P3 } from "../../lib";

    let helpModalIndex = 0;
</script>




<main class="relative max-w-screen min-h-screen p-8 flex flex-col justify-center items-start gap-16 text-left">
    <!--TODO: Change name-->
    <H2>XD Presenter for PC</H2>
    <div class="md:w-full flex flex-col md:flex-row md:justify-start items-start gap-8">
        <Button onClick={() => {}}><P2>
            <a download href="/presenter/xd_presenter.msi" class="transition duration-200 hover:scale-[101%] rounded-full h-20 bg-black px-8 flex items-center gap-4 text-white">
                <Icon name="download" textClass="text-4xl md:text-5xl"/>
                Download for Windows
            </a>
        </P2></Button>
        {#each ["apple-mac", "linux"] as iconData}
            <Button onClick={() => {}}><P2>
                <div
                    class=
                        "transition duration-100 hover:invert rounded-full border border-black w-20 h-20
                        bg-white px-8 {iconData == "linux" ? "pb-2" : "pb-1"} center_row"
                >
                    <Icon name={iconData} textClass="text-4xl md:text-5xl"/>
                </div>
            </P2></Button>
        {/each}
    </div>
    <div>
        <a href="https://www.youtube.com/watch?v=cctYDdnPzTU">
            <Button onClick={() => {}}>
                <B><P3>Video tutorial <Icon name="open-new-window"/></P3></B>
            </Button>
        </a>
        <div class="h-4"></div>
        <Button onClick={() => helpModalIndex = 1}><B><P3>Why are there 3 different download buttons?</P3></B></Button>
        <div class="h-4"></div>
        <Button onClick={() => helpModalIndex = 2}><B><P3>Why am I getting antivirus warnings?</P3></B></Button>
    </div>
</main>
<Modal open={helpModalIndex != 0} onDismissed={() => helpModalIndex = 0}>
    <div class="text-left">
        {#if helpModalIndex == 1}
            <P3>If you don't know what the symbols on the buttons mean, just click the "Download for Windows" button and you should be OK.</P3>
        {:else}
            <P3>
                In some cases, XD Presenter produces false-positive warnings.<br/><br/>
                <B><a href="TODO: /contact">Contact me</a></B> if you want to make sure that I take full responsibility for the app's security.<br/><br/>
                I don't exactly know the reason for the antivirus warning,
                but it's probanly that I did not buy an expensive security certificate to let the app be checked independently.
                This would be just a proof and changes nothing about the actual security though.
            </P3>
        {/if}
    </div>
</Modal>