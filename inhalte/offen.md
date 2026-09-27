# Offene Punkte

Stand 26.09.2026, nach dem Auslesen des Shopify-Stores „Köderdepot neu“. Am Live-Store wurde nichts verändert: nur lesende Abfragen, kein Theme-Upload, keine Einstellungen.

## Widersprüche, die ihr klären müsst

| Thema | Quelle A | Quelle B | Im neuen Theme |
|---|---|---|---|
| Versanddienstleister | Ansage-Leiste im Live-Theme: „Schnell geliefert mit **DHL**“ | Versandrichtlinie: Versand mit **DPD**, 2–4 Werktage | Ansage-Leiste unverändert (DHL), Produktseite und FAQ nach Versandrichtlinie (DPD). Bitte eine Variante festlegen. |
| Kauf auf Rechnung | Ansage-Leiste: „Kauf auf Rechnung möglich“ | AGB nennen nur Shopify Payments, PayPal, Apple Pay, Google Pay, Kreditkarte (Stripe) | Ansage-Leiste unverändert. Prüfen, ob Rechnungskauf (z. B. über PayPal oder Klarna) wirklich aktiv ist. |
| Abholung | Versandrichtlinie: „Abholung im Geschäft“ kostenlos | Shopify-Standort ohne eingerichtete Abholung (laut Abfrage) | Texte nach Versandrichtlinie. In Shopify „Abholung vor Ort“ aktivieren, sonst gibt es die Option an der Kasse nicht. |
| Adresse | Shopify: „Schwaighofstrasse 18 h“ + Zusatz „18h“ | Impressum: „Schwaighof Straße 18 H“ | Im Theme: „Schwaighofstraße 18 h“. Offizielle Schreibweise bestätigen. |
| E-Mail im Impressum | – | Impressum zeigt „info@xn--kderdepot-07a.de“ (Punycode für köderdepot.de mit ö) | Theme nutzt info@koederdepot.de. Im Impressum korrigieren lassen. |

## Dringend (betrifft auch den alten Shop)

- **Rabattcode WILLKOMMEN10 existiert nicht.** Der alte Shop wirbt im Slider und in der Kollektion „Willkommen bei Köderdepot“ mit „10 % auf die erste Bestellung, Code WILLKOMMEN10“. Unter Rabatte ist aber kein einziger Code angelegt (Abfrage vom 26.09.2026). Kunden bekommen beim Eingeben vermutlich eine Fehlermeldung. Im neuen Shop: Rabatt „WILLKOMMEN10“, 10 %, einmal pro Kunde, anlegen. Der neue Hero zeigt den Code im Slide „10 % Rabatt“. Das Willkommens-Pop-up steht auf „Code per E-Mail“: Besucher melden sich zum Newsletter an, Shopify schickt den Code nach der Bestätigung. Dafür im neuen Shop einrichten:
  1. Rabatt „WILLKOMMEN10“ anlegen (10 %, z. B. einmal pro Kunde).
  2. Einstellungen → Kundenbenachrichtigungen/Marketing: Double-Opt-in für E-Mail-Marketing einschalten.
  3. Shopify Email → Automatisierungen → „Willkommen neue Abonnenten“ mit dem Code einrichten.
  4. Einstellungen → Kundendatenschutz: Cookie-Banner aktivieren (das Pop-up wartet, bis er beantwortet ist).
  5. Hinweistext unter dem E-Mail-Feld und die Datenschutzerklärung mit euren Rechtstexten abstimmen (Newsletter + Cookies).
  Solange 1–3 fehlen, im Editor unter „Willkommens-Pop-up“ ausschalten oder auf „Direkt im Pop-up zeigen“ stellen. Bedingungen des Rabatts bitte nennen, dann kommen sie ins Kleingedruckte.

## Fehlende Inhalte

- **FAQ-Antworten:** Im Live-Theme sind alle sieben Fragen ohne Antwort. Drei Antworten (Versand, Rückgabe, Zahlung) stammen jetzt wörtlich bzw. sinngemäß aus euren Rechtstexten. Zwei (Profis, Köderhilfe) stützen sich auf „Über uns“ und „Köderberatung“. **Zwei sind weiterhin meine Entwürfe und müssen von euch geprüft oder ersetzt werden:**
  - „Ich bin Anfänger – was brauche ich wirklich zum Start?“
  - „Was ist der Unterschied zwischen Spinn- und Casting-Ruten?“
