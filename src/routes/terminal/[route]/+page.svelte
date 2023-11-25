<script lang="ts">
    import DeviceDetector from "svelte-device-detector";
    import { page } from '$app/stores';
    import { cursorButtonHover } from "$state";
    import "$style";
    import Button from '../Button.svelte';
    import Menu from "./Menu.svelte";

    let windowHeight: number;
    let localCursorButtonHover: boolean;
    cursorButtonHover.subscribe((value: boolean) => {
        localCursorButtonHover = value;
    });
    let keyInput: HTMLElement;


    let route = 'home';
    const contactRoutes = [
        ['email', 'c', 'mailto:taavi.ruebenhagen@gmail.com'],
    ];
    const homeRoutes = [
        ['about', 'a', 'route'],
        ['contact', 'c', 'route'],
        ['home', 'h', 'route'],
        ['projects', 'p', 'route'],
        ['search', 's', 'route'],
    ];
    const projectRoutes = [
        ['website', 'h', 'route'],
        ['fenni', '1', 'https://fenni.me'],
        ['presenter', '2', 'https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2'],
    ];
    const validRoutes = [...homeRoutes, ...projectRoutes];

    function routeChangingFunction(newRouteData: string[]) {
        route = newRouteData[0];
    }

    if (validRoutes.map(e => e[0]).includes($page.params.route)) {
        route = $page.params.route;
    }

    function onKeyPressed(e: KeyboardEvent) {
        console.log('Key pressed: ' + e.key);
        if (e.key == 'x') {
            route = 'home';
        }
        for (let i = 0; i < validRoutes.length; i++) {
            if (e.key == validRoutes[i][1] && ( validRoutes[i][2] !== 'route') === e.shiftKey) {
                route = validRoutes[i][0];
            }
        }
    }
</script>


<svelte:window bind:innerHeight={windowHeight}/>


<main
    on:click={(_) => keyInput.focus()}
    on:keypress|preventDefault={onKeyPressed}
    class="overflow-hidden cursor-none"
>
    <!-- svelte-ignore a11y-autofocus -->
    <DeviceDetector showInDevice="desktop">
        <input bind:this={keyInput} type='text' autofocus class='absolute -z-40'/>
    </DeviceDetector>
    <div class='h-screen p-4 bg-black selection:bg-neutral-300 text-base text-white selection:text-black font-mono'>
        <div class='text-neutral-500 font-bold'>
            <Button onClick={() => route = 'home'}>
                Taavi Rübenhagen
            </Button>
            > {route[0].toUpperCase() + route.slice(1)}
        </div>
        <br/>
        Hi, I'm Taavi Rübenhagen. This website is still under development.
        <br/>
        Press the keys in brackets on your keyboard for quick navigation.
        {#if route === 'about'}
            <br/><br/>
            I'm an 18-year-old self-taught entrepreneur, frontend developer and UI/UX designer. My
            <Button onClick={() => route = 'projects'}>
                projects
            </Button>
            [P] include multiple Android and iOS apps and websites.
            I'm also freelancing and currently starting an affiliate marketing business.
        {:else if route === 'contact'}
            <br/><br/>
            Imprint:
            <br/><br/>
            Taavi Rübenhagen
            <br/>
            Pothof 9d, 38122 Braunschweig, Germany
            <Menu routes={contactRoutes} routeChangingFunction={routeChangingFunction}/>
        {:else if route === 'home' || route === 'website'}
            <Menu routes={homeRoutes} routeChangingFunction={routeChangingFunction}/>
        {:else if route === 'projects'}
            <br/>
            {#each projectRoutes as r}
                <Menu routes={projectRoutes} routeChangingFunction={routeChangingFunction}/>
            {/each}
        {:else}
            <br/><br/>
            404: Page not found
            <br/>
            <Button onClick={() => route = 'home'}>
                Return home
            </Button>
            [X]
        {/if}
    </div>
</main>