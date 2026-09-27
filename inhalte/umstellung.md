# Umstellung im Live-Store „Köderdepot neu“

Stand 27.09.2026. Phase 1 (unsichtbare Vorbereitung) ist **erledigt**. Am Live-Shop hat sich noch nichts geändert: Das alte Theme ist weiter aktiv, alles Neue ist unveröffentlicht, Entwurf oder geplant.

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

## Phase 2 – Umschalten (sichtbar, in einem Rutsch)

Reihenfolge, am besten abends mit wenig Besuchern:

1. **Produkte** (91): lesbare Farbnamen, deutsche Produkttypen, Metafelder Gewicht/Wurfgewicht, Studio-Fotos (ersetzen die alten Bilder).
2. **Kollektionen**: Regeln der bestehenden Kollektionen auf die neuen Produkttypen umstellen (Liste in `import/ANLEITUNG.md`), die 5 neuen veröffentlichen. Die manuellen Kollektionen `koder`, `angelrute`, `rollen`, `forellenkoder`, `buzzbaits` lassen sich nicht auf automatisch umstellen, sie werden per Hand befüllt.
3. **Seiten-Vorlagen**: Köderberatung → `koderberatung`, Zahlung → `zahlung`, Versand & Lieferung → `versand`, Über uns → `about`.
4. **Veröffentlichen**: 5 Fangberichte, 5 Bundles (aktiv), Bundles als Unterpunkte ins Menü `kd-hauptmenue`.
5. **Rabatte**: Startdatum auf den Starttag setzen.
6. **Versand**: 4,99 €, ab 59 € kostenlos, Sperrgut 9,99 €; Abholung vor Ort aktivieren.
7. **Rechtstexte** aus `rechtliches/*.html`.
8. **Nur ihr im Admin:** Kundenkonten auf „klassisch“, Barzahlung bei Abholung, Double-Opt-in/Cookie-Banner, **Theme veröffentlichen** (die Schnittstelle sperrt das für mich).

## Rückweg

- Theme: altes Theme wieder veröffentlichen (es bleibt unverändert erhalten).
- Alles aus Phase 1 lässt sich im Admin löschen; Altes wurde weder geändert noch gelöscht.
