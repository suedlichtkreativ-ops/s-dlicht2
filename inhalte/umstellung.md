# Umstellung im Live-Store „Köderdepot neu“

Stand 27.09.2026, abends. Phase 1 und das Umschalten der Shop-Daten sind **erledigt**. Offen sind nur noch die Schritte, die ihr im Admin machen müsst (siehe `offen.md`, Abschnitt B), vor allem: **Theme veröffentlichen**.

## Phase 1 – erledigt (unsichtbar)

| Was | Stand | Details |
|---|---|---|
| Theme „Köderdepot“ | unveröffentlicht, alle 128 Dateien | Theme-ID `207725003094`. Ansehen über Onlineshop → Themes → „Vorschau“ |
| Dateien | 21 hochgeladen | Hero-Bilder, Stimmungsbilder, Fangfotos, Bundle-Bilder, `widerrufsformular.pdf` (genaue Namen) |
| Metafeld-Definitionen | 13 angelegt | Produkt: `custom.gewicht`, `custom.wurfgewicht`. Blogbeiträge: `fisch`, `laenge_cm`, `gewicht_kg`, `methode`, `fangzeit`, `region`, `angler`, `instagram`, `bilder`, `ausruestung`, `empfehlung` |
| Kollektionen | 5 neu, unveröffentlicht | `gummifische`, `gummiwuermer`, `tail-spinner`, `loesezangen`, `zielfisch-forelle` |
| Blog „Fangberichte“ | angelegt, 5 Beiträge **unveröffentlicht** | Hecht 90 cm, Forellen, Forelle am Bach, Wels, Kapitaler Hecht (mit Metafeldern, Ausrüstung, Fotos) |
| Menüs | 3 neu | `kd-hauptmenue`, `kd-shop-service`, `kd-footer-kategorie`; `kundeninfo` wird unverändert mitbenutzt. Das neue Theme nutzt diese Menüs bereits. Alte Menüs unverändert |
| Rabatte | 4, **geplant** ab 01.01.2030 | WILLKOMMEN10 (10 %, einmal pro Kunde, nur Segment „Noch keine Bestellung“), Köder-Box ab 3/5/8 Stück = 5/10/15 % |
| Kundensegment | angelegt | „Noch keine Bestellung“ (`number_of_orders = 0`) |
| Bundles | 5 Produkte als **Entwurf** | Bestandteile verknüpft (Lager wird bei den Einzelprodukten abgebucht), Festpreis, Bild, Vorlage, in Kollektion „Bundles“ |

Bewusst noch nicht gemacht:
- **439 Studio-Fotos:** kommen beim Produkt-Schritt (Phase 2) direkt an die Produkte, sonst lägen sie doppelt in den Dateien.
- **„Sonderangebote“** fehlt im neuen Shop-Service-Menü: Die Kollektion `sale` ist ein leeres Archiv.

## Phase 2 – Vorbereitung (27.09.2026, abends)

Unsichtbar für Besucher erledigt:
- **Seiten-Vorlagen zugewiesen:** Köderberatung, Zahlung, Versand & Lieferung, Über uns. Das alte Theme „Focal“ hat für diese Seiten keine eigenen Vorlagen und zeigt sie deshalb unverändert mit seiner Standardvorlage.
- **Seitentexte bereinigt:** Kopier-Reste (ChatGPT-Klassen, Wort-für-Wort-Spans) aus Kontakt, Über uns, Versand, Zahlung, FAQ, Warum Köderdepot, Köderberatung entfernt. Wortlaut unverändert.
- **Kategorie-Texte bereinigt:** Softbaits, Buzzbaits, Spinnerbaits, Angelrollen (Kopier-Attribute entfernt, Wortlaut unverändert).
- **Produkt-Backup:** `backup/produkte-vor-umstellung-2026-09-27.jsonl` (alle Produkte, Varianten, Bilder, Metafelder).
- **Studio-Fotos neu:** keine weißen Flecken mehr in Rollenbügeln, Zangenringen, Snaps und Spinnerbait-Rahmen; Produkte optisch mittig; hellerer Hintergrund. Prüfbögen: `bilder/pruefung/`.
- **Versandrichtlinie** (`rechtliches/versand.html`) von Word-Formatierungen bereinigt, doppelte Überschrift entfernt.
- **Qualitätskontrolle** aller 170 Seiten der Vorschau (Desktop + Handy): keine Skriptfehler, kein seitliches Überlaufen, keine toten Links, alle Bilder mit Alt-Text, je eine Hauptüberschrift. Behoben: Kachel-Beschriftung, Abstände (Link unter Text, gelbes Beratungs-Band, Fangbericht-Ausrüstung), einheitliche Überschriften und Links, Zielfisch-Symbole nur noch bei Ködern, Überschrift über Kategorietexten.

