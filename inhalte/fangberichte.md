# Fangberichte

Blog **„Fangberichte“** (Handle `fangberichte`, Vorlage für Beiträge: `article.fangbericht`). Menüpunkt „Fänge“ → `/blogs/fangberichte`. Auf der Startseite zeigt „Frisch gefangen“ die neuesten 4.

## Einmalig: Metafelder für Blogbeiträge anlegen

Einstellungen → Benutzerdefinierte Daten → Blogbeiträge → Definition hinzufügen (Namespace `custom`):

| Name | Schlüssel | Typ |
|---|---|---|
| Fisch | `custom.fisch` | Einzeiliger Text |
| Länge (cm) | `custom.laenge_cm` | Ganzzahl |
| Gewicht (kg) | `custom.gewicht_kg` | Dezimalzahl |
| Angelmethode | `custom.methode` | Einzeiliger Text (z. B. Spinnfischen) |
| Fangzeit | `custom.fangzeit` | Datum – angezeigt wird nur Monat und Jahr |
| Region | `custom.region` | Einzeiliger Text – **nur die Region, nie das genaue Gewässer** (z. B. „Lech, Raum Augsburg“). Wichtig für Google und KI-Suche |
| Gefangen von | `custom.angler` | Einzeiliger Text – Name oder Instagram-Name mit @ (z. B. `@koderdepot`), dann wird er verlinkt |
| Instagram-Beitrag | `custom.instagram` | URL – Link zum Post, erscheint als Button „Auf Instagram ansehen“ |
| Weitere Fotos | `custom.bilder` | Datei (Liste), nur Bilder |
| Ausrüstung | `custom.ausruestung` | Produkt (Liste) – **erstes Produkt = der Köder** |
| Passende Ausrüstung | `custom.empfehlung` | Produkt (Liste) – nur wenn nicht mehr bekannt ist, womit gefangen wurde; erscheint als „Passende Ausrüstung“ statt „Damit gefangen“ |

Leere Felder werden im Bericht einfach nicht angezeigt.

Unter jedem Bericht und auf der Übersicht steht „Zeig uns deinen Fang“: Kunden sollen @koderdepot auf ihrem Fangfoto markieren. Markierte Fänge von Kunden legt ihr als neuen Bericht an (mit Einverständnis), „Gefangen von“ = deren @Name, „Instagram-Beitrag“ = Link zum Post.

## Neuer Fang (jedes Mal)

1. Onlineshop → Blogbeiträge → Beitrag hinzufügen, Blog „Fangberichte“, Vorlage `fangbericht`.
2. Titel (z. B. „Hecht auf Tiefenschwinger“), Text, Titelbild (Hochformat).
3. Unten bei den Metafeldern: Fisch, Länge, Gewicht, Gewässer, weitere Fotos, Ausrüstung (Köder zuerst).

## Bericht 1: Hecht 90 cm auf Tiefenschwinger

- Fotos: `bilder/faenge/fang-hecht-1.jpg` (Titelbild), `fang-hecht-2.jpg`, `fang-hecht-3.jpg`
- Titel: **Hecht 90 cm auf Tiefenschwinger**
- Fischart: Hecht · Größe: 90 · Gewicht: 6 · Angelmethode: Spinnfischen · Fangzeit: 26.07.2026 · Region: Lech, Raum Augsburg
- Ausrüstung: Tiefenschwinger (Köder), Kraftrute Spinn 2,44 m, Stromjäger 2800, Silberleine, Snap-Set
- Text: „Ein Sommerabend Ende Juli am Lech im Raum Augsburg: Beim Spinnfischen schnappt sich dieser Hecht den Tiefenschwinger – 90 cm und 6 kg. Gefischt haben wir mit der Kraftrute Spinn 2,44 m und der Stromjäger 2800, bespult mit Silberleine. Der Köder hing am Snap aus unserem Snap-Set.“
- Suchmaschinen-Titel: „Hecht 90 cm auf Tiefenschwinger – Fangbericht vom Lech bei Augsburg | Köderdepot“
- Suchmaschinen-Beschreibung: „90 cm, 6 kg: Dieser Hecht biss beim Spinnfischen am Lech im Raum Augsburg auf den Tiefenschwinger. Rute, Rolle, Schnur und Köder aus dem Fang gibt es bei Köderdepot.“
- Das genaue Gewässer wird bewusst nirgends genannt (auch nicht in Bildnamen oder Alt-Texten).
- Gefangen von: `@koderdepot`
- **Offen:** Link zum Instagram-Post, falls vorhanden.

