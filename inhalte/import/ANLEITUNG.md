# Produkte in den neuen Shop übernehmen

Stand 26.09.2026. Alle Daten wurden aus dem Store „Köderdepot neu“ nur gelesen, dort wurde nichts verändert.

## Was im alten Shop liegt

| | Anzahl | Was damit passiert |
|---|---|---|
| Aktive Produkte | **91** | Das ist das komplette Sortiment. Alle stehen in `produkte-shopify-import.csv`, mit 556 Varianten und 439 Bildern |
| Entwürfe | 48 | Alte, leere Doppel der aktiven Produkte: Preis 0,00 €, keine Bilder, dieselben Artikelnummern. **Nicht importieren.** Sie liegen zur Sicherheit in `entwuerfe-nicht-importieren.csv` |
| Nicht gelistet | 2 | „Starter Set“ und „Combo Deal“ gehören zur App Easy Bundles (Preis 0,00 €, Inhalt steuert die App). Ebenfalls in `entwuerfe-nicht-importieren.csv` |

## Was die Import-Datei enthält

`produkte-shopify-import.csv` hat das offizielle Shopify-Format (Produkte → Importieren). Pro Produkt stehen dort:

- Titel, Beschreibung (HTML), Marke, Produkttyp, Shopify-Produktkategorie, Tags, SEO-Titel und SEO-Beschreibung
- alle Varianten mit Optionen, Artikelnummer, Preis, Vergleichspreis, Gewicht, Lagerbestand (Stand 26.09.2026) und Steuer
- alle Produktbilder in der richtigen Reihenfolge und **pro Variante das passende Bild** (z. B. jede Köderfarbe mit ihrem Foto)
- zusätzliche Tags `kategorie-koeder` und `zielfisch-hecht` / `-zander` / `-barsch` / `-forelle`, über die sich die Kollektionen automatisch füllen (siehe unten)

Die Bilder werden beim Import direkt vom Shopify-CDN des alten Shops geladen. Der alte Shop muss dafür noch bestehen. Danach liegen die Bilder im neuen Shop und der alte kann geschlossen werden.

## Schritte im neuen Shop

1. **Produkte → Importieren** → `produkte-shopify-import.csv` wählen → Vorschau prüfen → Import starten. Dauer: ein paar Minuten, Shopify schickt eine E-Mail, wenn es fertig ist.
2. **Kollektionen anlegen** nach der Liste unten. Titel und Handle genau so übernehmen, dann stimmen die Links in Menüs und Theme.
3. **Navigation** nach `inhalte/navigation.json` anlegen (Hauptmenü `main-menu`, Footer `footer-kategorie`, `shop-service`, `kundeninfo`).
4. **Lagerbestand prüfen**: Die Bestände sind eine Momentaufnahme vom 26.09.2026. Kurz vor dem Start gleicht ihr sie mit dem alten Shop ab.
5. **Theme** über GitHub verbinden (siehe `README.md`).

Tipp: Zuerst mit 2–3 Produkten testen. Dafür die Datei kopieren und alle Zeilen außer denen von zwei Handles löschen.

## Kollektionen anlegen (neue Struktur)

Alle Kollektionen sind automatisiert: Shopify ordnet die Produkte selbst zu, auch neue. Grundlage ist der **Produkttyp** (eine Unterkategorie je Produkt) und die Tags `kategorie-koeder` und `zielfisch-…`, die in der Import-Datei schon gesetzt sind. Titel und Handle genau so übernehmen, dann passen Menü und Theme.

In Shopify: **Produkte → Kollektionen → Kollektion erstellen**, Typ „Automatisiert“, Bedingungen eintragen. Bei mehreren Regeln steht dabei, ob **alle** oder **eine beliebige** zutreffen muss.

