<script lang='ts'>
    import {
        MediumHeading,
        Icon,
        Button,
    } from '$tavy';
    import {
        Section,
    } from '$tavy';

    
    async function fetchIconNames() {
        const remoteIconFolderURL = 'https://api.github.com/repositories/581311131/contents/src/lib/tavy/general/icons/2024-03';
        const json = await ( await fetch(remoteIconFolderURL) ).json();
        let names = [];
        console.log(json[0].name);
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
        <a download href="/presenter/Presentation Master 2.msi">
            <Button download onClick={() => {}}>
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