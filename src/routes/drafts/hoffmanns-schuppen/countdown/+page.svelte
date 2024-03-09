<script lang="ts">
    import '$style';
    import {
        LargeHeading, MediumHeading,
        Section,
    } from "$tavy";
    import { onMount } from 'svelte';

    let now, end;
    let
        distance: number,
        days: any,
        hours: any,
        minutes: any,
        seconds: any;

    function updateCountdown() {
        function calcTimeUnit(prevDivider: number, divider: number) {
            const result = Math.floor(( distance % prevDivider ) / divider);
            return result / 10 < 1 ? '0' + result.toString() : result;
        }

        now = new Date();
        end = new Date('04/01/2024 12:00 AM');
        distance = end.getTime() - now.getTime();
        days = calcTimeUnit(31_556_952_000, 86_400_000);
        hours = calcTimeUnit(86_400_000, 3_600_000);
        minutes = calcTimeUnit(3_600_000, 60_000);
        seconds = calcTimeUnit(60_000, 1_000);
    }
    setInterval(updateCountdown, 1000);

    onMount(updateCountdown);
</script>


<div style='font-family: "Roboto Serif"'>
    <Section className='bg-green-900 center_col text-white'>
        <div class='flex flex-col gap-2'>
            <t class="text-5xl md:text-7xl font-bold tracking-wider">
                {days}:{hours}:{minutes}:{seconds}
            </t>
            <div class='w-full grid grid-cols-4 text-xs text-white'>
                <div class='center_row'>Tage</div>
                <div class='center_row'>Stunden</div>
                <div class='center_row'>Minuten</div>
                <div class='center_row'>Sekunden</div>
            </div>
        </div>
    </Section>
</div>