| Titel | Handle | Gehört zu | Produkte | Bedingung | Regeln |
|---|---|---|---|---|---|
| Köder | `koder` | – | 63 | eine beliebige | Produkt-Tag ist gleich „kategorie-koeder“ |
| Softbaits | `gummikoder` | Köder | 18 | eine beliebige | Produkttyp ist gleich „Gummifisch“<br>Produkttyp ist gleich „Softbait“<br>Produkttyp ist gleich „Creature Bait“<br>Produkttyp ist gleich „Twister & Grub“<br>Produkttyp ist gleich „Gummiwurm“<br>Produkttyp ist gleich „Froschköder“ |
| Gummifische | `gummifische` | Softbaits | 2 | eine beliebige | Produkttyp ist gleich „Gummifisch“ |
| Softbaits | `softbait` | Softbaits | 3 | eine beliebige | Produkttyp ist gleich „Softbait“ |
| Creature Baits | `creature-baits` | Softbaits | 4 | eine beliebige | Produkttyp ist gleich „Creature Bait“ |
| Twister & Grubs | `twister-grubs` | Softbaits | 3 | eine beliebige | Produkttyp ist gleich „Twister & Grub“ |
| Gummiwürmer | `gummiwuermer` | Softbaits | 1 | eine beliebige | Produkttyp ist gleich „Gummiwurm“ |
| Frösche & Topwater | `frosche` | Softbaits | 5 | eine beliebige | Produkttyp ist gleich „Froschköder“ |
| Hardbaits | `hardbaits` | Köder | 29 | eine beliebige | Produkttyp ist gleich „Wobbler“<br>Produkttyp ist gleich „Crankbait“<br>Produkttyp ist gleich „Lipless Crankbait“<br>Produkttyp ist gleich „Jerkbait“<br>Produkttyp ist gleich „Swimbait“<br>Produkttyp ist gleich „Popper“ |
| Wobbler | `wobbler` | Hardbaits | 6 | eine beliebige | Produkttyp ist gleich „Wobbler“ |
| Crankbaits | `crankbaits` | Hardbaits | 10 | eine beliebige | Produkttyp ist gleich „Crankbait“ |
| Lipless Crankbaits | `lipless-crankbaits` | Hardbaits | 2 | eine beliebige | Produkttyp ist gleich „Lipless Crankbait“ |
| Jerkbaits | `jerkbaits` | Hardbaits | 3 | eine beliebige | Produkttyp ist gleich „Jerkbait“ |
| Swimbaits | `swimbait` | Hardbaits | 4 | eine beliebige | Produkttyp ist gleich „Swimbait“ |
| Popper | `popper` | Hardbaits | 4 | eine beliebige | Produkttyp ist gleich „Popper“ |
| Blechköder | `metallkoder` | Köder | 16 | eine beliebige | Produkttyp ist gleich „Spinner“<br>Produkttyp ist gleich „Spinnerbait“<br>Produkttyp ist gleich „Blinker“<br>Produkttyp ist gleich „Metal Jig“<br>Produkttyp ist gleich „Tail Spinner“<br>Produkttyp ist gleich „Blade Bait“<br>Produkttyp ist gleich „Vibration Bait“<br>Produkttyp ist gleich „Buzzbait“ |
| Spinner | `spinner` | Blechköder | 2 | eine beliebige | Produkttyp ist gleich „Spinner“ |
| Spinnerbaits | `spinnerbait` | Blechköder | 2 | eine beliebige | Produkttyp ist gleich „Spinnerbait“ |
| Blinker & Spoons | `blinker` | Blechköder | 1 | eine beliebige | Produkttyp ist gleich „Blinker“ |
| Metal Jigs | `metal-jigs` | Blechköder | 3 | eine beliebige | Produkttyp ist gleich „Metal Jig“ |
| Tail Spinner | `tail-spinner` | Blechköder | 1 | eine beliebige | Produkttyp ist gleich „Tail Spinner“ |
| Blade Baits | `blade-bait` | Blechköder | 2 | eine beliebige | Produkttyp ist gleich „Blade Bait“ |
| Vibration Baits | `vibration-bait` | Blechköder | 3 | eine beliebige | Produkttyp ist gleich „Vibration Bait“ |
| Buzzbaits | `buzzbaits` | Blechköder | 2 | eine beliebige | Produkttyp ist gleich „Buzzbait“ |
| Angelruten | `angelrute` | – | 11 | eine beliebige | Produkttyp ist gleich „Spinnrute“<br>Produkttyp ist gleich „Baitcastrute“ |
| Spinnruten | `spinnruten` | Angelruten | 7 | eine beliebige | Produkttyp ist gleich „Spinnrute“ |
| Baitcastruten | `baitcastruten` | Angelruten | 4 | eine beliebige | Produkttyp ist gleich „Baitcastrute“ |
| Angelrollen | `rollen` | – | 8 | eine beliebige | Produkttyp ist gleich „Stationärrolle“<br>Produkttyp ist gleich „Baitcaster-Rolle“ |
| Stationärrollen | `stationarrollen` | Angelrollen | 5 | eine beliebige | Produkttyp ist gleich „Stationärrolle“ |
| Baitcaster-Rollen | `baitcaster-rollen` | Angelrollen | 3 | eine beliebige | Produkttyp ist gleich „Baitcaster-Rolle“ |
| Zubehör | `zubehor` | – | 9 | eine beliebige | Produkttyp enthält „Schnur“<br>Produkttyp ist gleich „Wirbel mit Snap“<br>Produkttyp ist gleich „Lösezange“<br>Produkttyp ist gleich „Jigkopf“ |
| Angelschnur | `angelschnur` | Zubehör | 4 | eine beliebige | Produkttyp enthält „Schnur“ |
| Wirbel & Snaps | `wirbel` | Zubehör | 1 | eine beliebige | Produkttyp ist gleich „Wirbel mit Snap“ |
| Lösezangen | `loesezangen` | Zubehör | 2 | eine beliebige | Produkttyp ist gleich „Lösezange“ |
| Jigköpfe | `jigkopfe` | Zubehör | 2 | eine beliebige | Produkttyp ist gleich „Jigkopf“ |
| Zielfisch Hecht | `zielfisch-hecht` | – | 65 | eine beliebige | Produkt-Tag ist gleich „zielfisch-hecht“ |
| Hechtköder | `hechtkoder` | Köder | 52 | alle | Produkt-Tag ist gleich „zielfisch-hecht“<br>Produkt-Tag ist gleich „kategorie-koeder“ |
| Zielfisch Zander | `zielfisch-zander` | – | 59 | eine beliebige | Produkt-Tag ist gleich „zielfisch-zander“ |
| Zanderköder | `zanderkoder` | Köder | 44 | alle | Produkt-Tag ist gleich „zielfisch-zander“<br>Produkt-Tag ist gleich „kategorie-koeder“ |
| Zielfisch Barsch | `zielfisch-barsch` | – | 69 | eine beliebige | Produkt-Tag ist gleich „zielfisch-barsch“ |
| Barschköder | `barschkoder` | Köder | 56 | alle | Produkt-Tag ist gleich „zielfisch-barsch“<br>Produkt-Tag ist gleich „kategorie-koeder“ |
| Zielfisch Forelle | `zielfisch-forelle` | – | 14 | eine beliebige | Produkt-Tag ist gleich „zielfisch-forelle“ |
| Forellenköder | `forellenkoder` | Köder | 11 | alle | Produkt-Tag ist gleich „zielfisch-forelle“<br>Produkt-Tag ist gleich „kategorie-koeder“ |
| Bestseller | `bestseller` | – | 91 | eine beliebige | Preis ist größer als „0“ |

