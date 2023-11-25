<script lang="ts">
    import DeviceDetector from 'svelte-device-detector';

    import '$style';

    import {
        MediumParagraph,
        MediumSubtitle, LargeSubtitle,
        SmallHeading, MediumHeading, LargeHeading,
        InlineParagraphButton,
    } from '$tavy';
    import { Button } from '$tavy/industrial';

    let windowHeight: number;
    let currentlyHoveredElementName = "";

    function genTableIcon(name: string, isOnPrimary = false): string {
        const startString = '<i class="relative top-1 text-2xl ';
        switch (name) {
            case "none":
                return startString + 'text-red-600 iconoir-xmark"></i>';
            case "paid":
                return startString + 'text-red-600 iconoir-apple-mac"></i>';
            case "free":
                return startString + 'text-green-600 iconoir-check"></i>';
            
            case "remote":
                return startString + 'iconoir-pen-connect-wifi"></i>';
            case "control":
                return startString + 'iconoir-arrow-seperate"></i>';

            case "cards":
                return startString + 'iconoir-credit-cards"></i>';
            case "notes":
                return startString + 'iconoir-notes"></i>';
            
            case "timer":
                return startString + 'iconoir-timer"></i>';
            case "clock":
                return startString + 'iconoir-clock"></i>';
            
            case "abp":
                return startString + 'iconoir-dev-mode-phone"></i>';
            
            default:
                return '';
        }
    }
    function genTableIconArray(name: string): string[] {
        return new Array(10).fill(genTableIcon(name));
    }
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main>
    <section class="relative w-screen h-screen">
        <div class="w-screen h-screen p-4 md:p-16 center_col text-center">
            <LargeHeading>Hi, I'm Taavi<br />Rübenhagen.</LargeHeading>
            <div class="h-8"/>
            <LargeSubtitle>
                I'm a self-taught UI/UX Designer
                <br />
                and Front-End Engineer.
            </LargeSubtitle>
        </div>
    </section>
    <section class="w-screen min-h-screen flex flex-col-reverse md:flex-row md:items-center">
        <div class="w-full md:w-1/2 min-h-screen md:min-h-0 p-8 md:p-16 flex flex-col text-justify md:text-left">
            <div class="text-left">
                <MediumSubtitle>My largest project: </MediumSubtitle>
                <div class="h-4"></div>
                <MediumHeading
                    on:mouseenter={() => currentlyHoveredElementName = "presenter_headline"}
                    on:mouseleave={() => currentlyHoveredElementName = ""}
                >
                    Presentation Master 2
                </MediumHeading>
            </div>
            <div class="h-8"/>
            <MediumParagraph>
                What if you had all your presentation tools combined - remote control, note cards, timer and more?
                And what if it came for free, on a device you carry around everyday? Well, you don't have to imagine - just try it.
                A Better Presenter fixes the issues of it's predecessor,
                <InlineParagraphButton content="The Presentation Master"></InlineParagraphButton>
                , and lets you focus entirely on your presentation.
            </MediumParagraph>
            <div class="h-8"/>
            <Button openInNew onClick={() => window.location.href='https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'}>
                Android
            </Button>
            <Button openInNew borderClass='border-t-0' onClick={() => alert('Coming soon!')}>iOS</Button>
        </div>
        <div class="relative md:left-24 w-full md:w-1/2 md:h-screen px-4 py-8 md:py-32 flex">
            {#each ["md:right-0 md:hover:scale-[100.5%]", "md:right-32 md:z-20 md:scale-110 md:hover:scale-[110.5%]", "md:right-64 md:hover:scale-[100.5%]"] as e, i}
                {#if true}
                    <div class="{e} transition-all duration-400 relative md:grayscale md:hover:grayscale-0 rounded-3xl border border-onBackground w-full md:w-auto md:h-full aspect-[17/32] bg-background center_col">
                        <MediumParagraph>[Image]</MediumParagraph>
                    </div>
                    {#if i > 0}
                        <div class="w-8"></div>
                    {/if}
                {:else}
                    <img class="-ml-16" src={"/abp_drawing.png"} alt="">
                {/if}
            {/each}
        </div>
    </section>
    <section class="w-screen min-h-screen p-8 md:p-16 flex flex-col text-justify md:text-left">
        <MediumHeading>
            Presentation Master 2 vs physical presenter vs note cards vs timer
        </MediumHeading>
        <div class="h-12 md:h-16"/>
        <MediumParagraph>
            <div class="w-full flex flex-col">
                <div class="h-8 flex items-center">{@html genTableIcon("none")}<div class="inline w-2"></div>Not included</div>
                <div class="h-8 flex items-center">{@html genTableIcon("paid")}<div class="inline w-2.5"></div>Included, but not free</div>
                <div class="h-8 flex items-center">{@html genTableIcon("free")}<div class="inline w-2"></div>Free & Ready to use</div>
            </div>
        </MediumParagraph>
        <div class="h-8"/>
        <div class="rounded-lg border border-onBackground grid grid-cols-5 grid-rows-4">
            {#each [
                ["Feature", ""], ["Physical presenter", genTableIcon("remote")], ["Note cards", genTableIcon("cards")], ["Physical timer", genTableIcon("timer")], ["A Better Presenter", genTableIcon("abp")],
                ["Remote control", genTableIcon("control")], genTableIconArray("paid"), genTableIconArray("none"), genTableIconArray("none"), genTableIconArray("free"),
                ["Speaker notes", genTableIcon("notes")], genTableIconArray("none"), genTableIconArray("paid"), genTableIconArray("none"), genTableIconArray("free"),
                ["Time management", genTableIcon("clock")], genTableIconArray("none"), genTableIconArray("none"), genTableIconArray("paid"), genTableIconArray("paid"),
            ] as e, i}
                <div
                    class=
                        "relative
                        {i === 0 ? "rounded-tl-md" : ""} {i === 4 ? "rounded-tr-md" : ""} {i === 15 ? "rounded-bl-md" : ""} {i === 19 ? "rounded-br-md" : ""}
                        border border-onBackground min-w-32 h-16
                        {( i + 1 ) % 5 === 0 ? "primary" : ( i % 5 === 0 || i < 5 ? "bg-primary bg-opacity-5" : "background" )}
                        center_row truncate"
                    >
                    <MediumParagraph>
                        <DeviceDetector showInDevice="desktop">
                            {@html e[0]}
                        </DeviceDetector>
                        <DeviceDetector showInDevice="mobile">
                            {@html e[1]}
                        </DeviceDetector>
                    </MediumParagraph>
                </div>
            {/each}
        </div>
    </section>
    <!--<section class="w-screen h-screen p-8 md:p-16 center_col relative text-center">
        <!-.-<t3>Every aspect of any app on any platform.</t3>
        <div class="h-16" />
        <div class="center_row">
        {#each ['Mobile', 'Web', 'Server', 'Graphics', 'Deploy', 'Market'] as data}
            <a href="/me/design/tavy/icons">
            <div class="m-6 mb-12 shadow-xl rounded-2xl shadow-neutral-300 w-24 h-24 center_row">
                <!-.-TODO: Make icon stroke 1--.>
                <Icon isThin name="phone" iconClass="w-12 h-12 opacity-100"/>
            </div>
            <t6>{data}</t6>
            </a>
        {/each}
        </div>--.>
        <LargeHeading>Full Stack. Always.</LargeHeading>
        <div class="h-8"/>
        <LargeSubtitle>
            I design, develop and distribute my work. If I don't find a tool, I make one.
        </LargeSubtitle>
        <div class="h-4"/>
    </section>-->
    <section class="w-screen h-1/2 md:h-screen background p-8 md:p-16 center_col relative text-center">
        <SmallHeading>Contact me for any collaboration.</SmallHeading>
        <div class="h-16" />
        <Button onClick={() => window.location.href = 'mailto:taavi.ruebenhagen@gmail.com'}>E-Mail me</Button>
    </section>
</main>
