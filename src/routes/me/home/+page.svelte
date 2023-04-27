<script lang="ts">
    import { onMount } from 'svelte';

    import DeviceDetector from 'svelte-device-detector'
    import * as scroller from 'svelte-scrollto';

    import '$style';

    import {
        PrimaryButtonLabel, SecondaryButtonLabel, TertiaryButtonLabel,
        SmallLabel,
        SectionHeadline,
        MainHeadline,
        LargeSubtitle,
        LargeParagraph,
        InlineParagraphButton,
    } from '$tavy';
    import {TextButton} from '$util';

    let windowHeight: number;
    let currentlyHoveredElementName = "";

    function genTableIcon(name: string, isOnPrimary = false): string {
        switch (name) {
            case "none":
                return '<i class="text-2xl text-red-600 iconoir-cancel"></i>';
            case "paid":
                return '<i class="text-xl text-red-600 iconoir-apple-mac"></i>';
            case "free":
                return '<i class="text-2xl text-green-600 iconoir-check"></i>';
            case "remote":
                return '<i class="text-2xl ' + isOnPrimary ? 'text-onPrimary' : 'text-onBackground' + ' iconoir-check"></i>';
            case "notes":
                return '<i class="text-2xl ' + isOnPrimary ? 'text-onPrimary' : 'text-onBackground' + ' iconoir-notes"></i>';
            case "timer":
                return '<i class="text-2xl ' + isOnPrimary ? 'text-onPrimary' : 'text-onBackground' + ' iconoir-alarm"></i>';
            case "abp":
                return '<i class="text-2xl ' + isOnPrimary ? 'text-onPrimary' : 'text-onBackground' + ' iconoir-alarm"></i>';
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
    <section class="w-screen h-screen p-4 md:p-16 flex_col_center text-center">
        <MainHeadline>Hi, I'm Taavi<br />Rübenhagen.</MainHeadline>
        <div class="h-8"/>
        <LargeSubtitle>
            I'm a self-taught UI/UX Designer
            <br />
            and Front-End Engineer.
        </LargeSubtitle>
        <div class="h-4"/>
    </section>
    <section class="w-screen min-h-screen flex flex-col-reverse md:flex-row md:items-center">
        <div class="w-full md:w-1/2 min-h-screen md:min-h-0 p-8 md:p-16 flex flex-col md:justify-center items-start text-justify md:text-left">
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
            <TextButton>Join waitlist</TextButton>
            <!--<div class="flex text-[32px]">
                <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 flex_row_center">
                    <i class="iconoir-download"></i>
                </div>
                <div class="w-4"/>
                <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 flex_row_center">
                    <i class="iconoir-download"></i>
                </div>
            </div>-->
        </div>
        <div class="relative md:left-16 w-full md:w-1/2 md:h-screen px-4 py-8 md:py-32 flex">
            <!--TODO: Encapsulate in "[Image]" component-->
            <div class="transition-all duration-400 relative bottom-0 md:hover:bottom-1 rounded-lg border border-onBackground w-full md:w-auto md:h-full aspect-[9/16] bg-background flex_col_center">
                <SmallLabel>[Image]</SmallLabel>
            </div>
            <div class="w-8"></div>
            <div class="transition-all duration-400 relative md:right-32 bottom-0 md:hover:bottom-1 rounded-lg border border-onBackground w-full md:w-auto md:h-full aspect-[9/16] bg-background flex_col_center">
                <SmallLabel>[Image]</SmallLabel>
            </div>
            <div class="w-8"></div>
            <div class="transition-all duration-400 relative md:right-64 bottom-0 md:hover:bottom-1 rounded-lg border border-onBackground w-full md:w-auto md:h-full aspect-[9/16] bg-background flex_col_center">
                <SmallLabel>[Image]</SmallLabel>
            </div>
        </div>
    </section>
    <section class="w-screen min-h-screen p-8 md:p-16 flex flex-col text-justify md:text-left">
        <SectionHeadline>
            A Better Presenter vs physical presenter vs note cards vs timer
        </SectionHeadline>
        <div class="h-12 md:h-16"/>
        <SmallLabel>
            <div class="w-full flex flex-col">
                <div class="h-8 flex items-center">{@html genTableIcon("none")}<div class="inline w-2"></div>Not included</div>
                <div class="h-8 flex items-center">{@html genTableIcon("paid")}<div class="inline w-2.5"></div>Included, but not free</div>
                <div class="h-8 flex items-center">{@html genTableIcon("free")}<div class="inline w-2"></div>Free & Ready to use</div>
            </div>
        </SmallLabel>
        <div class="h-8"/>
        <div class="rounded-lg border border-onBackground grid grid-cols-5 grid-rows-4">
            {#each [
                ["Feature", ""], ["Physical presenter", genTableIcon("remote")], ["Note cards", genTableIcon("notes")], ["Physical timer", genTableIcon("timer")], ["A Better Presenter", genTableIcon("abp")],
                ["Remote control", genTableIcon("remote")], genTableIconArray("paid"), genTableIconArray("none"), genTableIconArray("none"), genTableIconArray("free"),
                ["Speaker notes", genTableIcon("notes")], genTableIconArray("none"), genTableIconArray("paid"), genTableIconArray("none"), genTableIconArray("free"),
                ["Time management", genTableIcon("timer")], genTableIconArray("none"), genTableIconArray("none"), genTableIconArray("paid"), genTableIconArray("paid"),
            ] as e, i}
                <div
                    class=
                        "{i === 0 ? "rounded-tl-md" : ""} {i === 4 ? "rounded-tr-md" : ""} {i === 15 ? "rounded-bl-md" : ""} {i === 19 ? "rounded-br-md" : ""}
                        border border-onBackground min-w-32 h-16
                        {( i + 1 ) % 5 === 0 ? "primary" : ( i % 5 === 0 || i < 5 ? "bg-primary bg-opacity-5" : "background" )}
                        flex_row_center truncate"
                    >
                    <SmallLabel>
                        <DeviceDetector showInDevice="desktop">
                            {@html e[0]}
                        </DeviceDetector>
                        <DeviceDetector showInDevice="mobile">
                            {@html e[1]}
                        </DeviceDetector>
                    </SmallLabel>
                </div>
            {/each}
        </div>
        <!--<div class="flex text-[32px]">
            <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 flex_row_center">
                <i class="iconoir-download"></i>
            </div>
            <div class="w-4"/>
            <div class="transition-all duration-200 opacity-100 hover:opacity-60 rounded-full border-2 border-onBackground w-12 h-12 flex_row_center">
                <i class="iconoir-download"></i>
            </div>
        </div>-->
    </section>
    <!--<section class="w-screen h-screen p-8 md:p-16 flex_col_center relative text-center">
        <!-.-<h3>Every aspect of any app on any platform.</h3>
        <div class="h-16" />
        <div class="flex_row_center">
        {#each ['Mobile', 'Web', 'Server', 'Graphics', 'Deploy', 'Market'] as data}
            <a href="/me/design/tavy/icons">
            <div class="m-6 mb-12 shadow-xl rounded-2xl shadow-neutral-300 w-24 h-24 flex_row_center">
                <!-.-TODO: Make icon stroke 1--.>
                <Icon isThin name="phone" iconClass="w-12 h-12 opacity-100"/>
            </div>
            <h6>{data}</h6>
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
    <section
        class=
            "w-screen h-1/2 md:h-screen background p-8 md:p-16 flex_col_center relative
            text-center"
    >
        <h3>Contact me for any collaboration.</h3>
        <div class="h-16" />
        <a href="mailto:taavi.ruebenhagen@gmail.com" class="flex_row_center">
            <TextButton primary>E-Mail me</TextButton>
        </a>
    </section>
    <section
        class=
            "w-screen h-screen background flex_col_center"
    >
        <h class="mt-8 text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-700">lol xD.</h>
    </section>
</main>
