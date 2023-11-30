<script lang="ts">
  import { page } from '$app/stores';
    import '$style';
    import { TertiaryButton } from '$tavy/industrial';

    const routes = $page.url.href.split('/').slice(3);
    console.log(routes);

    function buildRoute(subroute: string) {
        let outputRoute: string = '';
        for (let r in routes) {
            outputRoute += '/'.concat(r);
            console.log('r', r);
            if (r === subroute) {
                return outputRoute;
            }
        }
        return '/';
    }

    for (let r in routes) {
        //console.log(buildRoute(r));
    }
</script>


<div class="absolute top-8 h-8 center_row">
    {#each ['home'].concat(routes) as subroute, i}
        {#if i != 0}
            &nbsp;>&nbsp;
        {/if}
        <TertiaryButton onClick={() => window.location.href = 'buildRoute(subroute)'}>{subroute}</TertiaryButton>
    {/each}
</div>