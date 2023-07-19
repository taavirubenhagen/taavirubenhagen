# Wie du einen Post erstellst

1. Erstelle einen neuen Ordner hier. Gib dem Projekt einen Namen und verändere ihn auf folgende Weise: "Offenes Kunstprojekt" -> "offenes-kunstprojekt". Das wird von nun an der ```name``` des Projekts sein.

2. Erstelle eine Datei ```name-des-projektes/data.json``` in diesem Ordner. Ihr Inhalt sollte so aussehen:

{
    "name": "name-des-projektes",
    "title": "Für Menschen gut lesbarer Titel",
    <!---"staticImageUrls": ["Die Namen der Bilder", "die du im Post verwenden möchtest", "und in den Projekt-Ordner eingefügt hast", "zum Beispiel", "bild.png"],
    "onlineImageUrls": ["Links zu", "Bildern aus dem Internet", "die du auch verwenden möchtest"],-->
    "texts": ["blog.md"]
}

3. Schreibe den Inhalt des Posts in eine Datei namens ```blog.md```, die du im neu entstandenen Ordner erstellen kannst, und formatiere sie mit [Markdown](https://www.markdownguide.org/cheat-sheet/).