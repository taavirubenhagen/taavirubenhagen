<script lang="ts">
    import "$style";
    import { RawButton } from '$tavy';


    export let routes: string[][];
    export let routeChangingFunction: Function;
    function viewedRoute(r: string) {
        return r[0].toUpperCase() + r.slice(1);
    }
</script>




<br/>
{#each routes as r}
    <br/>
    <RawButton onClick={() => routeChangingFunction(r)}>
        {viewedRoute(r[0])}
    </RawButton>
    [{r[1].toUpperCase()}]
{/each}