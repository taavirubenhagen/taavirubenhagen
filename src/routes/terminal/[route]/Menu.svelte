<script lang="ts">
    import "$style";
    import { Button } from '$tavy/minimal';


    export let routes: string[][];
    export let routeChangingFunction: Function;
    function viewedRoute(r: string) {
        return r[0].toUpperCase() + r.slice(1);
    }
</script>




<br/>
{#each routes as r}
    <br/>
    {#if r[2] === 'route'}
        <Button onClick={() => routeChangingFunction(r)}>
            {viewedRoute(r[0])}
        </Button>
        [{r[1].toUpperCase()}]
    {:else}
        <Button onClick={() => {}}>
            <a href={r[2]} target='blank'>
                {viewedRoute(r[0])}
            </a>
        </Button>
        [Shift+{r[1].toUpperCase()}]
    {/if}
{/each}