## Bericht 2: Forellen auf Kompaktblitz und Silberflucht

- Fotos: `bilder/faenge/fang-forelle-1.jpg` (Titelbild), `fang-forelle-2.jpg`
- Fischart: Forelle · Angelmethode: Spinnfischen · Region: Lech, Raum Landsberg · Gefangen von: `@koderdepot`
- Ausrüstung: Kompaktblitz (Köder), Silberflucht, Allroundrute Spinn 2,1 m, Uferrolle 1500, Grünklinge
- Text: „Forellen aus dem Lech im Raum Landsberg: gebissen haben sie auf Kompaktblitz und Silberflucht. Gefischt haben wir leicht mit der Allroundrute Spinn 2,1 m und der Uferrolle 1500, bespult mit Grünklinge.“
- Suchmaschinen-Titel: „Forellen auf Kompaktblitz und Silberflucht – Fangbericht vom Lech bei Landsberg | Köderdepot“
- Suchmaschinen-Beschreibung: „Forellen aus dem Lech im Raum Landsberg, gefangen beim Spinnfischen auf Kompaktblitz und Silberflucht. Rute, Rolle und Schnur aus dem Fang gibt es bei Köderdepot.“
- Das genaue Gewässer/der Ort wird bewusst nicht genannt.
- **Offen (optional):** Länge, Datum, Köderfarben, Link zum Instagram-Post.

## Bericht 3: Forelle am Bach

- Foto: `bilder/faenge/fang-forelle-bach-1.jpg` (Titelbild)
- Fischart: Forelle · Angelmethode: Spinnfischen (Empfehlung) · keine weiteren Angaben
- Ausrüstung: nicht bekannt → **Passende Ausrüstung** (`custom.empfehlung`): Leichtblitz (Spinner), Feinschwimmer (Wobbler), Zartläufer (Crankbait), Allroundrute Spinn 2,1 m, Uferrolle 1500, Grünklinge
- Text: „Keine Messlatte, kein Protokoll – nur ein breites Grinsen und eine schöne Forelle. Zu diesem Fang haben wir keine genauen Angaben mehr. Wenn wir heute an so einem Bach losziehen, dann leicht: kurze Spinnrute, kleine Rolle, dünne Schnur und kleine Köder, die gegen die Strömung laufen.“
- Die Person auf dem Foto ist gut zu erkennen: bitte deren Einverständnis einholen.

## Bericht 4: Wels

- Foto: `bilder/faenge/fang-wels-1.jpg` (Titelbild) – zugeschnitten, Straße und Nachbarhäuser entfernt bzw. unscharf.
- Fischart: Wels · keine weiteren Angaben
- Ausrüstung: nicht bekannt → **Passende Ausrüstung** (`custom.empfehlung`): Großräuber (Swimbait), Kraftklinge (Wobbler), Kraftrute Spinn 2,44 m, Stromjäger 5800, Silberleine, Kraftzange 28 cm
- Text: „Ein Wels wie aus dem Bilderbuch – leider ohne Maßband und Notizen, genaue Angaben zu diesem Fang haben wir nicht mehr. Wer gezielt auf Wels geht, braucht kräftiges Gerät: eine starke Rute, eine große Rolle mit belastbarer geflochtener Schnur und große Köder, die Druck machen.“
- Die Person auf dem Foto ist gut zu erkennen: bitte deren Einverständnis einholen.

## Bericht 5: Kapitaler Hecht aus dem Archiv

- Foto: `bilder/faenge/fang-hecht-archiv-1.jpg` (Titelbild)
- Fischart: Hecht · keine weiteren Angaben
- Ausrüstung: nicht bekannt → **Passende Ausrüstung** (`custom.empfehlung`): Großräuber (Swimbait), Schwerläufer (Jerkbait), Kraftrute Spinn 2,44 m, Stromjäger 2800, Silberleine, Kraftzange 28 cm
- Text: „Ein kapitaler Hecht aus unserem Archiv. Genaue Angaben zu diesem Fang haben wir nicht mehr. Für Hechte dieser Größe: eine kräftige Spinnrute, belastbare geflochtene Schnur, große Köder – und immer ein Stahl- oder Titanvorfach.“
- Hinweis: Im Hintergrund ist ein markantes Wehr zu sehen. Wenn der Ort geheim bleiben soll, schneide ich das Foto enger zu.
- Die Person auf dem Foto ist gut zu erkennen: bitte deren Einverständnis einholen.
