<script lang="ts">
    import '$style';
    import {
        SmallHeading,
        MediumHeading,
        LargeHeading,
    } from '$tavy';
    import { Section } from "$tavy/website";
    import { Button, ButtonSeperator } from '$tavy/industrial';
</script>


<img src="/images/abstract.jpg" alt="" class="absolute h-screen object-cover">
<Section top className='center_col'>
    <Button onClick={() => window.location.href = '/admin'}>Enter</Button>
</Section>
<Section className='center_col gap-8'>
    <LargeHeading>Hi, I'm Taavi.</LargeHeading>
    <Button onClick={() => window.location.href = '/admin'}>Enter</Button>
</Section>
<Section className='p-16 center_col gap-8 text-center'>
    <SmallHeading>I'm an independent designer, developer, (artist), (activist) and entrepreneur</SmallHeading>
    <Button onClick={() => window.location.href = '/admin'}>Admin</Button>
</Section>