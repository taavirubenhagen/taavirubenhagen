<script lang="ts">
    import { page } from '$app/stores';
    import '$style';
    import { Section } from "$tavy";
    import { TextField } from '$tavy/industrial';

    const onPasswordSubmitted = (input: string) => {
        console.log(input);
        window.location.href = '/admin/access/' + input;
    };
</script>


<Section>
    {#if $page.url.href.split('/').pop() == 'failed'}
        <div class="h-8 flex items-start text-error">
            Login failed.
        </div>
    {/if}
    <TextField
        autofocus
        onSubmit={onPasswordSubmitted}
        placeholder='Password'
    />
    {#if $page.url.href.split('/').pop() == 'failed'}
        <div class="h-8"></div>
    {/if}
</Section>