Bundles (`bundles`, `starter-bundle`, `hecht-bundle`) bleiben manuelle Kollektionen. Solange sie leer sind, blendet das Theme sie im Menü automatisch aus.

## Gewicht und Wurfgewicht (Metafelder)

Vor dem Import unter Einstellungen → Benutzerdefinierte Daten → Produkte zwei Metafeld-Definitionen anlegen (Typ „Einzeiliger Text“):

- `custom.gewicht` – „Gewicht“ (z. B. „197 g“, „232–234 g“)
- `custom.wurfgewicht` – „Wurfgewicht“ (z. B. „8–37 g“)

Die Import-Datei füllt sie für 14 Produkte aus den vorhandenen Beschreibungen (`gewichte.json`). Bei Ködern liest das Theme das Gewicht direkt aus der Variante „Größe | Gewicht“; dafür ist kein Metafeld nötig. Fehlende Angaben stehen in `inhalte/offen.md`.

## Produkttypen

Die Import-Datei nutzt lesbare deutsche Produkttypen in der Einzahl, passend zum Menü (z. B. „Metal Jig“ statt „Metal jig“, „Blinker“ statt „Spoons“, „Spinnrute“ statt „Spinnruten“). Die Zuordnung alt → neu steht in `struktur-neu.json` unter `produkttypen`. Die Regeln oben verwenden schon die neuen Namen.

## Menüs

Die neuen Menüs stehen in `struktur-neu.json` unter `navigation` (Hauptmenü `main-menu`, Footer `footer-kategorie`). In Shopify unter **Onlineshop → Navigation** anlegen. Das Theme baut daraus Mega-Menü, Unterkategorie-Leisten und Pfadangaben automatisch.

## Auffälligkeiten in den Produktdaten

- **Zubehör:** Im alten Shop erfassten die Regeln nur Lösezangen und Snap Swivel. In der neuen Struktur gehören Angelschnüre und Jigköpfe dazu.
- **Doppelte Artikelnummern:** `SF-SR-070-085-GS` und `HF-TS-140-400-BD` kommen je zweimal vor. Shopify importiert das, für Warenwirtschaft und Versand sollten sie eindeutig sein.
- **Ohne Artikelnummer:** 4 Varianten.
- **Ohne Gewicht (0 g):** 11 Varianten. Bei gewichtsbasierten Versandkosten bitte nachtragen.
- **Farbnamen** stehen als technische Kürzel im Store (z. B. „red-phantom-head“). Das lässt sich vor dem Import in der CSV (Spalten `Option1 Value` bis `Option3 Value`) oder später in Shopify ändern.
