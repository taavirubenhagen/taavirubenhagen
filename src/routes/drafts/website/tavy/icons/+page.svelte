<script lang='ts'>
    import {
        MediumHeading,
        Icon,
        Button,
        Section,
    } from '$tavy';
    import {
        tavyVersion,
    } from '$tavy/info';

    
    async function fetchIconNames() {
        const remoteIconFolderURL = `https://api.github.com/repositories/581311131/contents/static/tavy/icons/${tavyVersion}/svg`;
        const json = await ( await fetch(remoteIconFolderURL) ).json();
        let names = [];
        console.log(json);
        for (let i = 0; i < json.length; i++) {
            const parts = json[i].name.split('\.');
            if (parts[1] === 'svg') {
                names.push(parts[0]);
            }
        }
        return names;
}
</script>

<Section className='p-8 pt-32'>
    <div class='flex justify-between items-center'>
        <MediumHeading>tavy icons</MediumHeading>
        <a download href='/tavy/icons/{tavyVersion}/tavy-icons-{tavyVersion}.zip'>
            <Button onClick={() => {}}>
                download
            </Button>
        </a>
    </div>
    <div class="h-16"></div>
    {#await fetchIconNames()}
        <div>loading tavy icons...</div>
    {:then names}
        <div class='-mr-4 flex flex-wrap gap-4'>
            {#each names as name}
                <div class='rounded-lg shadow min-w-[4rem] aspect-square center_col'>
                    <Icon name={name} size={24}/>
                </div>
            {/each}
        </div>
    {/await}
</Section>