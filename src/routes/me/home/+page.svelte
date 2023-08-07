<script lang="ts">
    import { onMount } from 'svelte';

    import DeviceDetector from 'svelte-device-detector';

    import '$style';

    import {
        PrimaryButtonLabel, SecondaryButtonLabel, TertiaryButtonLabel,
        SmallLabel,
        MediumLabel,
        SectionHeadline,
        MainHeadline,
        LargeSubtitle,
        LargeParagraph,

        Icon,
        InlineParagraphButton,
    } from '$tavy';
    import {TextButton} from '$util';

    let windowHeight: number;
    let currentlyHoveredElementName = "";

    function genTableIcon(name: string, isOnPrimary = false): string {
        const startString = '<i class="relative top-1 text-2xl ';
        switch (name) {
            case "none":
                return startString + 'text-red-600 iconoir-cancel"></i>';
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

    //onMount(() => scroller.scrollTo({y: 2 * windowHeight}));
</script>

<svelte:window bind:innerHeight={windowHeight} />

<main>
    <section class="relative w-screen h-screen">
        <!--<div class="absolute top-16 w-screen px-8 flex justify-between">
            <SmallLabel>
                <div class="transition-all duration-400 flex">
                    <div
                        class=
                            "transition-all duration-400
                            pointer-events-none
                            rounded-lg shadow-none hover:shadow focus-within:shadow
                            w-32 focus-within:w-full px-4 py-2
                            flex items-center text-neutral-500"
                    >
                        <Icon name="search" textClass="pointer-events-auto text-2xl"/>
                        <input
                            type="text"
                            size=8
                            placeholder="Search"
                            class="pointer-events-auto outline-none bg-transparent pl-2 text-onBackground placeholder:text-neutral-500"
                        />
                    </div>
                </div>
            </SmallLabel>
        </div>-->
        <div class="w-screen h-screen p-4 md:p-16 center_col text-center">
            <MainHeadline>Hi, I'm Taavi<br />Rübenhagen.</MainHeadline>
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
                <LargeSubtitle>My largest project: </LargeSubtitle>
                <MainHeadline
                    on:mouseenter={() => currentlyHoveredElementName = "presenter_headline"}
                    on:mouseleave={() => currentlyHoveredElementName = ""}
                >
                    A better presenter
                </MainHeadline>
            </div>
            <div class="h-8"/>
            <LargeParagraph>
                What if you had all your presentation tools combined - remote control, note cards, timer and more?
                And what if it came for free, on a device you carry around everyday? Well, you don't have to imagine - just try it.
                A Better Presenter fixes the issues of it's predecessor,
                <InlineParagraphButton content="The Presentation Master"></InlineParagraphButton>
                , and lets you focus entirely on your presentation.
            </LargeParagraph>
            <div class="h-8"/>
            <a href="/presenter/waitlist">
                <!--TODO: Add open-in-new icon-->
                <TextButton primary buttonClass="w-full">Join waitlist</TextButton>
            </a>
            <!--<div class="flex text-[32px]">
                <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 center_row">
                    <i class="iconoir-download"></i>
                </div>
                <div class="w-4"/>
                <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 center_row">
                    <i class="iconoir-download"></i>
                </div>
            </div>-->
        </div>
        <div class="relative md:left-24 w-full md:w-1/2 md:h-screen px-4 py-8 md:py-32 flex">
            {#each ["md:right-0 md:hover:scale-[100.5%]", "md:right-32 md:z-20 md:scale-110 md:hover:scale-[110.5%]", "md:right-64 md:hover:scale-[100.5%]"] as e, i}
                {#if true}
                    <div class="{e} transition-all duration-400 relative md:grayscale md:hover:grayscale-0 rounded-3xl border border-onBackground w-full md:w-auto md:h-full aspect-[17/32] bg-background center_col">
                        <MediumLabel>[Image]</MediumLabel>
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
        <SectionHeadline>
            A Better Presenter vs physical presenter vs note cards vs timer
        </SectionHeadline>
        <div class="h-12 md:h-16"/>
        <MediumLabel>
            <div class="w-full flex flex-col">
                <div class="h-8 flex items-center">{@html genTableIcon("none")}<div class="inline w-2"></div>Not included</div>
                <div class="h-8 flex items-center">{@html genTableIcon("paid")}<div class="inline w-2.5"></div>Included, but not free</div>
                <div class="h-8 flex items-center">{@html genTableIcon("free")}<div class="inline w-2"></div>Free & Ready to use</div>
            </div>
        </MediumLabel>
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
                    <MediumLabel>
                        <DeviceDetector showInDevice="desktop">
                            {@html e[0]}
                        </DeviceDetector>
                        <DeviceDetector showInDevice="mobile">
                            {@html e[1]}
                        </DeviceDetector>
                    </MediumLabel>
                </div>
            {/each}
        </div>
        <!--<div class="flex text-[32px]">
            <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 center_row">
                <i class="iconoir-download"></i>
            </div>
            <div class="w-4"/>
            <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 center_row">
                <i class="iconoir-download"></i>
            </div>
        </div>-->
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
        <MainHeadline>Full Stack. Always.</MainHeadline>
        <div class="h-8"/>
        <LargeSubtitle>
            I design, develop and distribute my work. If I don't find a tool, I make one.
        </LargeSubtitle>
        <div class="h-4"/>
    </section>-->
    <section class="w-screen h-1/2 md:h-screen background p-8 md:p-16 center_col relative text-center">
        <t3>Contact me for any collaboration.</t3>
        <div class="h-16" />
        <a href="mailto:taavi.ruebenhagen@gmail.com" class="center_row">
            <TextButton primary>E-Mail me</TextButton>
        </a>
    </section>
    <section class="w-screen h-screen background center_col">
        <t class="mt-8 text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-700">lol xD.</t>
    </section>
</main>
