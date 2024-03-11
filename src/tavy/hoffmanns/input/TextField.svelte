<script lang="ts">
    import '$style';
    import { Icon, MediumParagraph } from '$tavy';
    import { RawButton } from '$tavy';

    export let inverted = false;
    export let autofocus = false;
    export let onSubmit: any;
    export let placeholder = '';

    let input = '';
</script>


<MediumParagraph>
    <div class='flex'>
       <div class="{inverted ? 'invert' : ''} rounded-l-lg border-2 border-green-900">
           <!--Text size should match MediumParagraph-->
           <!-- svelte-ignore a11y-autofocus -->
           <input
               type='text' autofocus={autofocus}
               class='rounded-l-lg outline-none h-full px-1 text-xl'
               placeholder={placeholder}
               bind:value={input}
               on:keypress={(event) => event.key === 'Enter' ? onSubmit(input) : null}
           />
       </div>
       <RawButton onClick={() => onSubmit(input)}>
            <div class='rounded-r-lg bg-green-900 w-12 h-12 pr-1 center_row'>
                <Icon inverted name="arrow-forward"/>
            </div>
       </RawButton>
    </div>
</MediumParagraph>