<script lang="ts">
    import { page } from '$app/stores';
    import '$style';
    import { Section } from "$tavy";
    import { TextField } from '$tavy/hoffmanns';

    const onPasswordSubmitted = (input: string) => {
        console.log(input);
        window.location.href = '/drafts/hoffmanns-schuppen/admin/access/' + input;
    };
</script>


<div style='font-family: "Roboto Slab";'>
    <Section className='center_col'>
        {#if $page.url.href.split('/').pop() == 'failed'}
            <div class="h-12"></div>
        {/if}
        <TextField
            autofocus
            onSubmit={onPasswordSubmitted}
            placeholder='Passwort'
        />
        {#if $page.url.href.split('/').pop() == 'failed'}
            <div class="mt-4 h-8 flex items-start text-error">
                Login fehlgeschlagen.
            </div>
        {/if}
    </Section>
</div>