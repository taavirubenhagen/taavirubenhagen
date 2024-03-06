<script lang="ts">
    import '$style';
    import {
        LargeHeading, MediumHeading,
        Section,
    } from "$tavy";
  import SmallParagraph from '$tavy/general/text/paragraphs/SmallParagraph.svelte';
    import {
        Button,
        TextSection,
    } from '$tavy/hoffmanns';
</script>


<div style='font-family: "Roboto Serif"'>
    <Section className='bg-green-100 p-8 flex flex-col justify-between'>
        <div>
            <MediumHeading>
                Direkte Beteiligung war noch nie so einfach.
                <br/><br/>
            </MediumHeading>
            <SmallParagraph>
                Unsere Aktien beteiligen dich direkt am Erfolg von Hoffmann's Schuppen.
                Für 5€ erhälst du eine Aktie, die dir Anspruch auf einen Anteil des Firmenkapitals gibt.
                Du kannst deine Aktien jederzeit wieder an uns zurückgeben
                und bekommst die bis dahin mit deinem Investment erzielten Gewinne ausgezahlt.
                <br/><br/>
                Die genauen Konditionen, die mit dem Aktienkauf einhergehen, findest du auf deinem Aktiendokument.
                Dieses wird beim Kauf ausgestellt und ist personalisiert, um Fälschungen zu vermeiden;
                du kannst hier aber ein Beispieldokument mit allen wichtigen Informationen herunterladen.
            </SmallParagraph>
        </div>
        <div class='mb-8 w-full flex flex-col gap-4'>
            <Button secondary download onClick={() => {}}>
                Beispielaktie
            </Button>
            <Button next onClick={() => {}}>
                Jetzt kaufen
            </Button>
        </div>
    </Section>
</div>