Noch offen vor dem Umschalten: siehe `offen.md`, Abschnitt „Vor Go-live zu entscheiden“.

## Phase 2 – Umschalten (27.09.2026, abends) – erledigt über die Schnittstelle

| Was | Stand |
|---|---|
| Produkte (91) | Deutsche Produkttypen, Zielfisch-/Kategorie-Tags ergänzt (nur hinzugefügt), Gewicht/Wurfgewicht, lesbare Farbnamen (2 Tippfehler korrigiert: „Ivory Darkeye“, „Green Fade“) |
| Produktfotos | 439 neue Studio-Fotos an den Produkten, jede Farbvariante mit ihrem Foto (531 Varianten). Alte Bilder nur **abgehängt**, sie liegen weiter unter Inhalte → Dateien. Kontrolle: 0 Abweichungen |
| Kategorien | 39 automatische Kategorien auf die neuen Produkttypen/Tags umgestellt; „Buzzbaits“ befüllt; „Forellenköder“ auf die Köder mit Zielfisch Forelle umgestellt (vorher: Flussläufer, Kleinviber, Kompaktblitz, Silberflucht, Tauchjäger, Tiefenjäger, Uferknall, Zitterklinge) |
| Kategorie-Texte | 24 Einleitungen mit SEO-Titel/-Beschreibung (inkl. Korrektur „Frösche & Topwater“). Alte Texte: `backup/kollektionen-vor-umstellung-2026-09-27.jsonl` |
| Veröffentlicht | 6 Kategorien (Gummifische, Gummiwürmer, Tail Spinner, Lösezangen, Zielfisch Forelle, Buzzbaits), 5 Bundles (aktiv), 5 Fangberichte |
| Menü `kd-hauptmenue` | Bundles mit 5 Unterpunkten |
| Rabatte | WILLKOMMEN10 und Köder-Box 3/5/8 aktiv seit 27.09.2026 |
| Abholung vor Ort | aktiviert (Standort Schwaighofstraße 18 h, „in der Regel innerhalb von 24 Stunden bereit“, Hinweistext mit Abholzeiten) |
| Sperrgut | Eigenes Versandprofil „Sperrgut (Angelruten)“: 11 Ruten, Deutschland 9,99 €, getrennt vom übrigen Versand (Entscheidung 27.09.2026). Texte auf Produktseiten, FAQ, Versandseite und `rechtliches/versand.html` angepasst. Die Rute im Starter-Bundle wird über die Bestandteile als Sperrgut berechnet |
| Grundpreis | Preis pro Meter bei Uferleine, Silberleine, Vorratsleine, Grünklinge (31 Varianten) |
| Theme | im Shop identisch mit dem Repo (Prüfsummen verglichen) |

Nicht über die Schnittstelle möglich (→ „Nur ihr im Admin“ in `offen.md`):
- **Versandpreise im Allgemeinen Profil:** Shopify übernimmt Änderungen an diesem (alten) Profil per Schnittstelle nicht (Anfrage wird bestätigt, ändert aber nichts). Aktuell noch: 5,99 €, kostenlos ab 150 €. Neue Profile anlegen funktioniert (Sperrgut).
- **Rechtstexte:** fehlende Berechtigung (`write_legal_policies`). Die fertigen Texte liegen in `rechtliches/*.html`, die bisherigen in `backup/richtlinien-vor-umstellung/`.

## Rückweg

- Theme: altes Theme wieder veröffentlichen (es bleibt unverändert erhalten).
- Alles aus Phase 1 lässt sich im Admin löschen.
- Produkte: alte Bilder liegen unter Inhalte → Dateien und lassen sich wieder anhängen; Produktdaten vorher: `backup/produkte-vor-umstellung-2026-09-27.jsonl`.
- Kategorien: Regeln und Texte vorher: `backup/kollektionen-vor-umstellung-2026-09-27.jsonl`.
