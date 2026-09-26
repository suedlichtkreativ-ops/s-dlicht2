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
- ein zusätzlicher Tag `kollektion-…` für die manuellen Kollektionen (siehe unten)

Die Bilder werden beim Import direkt vom Shopify-CDN des alten Shops geladen. Der alte Shop muss dafür noch bestehen. Danach liegen die Bilder im neuen Shop und der alte kann geschlossen werden.

## Schritte im neuen Shop

1. **Produkte → Importieren** → `produkte-shopify-import.csv` wählen → Vorschau prüfen → Import starten. Dauer: ein paar Minuten, Shopify schickt eine E-Mail, wenn es fertig ist.
2. **Kollektionen anlegen** nach der Liste unten. Titel und Handle genau so übernehmen, dann stimmen die Links in Menüs und Theme.
3. **Navigation** nach `inhalte/navigation.json` anlegen (Hauptmenü `main-menu`, Footer `footer-kategorie`, `shop-service`, `kundeninfo`).
4. **Lagerbestand prüfen**: Die Bestände sind eine Momentaufnahme vom 26.09.2026. Kurz vor dem Start gleicht ihr sie mit dem alten Shop ab.
5. **Theme** über GitHub verbinden (siehe `README.md`).

Tipp: Zuerst mit 2–3 Produkten testen. Dafür die Datei kopieren und alle Zeilen außer denen von zwei Handles löschen.

## Automatische Kollektionen (Regeln übernehmen)

In Shopify: **Produkte → Kollektionen → Kollektion erstellen**, Titel und Handle wie unten, Typ „Automatisiert“, Bedingungen eintragen. Die Produkte ordnen sich danach selbst zu.

