<script lang="ts">
    import '$style';
    import { Icon, MediumParagraph } from '$tavy';
    import { Button } from '.';

    export let inverted = false;
    export let autofocus = false;
    export let onSubmit: any;
    export let placeholder = '';

    let input = '';
</script>


<MediumParagraph>
    <div class='flex'>
       <div class="{inverted ? 'invert' : ''} border-2 border-primary">
           <!--Text size should match MediumParagraph-->
           <!-- svelte-ignore a11y-autofocus -->
           <input
               type='text' autofocus={autofocus}
               class='outline-none h-full px-1 text-xl'
               placeholder={placeholder}
               bind:value={input}
               on:keypress={(event) => event.key === 'Enter' ? onSubmit(input) : null}
           />
       </div>
       <Button borderClass='border-l-0' onClick={() => onSubmit(input)}>
           <Icon name="arrow-forward"/>
       </Button>
    </div>
</MediumParagraph>