- **Öffnungszeiten** für die Abholung: nirgends hinterlegt. Im Theme leer gelassen, die Zeile ist ausgeblendet.
- **Telefon:** Nur im Impressum (0176 41450088), nicht im Shop-Profil. Bitte bestätigen, dass die Nummer öffentlich auf der Seite stehen soll.
- **Link zur Karte** (Google Maps) für „Route planen“: nicht vorhanden.
- **Social Media:** Instagram-Link im Live-Theme ist nur ein Platzhalter „#“. Echte Profile fehlen.
- **Bundles:** Die Kollektionen „Bundles“, „Starter Bundle“ und „Hecht Bundle“ enthalten 0 Produkte. Es gibt die nicht gelisteten Produkte „Starter Set“ und „Combo Deal“ (siehe `produkte.json`). Welche Produkte gehören in welches Bundle?
- **Neuheiten:** Kollektion „Neuheiten“ ist leer. Auf der Startseite steht deshalb „Bestseller“ (91 Produkte).
- **Gewichte fehlen:** Wurfgewicht bei Nachtjagdrute 2,4 m und Weitwurfrute Spinn 2,7 m; Eigengewicht der Stationärrollen Uferrolle 1500/2500 und Stromjäger 2800/5800/12000 sowie der Lösezange Feingriff. Bitte nachreichen, dann trage ich sie als Metafeld ein. (Schnüre und Snaps: Gewicht nicht sinnvoll, dort zählen Tragkraft/Größe.)
- **Bundles & Köder-Box:** Einrichtung in `inhalte/bundles.md`. Offen: Stahl-/Titanvorfach fürs Sortiment (Name, Preis, Bild), danach kommt es in Starter-Bundle und Hecht-Set.
- **Köder-Finder:** Läuft über Produkt-Tags (Hechtköder/Zanderköder/…, Topwater, Flachwasser, Krautkante, Jiggen, Rassel …). Produkte ohne diese Tags erscheinen seltener. Im neuen Shop eine Seite „Köder-Finder“ mit Vorlage `page.koeder-finder` anlegen und im Menü verlinken. Der KI-Chat folgt als zweiter Schritt (Anthropic-Konto, kleiner Server, Datenschutz-Ergänzung, KI-Hinweis nach EU-KI-Verordnung).
- **Rechtstexte übernommen, 5 Widersprüche offen:** Siehe `inhalte/rechtliches/README.md` (Selbstabholung laut AGB ausgeschlossen, „Kauf auf Rechnung“ nicht in AGB, zwei E-Mail-Adressen, zwei Schreibweisen der Anschrift, Datenschutz ohne Newsletter/Cookies).
- **Hero-Bild Topwater ohne Text:** Das alte Banner hatte „TOPWATER HECHT“, die Köderliste und einen Knopf eingebrannt. Die bereinigte Fassung liegt in `inhalte/bilder/hero-topwater-ohne-text.jpg`. Im neuen Shop unter Inhalte → Dateien mit genau diesem Namen hochladen, dann greift der Hero-Slide automatisch darauf zu.
- **Grundpreis:** Schnüre (Uferleine, Silberleine, Vorratsleine) brauchen nach Preisangabenverordnung einen Preis pro Meter. In Shopify pro Variante unter „Grundpreis“ eintragen.
- **Bildauflösung (Qualitätsprüfung 26.09.2026):**
  - Hero-Fotos sind auf Retina-Bildschirmen weich. Für volle Schärfe braucht es ≥2880 px Breite. Vorhanden: Angler 1983 px, Topwater 2400 px, 10 %-Motiv 1672 px, Kurzläufer nur 1254 px. Bitte Originale in voller Größe liefern.
  - Das Handy-Motiv des Anglers (`…_99e322a9-….png`) liefert auf dem CDN einen Fehler (404), die Vorschau nutzt eine 1080-px-Version.
  - Kompaktblitz (Bild 1 und 2, 600 px) und Silberstreif (Bild 2, 500 px) sind im Shop nur klein vorhanden. Größere Fotos würden die Produktseiten schärfer machen.
- **Hero-Bild:** Der Live-Shop nutzt Werbebanner mit eingebranntem Text (10 %-Rabatt, Topwater, Kurzläufer). Für den neuen Hero braucht es ein Foto ohne Text.
- **Seiten ohne Text:** „Newsletter“ (leer, Inhalt aus App/Vorlage) und „Widerruf“ (nur ein Satz, Formular aus einer App).
- **Seitentexte „Versand & Lieferung“ und „Zahlung“** sind nur Einleitungen ohne Fakten. Die Fakten stehen in den Richtlinien.
- **Menü „Blechköder → Spinnerbaits“** zeigt auf „#“ (kein Ziel). Kollektion `spinnerbaits` (8 Produkte) existiert.
- **Menülinks mit falschem Ziel:** „Gummifische“ zeigt auf `/collections/frosche`, „Twister / Grub“ auf `/collections/wirbel`, „Spinner“ auf `/collections/spinnerbait`. Bitte prüfen.

## Bilder

- **Produktfotos im Studio-Look:** Alle Produktbilder wurden automatisch freigestellt und einheitlich gesetzt (gleiche Größe, heller Verlauf, weicher Schatten). Vorher/Nachher: `docs/vorschau/bilder-studio-look.png`. Wie die Bilder in den neuen Shop kommen (ZIP zum Hochladen oder nachträglicher Austausch), ist noch offen.
- **Köder an der Angelschnur (Hero):** Vier freigestellte Köder liegen als Theme-Dateien bei (`assets/lure-*.png`). Weitere lassen sich pro Motiv als PNG hochladen.