| Titel | Handle | Produkte | Bedingung | Regeln |
|---|---|---|---|---|
| Gummiköder | `gummikoder` | 13 | eine beliebige | Produkttyp ist gleich „Gummifisch“<br>Produkttyp ist gleich „Twister / Grub“<br>Produkttyp ist gleich „Creature Bait“<br>Produkttyp ist gleich „Würmer“<br>Produkttyp ist gleich „Softbait“ |
| Hardbaits | `hardbaits` | 37 | eine beliebige | Produkttyp ist gleich „Crankbait“<br>Produkttyp ist gleich „Lipless crankbait“<br>Produkttyp ist gleich „Wobbler“<br>Produkttyp ist gleich „Jerkbait“<br>Produkttyp ist gleich „Popper“<br>Produkttyp ist gleich „Vibration-Bait“<br>Produkttyp ist gleich „Swimbait“<br>Produkttyp ist gleich „Frösche“ |
| Jigköpfe | `jigkopfe` | 5 | alle | Produkt-Tag ist gleich „Jigkopf“ |
| Zielfisch Hecht | `zielfisch-hecht` | 65 | eine beliebige | Produkt-Tag ist gleich „Hechtköder“<br>Produkt-Tag ist gleich „Hecht Köder“<br>Produkt-Tag ist gleich „Hecht“<br>Produkt-Tag ist gleich „Hecht Rute“<br>Produkt-Tag ist gleich „Hechtrute“<br>Produkt-Tag ist gleich „Hecht Rolle“<br>Produkt-Tag ist gleich „Hechtzange“<br>Produkt-Tag ist gleich „Hechtangeln“<br>Produkt-Tag ist gleich „Angeln auf Hecht“ |
| Zielfisch Barsch | `zielfisch-barsch` | 69 | eine beliebige | Produkt-Tag ist gleich „Barschköder“<br>Produkt-Tag ist gleich „Barsch Köder“<br>Produkt-Tag ist gleich „Barsch“<br>Produkt-Tag ist gleich „Barsch Rute“<br>Produkt-Tag ist gleich „Barsch Rolle“<br>Produkt-Tag ist gleich „Barsch Zubehör“<br>Produkt-Tag ist gleich „Barschangeln“<br>Produkt-Tag ist gleich „Großbarsch“ |
| Zielfisch Zander | `zielfisch-zander` | 59 | eine beliebige | Produkt-Tag ist gleich „Zanderköder“<br>Produkt-Tag ist gleich „Zander Köder“<br>Produkt-Tag ist gleich „Zander“<br>Produkt-Tag ist gleich „Zander Rute“<br>Produkt-Tag ist gleich „Zander Rolle“<br>Produkt-Tag ist gleich „Zander Zubehör“<br>Produkt-Tag ist gleich „Zanderzange“<br>Produkt-Tag ist gleich „Zanderangeln“ |
| Spinnruten | `spinnruten` | 7 | eine beliebige | Produkttyp ist gleich „Spinnruten“ |
| Baitcastruten | `baitcastruten` | 4 | eine beliebige | Produkttyp ist gleich „Baitcastruten“ |
| Stationärrollen | `stationarrollen` | 5 | eine beliebige | Produkttyp ist gleich „Stationärrollen“ |
| Baitcaster Rollen | `baitcaster-rollen` | 3 | eine beliebige | Produkttyp ist gleich „Baitcaster Rollen“ |
| Angelschnur | `angelschnur` | 4 | eine beliebige | Produkttyp enthält „Schnur“<br>Produkt-Tag ist gleich „Schnur“<br>Produkt-Tag ist gleich „Angelschnur“<br>Produkt-Tag ist gleich „Transparente Angelschnur“<br>Produkt-Tag ist gleich „Transparente Schnur“<br>Produkt-Tag ist gleich „PE Schnur“<br>Produkt-Tag ist gleich „Süßwasser Schnur“<br>Produkt-Tag ist gleich „500m Schnur“<br>Produkt-Tag ist gleich „Geflochtene Schnur“<br>Produkt-Tag ist gleich „Nylon Schnur“<br>Produkt-Tag ist gleich „Nylon Angelschnur“<br>Produkt-Tag ist gleich „Monofile Schnur“<br>Produkt-Tag ist gleich „Monofile Angelschnur“<br>Produkt-Tag ist gleich „Allround Schnur“<br>Produkt-Tag ist gleich „Angelschnur 100m“ |
| Zubehör | `zubehor` | 7 | eine beliebige | Produkttyp ist gleich „Lösezangen“<br>Produkttyp ist gleich „Snap Swivel“ |
| Metallköder | `metallkoder` | 13 | eine beliebige | Produkttyp ist gleich „Metal jig“<br>Produkttyp ist gleich „Blade Bait“<br>Produkttyp ist gleich „Spoons“<br>Produkttyp ist gleich „Spinner“<br>Produkttyp ist gleich „Spinnerbait“<br>Produkttyp ist gleich „Buzzbait“<br>Produkttyp ist gleich „Tail spinner“ |
| Oberflächenköder | `oberflachenkoder` | 11 | eine beliebige | Produkttyp ist gleich „Popper“<br>Produkttyp ist gleich „Frösche“<br>Produkttyp ist gleich „Buzzbait“ |
| Neuheiten | `neuheiten` | 0 | eine beliebige | Produkt-Tag ist gleich „neu“ |
| Bestseller | `bestseller` | 91 | alle | Preis ist größer als „0“ |
| Barschköder | `barschkoder` | 51 | alle | Produkt-Tag ist gleich „barschköder“ |
| Döbelköder | `dobelkoder` | 0 | alle | Produkt-Tag ist gleich „Döbelköder“ |
| Creature Baits | `creature-baits` | 5 | alle | Produkt-Tag ist gleich „Creature Bait“ |
| Hechtköder | `hechtkoder` | 48 | alle | Produkt-Tag ist gleich „Hechtköder“ |
| Gummifische | `frosche` | 2 | alle | Produkt-Tag ist gleich „Gummifische“ |
| Krebse | `krebse` | 2 | alle | Produkt-Tag ist gleich „Krebs“ |
| Insekten | `insekten` | 1 | alle | Produkt-Tag ist gleich „Insekt“ |
| Frösche | `frosche-1` | 4 | alle | Produkt-Tag ist gleich „Froschköder“ |
| Crankbaits | `crankbaits` | 10 | alle | Produkt-Tag ist gleich „Crankbait“ |
| Hybrid Köder | `hybrid-koder` | 1 | alle | Produkt-Tag ist gleich „Hybridköder“ |
| Lipless Crankbaits | `lipless-crankbaits` | 2 | alle | Produkt-Tag ist gleich „Lipless Crankbait“ |
| Jerkbaits | `jerkbaits` | 4 | alle | Produkt-Tag ist gleich „Jerkbait“ |
| Blinker | `blinker` | 1 | alle | Produkt-Tag ist gleich „Blinker“ |
| Buzzbaits | `buzzbaits-1` | 2 | alle | Produkt-Tag ist gleich „Buzzbaits“ |
| Zielfische | `zielfische` | 59 | eine beliebige | Produkt-Tag ist gleich „barschköder“<br>Produkt-Tag ist gleich „Dorschköder“<br>Produkt-Tag ist gleich „Döbelköder“<br>Produkt-Tag ist gleich „Forellenköder“<br>Produkt-Tag ist gleich „Hechtköder“ |
| Spinnerbaits | `spinnerbaits` | 7 | alle | Produkt-Tag ist gleich „Spinnerbait“ |
| Topwater | `topwater` | 11 | alle | Produkt-Tag ist gleich „Topwater“ |
| Angeltechniken | `einsatzzweck` | 21 | eine beliebige | Produkt-Tag ist gleich „Topwater“<br>Produkt-Tag ist gleich „Finesse“<br>Produkt-Tag ist gleich „Searchbait“<br>Produkt-Tag ist gleich „Ultralight“ |
| Zanderköder | `zanderkoder` | 41 | alle | Produkt-Tag ist gleich „Zanderköder“ |
| Searchbait | `searchbait` | 2 | alle | Produkt-Tag ist gleich „Searchbait“ |
| Finesse | `finesse` | 6 | alle | Produkt-Tag ist gleich „Finesse“ |
| Ultralight | `ultralight` | 2 | alle | Produkt-Tag ist gleich „Ultralight“ |
| Deep Diver | `deep-diver` | 1 | alle | Produkt-Tag ist gleich „Deep Diver“ |
| Castingrolle | `castingrolle` | 1 | alle | Produkt-Tag ist gleich „Castingrolle“ |
| Geflochtene Angelschnur | `geflochtene-angelschnur` | 2 | alle | Produkt-Tag ist gleich „Geflochtene Schnur“ |
| Wirbel | `wirbel` | 1 | alle | Produkt-Tag ist gleich „wirbel mit snap“<br>Produkt-Tag ist gleich „karabiner wirbel“<br>Produkt-Tag ist gleich „angelwirbel“<br>Produkt-Tag ist gleich „schnurwirbel“ |
| Softbait | `softbait` | 3 | alle | Produkttyp ist gleich „Softbait“ |
| Spinnerbait | `spinnerbait` | 2 | alle | Produkttyp ist gleich „Spinnerbait“ |
| Wobbler | `wobbler` | 6 | alle | Produkttyp ist gleich „Wobbler“ |
| Swimbait | `swimbait` | 4 | alle | Produkttyp ist gleich „Swimbait“ |
| Popper | `popper` | 4 | alle | Produkttyp ist gleich „Popper“ |
| Blade Bait | `blade-bait` | 2 | alle | Produkttyp ist gleich „Blade Bait“ |
| Vibration Bait | `vibration-bait` | 3 | alle | Produkttyp ist gleich „Vibration-Bait“ |

