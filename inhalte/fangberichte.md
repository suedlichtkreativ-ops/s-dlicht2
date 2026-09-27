# Fangberichte

Blog **„Fangberichte“** (Handle `fangberichte`, Vorlage für Beiträge: `article.fangbericht`). Menüpunkt „Fänge“ → `/blogs/fangberichte`. Auf der Startseite zeigt „Frisch gefangen“ die neuesten 4.

## Einmalig: Metafelder für Blogbeiträge anlegen

Einstellungen → Benutzerdefinierte Daten → Blogbeiträge → Definition hinzufügen (Namespace `custom`):

| Name | Schlüssel | Typ |
|---|---|---|
| Fisch | `custom.fisch` | Einzeiliger Text |
| Länge (cm) | `custom.laenge_cm` | Ganzzahl |
| Gewicht (kg) | `custom.gewicht_kg` | Dezimalzahl |
| Gewässer | `custom.gewaesser` | Einzeiliger Text |
| Gefangen von | `custom.angler` | Einzeiliger Text – Name oder Instagram-Name mit @ (z. B. `@koderdepot`), dann wird er verlinkt |
| Instagram-Beitrag | `custom.instagram` | URL – Link zum Post, erscheint als Button „Auf Instagram ansehen“ |
| Weitere Fotos | `custom.bilder` | Datei (Liste), nur Bilder |
| Ausrüstung | `custom.ausruestung` | Produkt (Liste) – **erstes Produkt = der Köder** |

Leere Felder werden im Bericht einfach nicht angezeigt.

Unter jedem Bericht und auf der Übersicht steht „Zeig uns deinen Fang“: Kunden sollen @koderdepot auf ihrem Fangfoto markieren. Markierte Fänge von Kunden legt ihr als neuen Bericht an (mit Einverständnis), „Gefangen von“ = deren @Name, „Instagram-Beitrag“ = Link zum Post.

## Neuer Fang (jedes Mal)

1. Onlineshop → Blogbeiträge → Beitrag hinzufügen, Blog „Fangberichte“, Vorlage `fangbericht`.
2. Titel (z. B. „Hecht auf Tiefenschwinger“), Text, Titelbild (Hochformat).
3. Unten bei den Metafeldern: Fisch, Länge, Gewicht, Gewässer, weitere Fotos, Ausrüstung (Köder zuerst).

## Bericht 1: Hecht auf Tiefenschwinger

- Fotos: `bilder/faenge/fang-hecht-1.jpg` (Titelbild), `fang-hecht-2.jpg`, `fang-hecht-3.jpg`
- Fisch: Hecht
- Ausrüstung: Tiefenschwinger (Köder), Kraftrute Spinn 2,44 m, Stromjäger 2800, Silberleine, Snap-Set
- Text (Entwurf): „Dieser Hecht hat auf den Tiefenschwinger gebissen. Gefischt haben wir mit der Kraftrute Spinn 2,44 m und der Stromjäger 2800, bespult mit Silberleine. Der Köder hing am Snap aus unserem Snap-Set.“
- **Offen:** Länge, Gewicht, Gewässer, Datum, ggf. Farbe des Tiefenschwingers, kurze Geschichte zum Fang, wer gefangen hat (Name oder @Instagram), Link zum Instagram-Post falls vorhanden.

## Bericht 2: Forellen auf Kompaktblitz und Silberflucht

- Fotos: `bilder/faenge/fang-forelle-1.jpg` (Titelbild), `fang-forelle-2.jpg`
- Fisch: Forelle
- Ausrüstung: Kompaktblitz (Köder), Silberflucht
- Text (Entwurf): „Diese Forellen haben auf Kompaktblitz und Silberflucht gebissen.“
- **Offen:** Länge, Gewässer, Datum, Rute/Rolle/Schnur, Farben der Köder, wer gefangen hat (Name oder @Instagram, falls genannt werden soll), Link zum Instagram-Post falls vorhanden, kurze Geschichte.
