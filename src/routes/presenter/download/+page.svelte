<script lang="ts">
    import { LargeHeading, SmallParagraph, Icon } from "$tavy";
    import { Button, InlineButton } from "$tavy/industrial";
</script>




<main class="relative min-h-screen pointer-events-auto p-16 pt-24 text-left">
    <LargeHeading>Presentation Master 2 for PC</LargeHeading>
    <div class="h-16"></div>
    <SmallParagraph>
        1. Click the button to download the file, then open it to start the installation (A MacOS version is coming soon):
        <br/><br/>
        <Button onClick={() => window.location.href = '/presenter/Presentation Master 2.msi'}}>
            <!--<a download href="/presenter/Presentation Master 2.msi" class="transition duration-200 hover:scale-[101%] rounded-full h-16 bg-black px-8 flex items-center gap-4 text-white">-->
                <Icon name="download" textClass="text-3xl"/>
                Download for Windows
            <!--</a>-->
        </Button>
        <br/><br/>
        2. You might get antivirus warnings since I don't have the money to buy expensive security certificates for the app.
        If you are concerned about getting malware, just keep in mind that my contact info is public and shared with the app stores
        and I could therefore be made fully responsible if I tried to hack you.<br/><br/>
        3. Refer to the <span class="font-bold"><InlineButton onClick={() => window.location.href = 'https://youtu.be/zjYiOR03C8M'}>video tutorial<Icon name="open-new-window"/></InlineButton></span> if you don't know how to dismiss the warning.
        <span class="font-bold">If prompted, allow "Communication in private networks".</span> This is necessary since the communication between the devices uses WiFi.<br/><br/>
        4. Whenever you want to present, open this app as well as your PowerPoint presentation and use the mobile app to connect and control the presentation.<br/><br/>
        5. If you have any questions or concerns, feel free to contact me at taavi.ruebenhagen@gmail.com.<br/><br/>
    </SmallParagraph>
</main>