## Manuelle Kollektionen (per Tag)

Manuelle Kollektionen kann die Import-Datei nicht befüllen. Deshalb hat jedes Produkt einen zusätzlichen Tag `kollektion-<handle>` bekommen. Legt diese Kollektionen als **automatisiert** mit der Regel „Produkt-Tag ist gleich kollektion-<handle>“ an, dann sind sie sofort befüllt.

| Titel | Handle | Produkte | Regel |
|---|---|---|---|
| Home page | `frontpage` | 0 | leer, nur anlegen, wenn gebraucht |
| Forellenköder | `forellenkoder` | 11 | Produkt-Tag ist gleich „kollektion-forellenkoder“ |
| Angelrute | `angelrute` | 11 | Produkt-Tag ist gleich „kollektion-angelrute“ |
| Köder | `koder` | 62 | Produkt-Tag ist gleich „kollektion-koder“ |
| Angelrollen | `rollen` | 8 | Produkt-Tag ist gleich „kollektion-rollen“ |
| Bundles | `bundles` | 0 | leer, nur anlegen, wenn gebraucht |
| Starter Bundle | `starter-bundle` | 0 | leer, nur anlegen, wenn gebraucht |
| Hecht Bundle | `hecht-bundle` | 0 | leer, nur anlegen, wenn gebraucht |
| Spannung an der Oberfläche | `spannung-an-der-oberflache` | 4 | Produkt-Tag ist gleich „kollektion-spannung-an-der-oberflache“ |

## Nicht übernehmen

Diese 23 Kollektionen sind im alten Shop archiviert oder Kopien und werden nicht gebraucht: `globofilter-best-selling-products-index`, `dorschkoder`, `imitate`, `chatterbaits`, `durchlaufblinker`, `schnur`, `stationarrolle`, `spinnrute`, `monofile-angelschnur`, `angelrolle`, `blei`, `technik-sale`, `boot`, `blechkoder`, `buzzbaits`, `gummifische`, `hardbait`, `tackle-komponenten`, `startersets`, `sale`, `willkommen-bei-koderdepot-10-rabatt-fur-neukunden`, `willkommen-bei-koderdepot-10-rabatt-fur-neukunden-kopie`, `willkommen-bei-koderdepot-10-rabatt-fur-neukunden-kopie-kopie`.

## Auffälligkeiten in den Produktdaten

- **Zubehör:** Die Regeln erfassen nur Lösezangen und Snap Swivel (5 Produkte). Im alten Shop stehen zusätzlich die 4 Angelschnüre drin, weil Shopify die Kollektion nicht neu berechnet hat. Im neuen Shop fehlen sie dort, außer ihr ergänzt die Regel „Produkttyp enthält Schnur“.
- **Doppelte Artikelnummern:** `SF-SR-070-085-GS` und `HF-TS-140-400-BD` kommen je zweimal vor. Shopify importiert das, für Warenwirtschaft und Versand sollten sie eindeutig sein.
- **Ohne Artikelnummer:** 4 Varianten.
- **Ohne Gewicht (0 g):** 11 Varianten. Bei gewichtsbasierten Versandkosten bitte nachtragen.
- **Farbnamen** stehen als technische Kürzel im Store (z. B. „red-phantom-head“). Das lässt sich vor dem Import in der CSV (Spalten `Option1 Value` bis `Option3 Value`) oder später in Shopify ändern.