- Das Shopify-CDN ist jetzt freigegeben. Alle Design-Bilder sind gesichtet und zugeordnet:
  - **Logo und Favicon:** `LOGOKOeDER.png`
  - **Hero:** `angler-komplettlogo-ohne-werbetext.png` (Desktop) und die Hochformat-Version `…_99e322a9-….png` (Handy)
  - **Mega-Menü „Köder“:** die drei Fotos `hf_20260413_…`
  - **Ausrüstungs-Kacheln:** `koederdepot-kategorie-koeder/-angelruten/-angelzubehoer.png` und `rollen_new.png`
  - **Starter Bundle:** `ChatGPT_Image_16._Juli_2026_13_48_12.png` (Köderbox am See)
  - **Blog:** die Titelbilder der Beiträge (kommen automatisch aus Shopify)
- **Zielfisch-Zeichnungen:** `hecht/zander/barsch/forelle.png` sind weiße Linien auf beigem Kreis. Ich habe den Kreis entfernt und sie als Theme-Dateien `assets/fish-*.png` eingebaut. Sie liegen nur in 224 × 224 px vor. Für scharfe Darstellung auf Retina-Bildschirmen wäre eine Version ab 600 px oder als SVG besser.
- **Nicht verwendet:** Die Slider-Banner (10 % Rabatt, Topwater, Kurzläufer) haben eingebrannten Text und eignen sich nicht als Hero. Sie könnten als Aktionsbanner weiterleben.
- **Reste einer Theme-Vorlage** in den Dateien, die nichts mit Köderdepot zu tun haben: `banner.png`, `banner1.jpg`, `banner2.jpg`, `homepage1–4.jpg` (Hunde, Autositzbezug, Zoohandlung), `logo.jpg` (fremdes Logo). Können gelöscht werden.
- 91 Produkte sind aktiv und haben alle Bilder. Die 48 Entwürfe haben keine Bilder, sie sind leere Doppel (siehe „Produktdaten“).

## Aufräumen im Sortiment (Empfehlung, nicht umgesetzt)

- 24 Kollektionen sind als „ARCHIV“ markiert oder leer. Drei Kopien von „Willkommen bei Köderdepot – 10 % Rabatt“. Die Smart-Filter-Kollektion „globofilter…“ nicht löschen, sie gehört zu einer App.
- Tags uneinheitlich (z. B. „suchköder“ klein, „Monofyle Angelschnur“ als Produkttyp).
- Marke „juliusstrobl“ bei 4 Produkten statt „Köderdepot“.

## Bundles (Easy Bundles App)

- „Starter Set“ und „Combo Deal“ sind Produkte der App **Easy Bundles** (Preis 0,00 € im Produkt, Rabatt und Inhalt steuert die App). Die Zusammensetzung steht in der App, nicht im Store-Katalog, und ließ sich deshalb nicht auslesen.
- Die Vorlage `product.bundle` im neuen Theme ist jetzt leer: Bestandteile und Zielgruppe tragt ihr pro Bundle im Theme-Editor ein. Ohne Bestandteile wird der Abschnitt ausgeblendet.
- Klären: Soll das neue Theme die Easy-Bundles-App weiter nutzen (dann deren App-Block auf der Produktseite einsetzen) oder die eigene Bundle-Vorlage?

## Produktdaten

- **Import-Datei für den neuen Shop:** `inhalte/import/produkte-shopify-import.csv` mit allen 91 aktiven Produkten, 556 Varianten, 439 Bildern und Variantenbildern. Anleitung und Kollektions-Liste: `inhalte/import/ANLEITUNG.md`.
- **Die 48 Entwürfe sind leere Doppel** der aktiven Produkte (Preis 0,00 €, keine Bilder, dieselben Artikelnummern, z. B. „Minnow-Wobbler Köderdepot Langklinge – 18,5 g / 120 mm“ neben dem aktiven „Köderdepot Langklinge“). Empfehlung: nicht übernehmen. Sie liegen zur Sicherheit in `inhalte/import/entwuerfe-nicht-importieren.csv`.
- Farbvarianten heißen im Store wie technische Kürzel, z. B. „red-phantom-head“, „aurora-flash“. Für Kundinnen und Kunden lesbarer wäre „Red Phantom Head“. Das lässt sich in der CSV vor dem Import oder später in Shopify ändern.
- Doppelte Artikelnummern (`SF-SR-070-085-GS`, `HF-TS-140-400-BD`), 4 Varianten ohne Artikelnummer, 11 Varianten ohne Gewicht.
- Kollektion „Zubehör“: Regeln und tatsächlicher Inhalt im alten Shop passen nicht zusammen (Details in der Anleitung).
- Das Feld `kollektionen` in `produkte.json` nennt höchstens 10 Kollektionen je Produkt. Vollständig sind die Regeln in `kollektionen.json` (neu: Feld `bedingung` = „alle“ oder „beliebige“ Regel muss zutreffen).
- Lagerbestände in der CSV sind vom 26.09.2026 und müssen kurz vor dem Start abgeglichen werden.
