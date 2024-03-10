<script lang="ts">
    import '$style';
    import { Button } from '..';

    export let contactLink: string;
    export let ppLink: string;
</script>


<div class='w-full grid grid-cols-2'>
    <Button borderClass='border-l-0 border-b-0' onClick={() => window.location.href = contactLink}>Contact</Button>
    <Button borderClass='border-l-0 border-b-0' onClick={() => window.location.href = ppLink}>Privacy Policy</Button>
</div>