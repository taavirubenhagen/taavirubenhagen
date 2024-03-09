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
    <Button onClick={() => routeChangingFunction(r)}>
        {viewedRoute(r[0])}
    </Button>
    [{r[1].toUpperCase()}]
{/each}