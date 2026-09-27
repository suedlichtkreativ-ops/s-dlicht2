# Offene Punkte

Stand 27.09.2026. Am Live-Shop „Köderdepot neu“ wurde nichts verändert: nur lesende Abfragen, kein Theme-Upload, keine Einstellungen. Details zu einzelnen Themen stehen in den verlinkten Dateien.

## A. Von euch zu klären oder zu liefern

### Entscheidungen

Alle entschieden am 27.09.2026 (siehe D). Offen ist nur noch:

- [ ] **AGB 5.5** („Selbstabholung nicht möglich“) bei der IT-Recht Kanzlei ändern lassen, weil die Abholung bleibt. Dabei im Mandantenportal E-Mail `info@koederdepot.de` und Anschrift „Schwaighofstraße 18 h“ hinterlegen. (`rechtliches/README.md`)

### Fehlende Angaben

- [ ] **Stahl-/Titanvorfach** fürs Sortiment: Name, Preis, Bild. Danach kommt es in Starter-Bundle und Hecht-Set, Preise werden neu berechnet. (`bundles.md`)
- [ ] **Gewichte:** Wurfgewicht Nachtjagdrute 2,4 m und Weitwurfrute Spinn 2,7 m; Eigengewicht Uferrolle 1500/2500, Stromjäger 2800/5800/12000, Lösezange Feingriff.
- [ ] **Öffnungszeiten** für die Abholung (Zeile ist bis dahin ausgeblendet).
- [ ] **Google-Maps-Link** für „Route planen“.
- [ ] **TikTok-Link** (Profil-Adresse). Facebook und YouTube gibt es nicht.

### Bilder

- [ ] **Hero-Fotos in voller Größe** (mind. 2880 px breit): Angler 1983 px, Topwater 2400 px, 10 %-Motiv 1672 px, Kurzläufer nur 1254 px. Wirken auf Retina-Bildschirmen weich.
- [ ] **Handy-Motiv des Anglers** (`…_99e322a9-….png`) liefert auf dem CDN einen Fehler (404).
- [ ] **Größere Produktfotos** für Kompaktblitz (Bild 1 und 2, 600 px) und Silberstreif (Bild 2, 500 px).
- [ ] **Titelbild Blog „Köderwahl“** ist nur 1200 px breit.

## B. Beim Einrichten des neuen Shops (Checkliste)

Reihenfolge und Details: `import/ANLEITUNG.md`, `bundles.md`, `rechtliches/README.md`.

1. [ ] Metafeld-Definitionen `custom.gewicht` und `custom.wurfgewicht` anlegen (Einzeiliger Text).
2. [ ] Studio-Fotos aus `bilder/produkte/` unter Inhalte → Dateien hochladen, dann Produkte importieren: `import/produkte-shopify-import.csv` (91 Produkte, lesbare Farbnamen, deutsche Produkttypen, Kugelblitz als Jigkopf). Entwürfe (`entwuerfe-nicht-importieren.csv`) nicht importieren.
3. [ ] Lagerbestände kurz vor dem Start abgleichen (CSV-Stand 26.09.2026).
4. [ ] Kollektionen und Menüs laut Anleitung anlegen (inkl. „Bundles“ und Menüpunkt „Köder-Finder“).
5. [ ] Seiten: „Köder-Finder“ (Vorlage `page.koeder-finder`), „Widerruf“ (Vorlage `page.widerruf` + App **EU Widerruf Button**).
6. [ ] Rechtstexte unter Einstellungen → Richtlinien einfügen (`rechtliches/*.html`), Menü „Kundeninfo“ anlegen.
7. [ ] Datenschutzerklärung ergänzen lassen (Newsletter, Cookies, später KI-Chat) – IT-Recht Kanzlei.
8. [ ] App **Shopify Bundles**: 5 Bundles mit Bild und Vorlage anlegen, kein Vergleichspreis.
9. [ ] Rabatte: WILLKOMMEN10 (10 %, einmal pro Kunde, kein Mindestbestellwert, nicht kombinierbar); Köder-Box als 3 automatische Rabatte (Kollektion „Köder“, ab 3/5/8 Stück = 5/10/15 %, nicht kombinierbar).
10. [ ] Double-Opt-in für E-Mail-Marketing, Shopify-Email-Automation „Willkommen neue Abonnenten“ mit dem Code, Cookie-Banner (Einstellungen → Kundendatenschutz). Bis dahin das Pop-up im Editor ausschalten.
11. [ ] Abholung vor Ort am Standort aktivieren (sonst keine Option an der Kasse).
12. [ ] Versandprofil Sperrgut: 9,99 € für Ruten ab 115 cm / Sendungen ab 30 kg.
13. [ ] Grundpreis pro Meter bei Uferleine, Silberleine, Vorratsleine.
14. [ ] Dateien hochladen: `bilder/hero-topwater-ohne-text.jpg` (genau dieser Name), Bundle-Bilder aus `bilder/bundles/`.

## C. Später

- [ ] **KI-Chat** als Ergänzung zum Köder-Finder: Anthropic-Konto, kleiner Server, Datenschutz-Ergänzung, KI-Hinweis nach EU-KI-Verordnung.
- [ ] **Aufräumen im alten Katalog** (Empfehlung): 24 leere/Archiv-Kollektionen, drei Kopien „Willkommen bei Köderdepot“, uneinheitliche Tags, Marke „juliusstrobl“ bei 4 Produkten, doppelte Artikelnummern (`SF-SR-070-085-GS`, `HF-TS-140-400-BD`), 4 Varianten ohne Artikelnummer. „globofilter…“ nicht löschen (App).
- [ ] **Fremde Vorlagen-Bilder** in den Shop-Dateien löschen: `banner.png`, `banner1.jpg`, `banner2.jpg`, `homepage1–4.jpg`, `logo.jpg`.

## D. Erledigt (zur Kontrolle)

- Versanddienstleister überall **DPD** (Leiste, Produktseite, FAQ).
- **Kugelblitz** ist Jigkopf (Zubehör → Jigköpfe), nicht mehr Metal Jig.
- **Instagram** verlinkt (Footer, Handy-Menü).
- **Bundles** definiert: Starter + Hecht/Zander/Barsch/Forelle, 10 % Nachlass, im Menü und auf der Startseite.
- **Rechtstexte** wörtlich übernommen, Siegel „AGB by IT-Recht Kanzlei“ im Footer.
- **Topwater-Hero** ohne eingebrannten Text; Fisch-Symbole als scharfe SVG.
- Menülinks auf die richtigen Kategorien (Gummifische, Twister & Grubs, Spinner, Spinnerbaits).
- Farbnamen lesbar („Red Phantom Head“ statt „red-phantom-head“).
- Preise wechseln mit jeder Variante (539 Varianten geprüft); Gewicht/Wurfgewicht auf Karten und Produktseiten.
- **Entscheidungen 27.09.2026:**
  - Abholung vor Ort bleibt (AGB 5.5 wird geändert, siehe A).
  - „Kauf auf Rechnung“ aus der gelben Leiste entfernt; Produktseite: „Sicher zahlen mit PayPal & Karte“.
  - E-Mail überall `info@koederdepot.de`, Anschrift „Schwaighofstraße 18 h“ (auch in Impressum, Widerruf, Datenschutz).
  - WILLKOMMEN10: einmal pro Kunde, kein Mindestbestellwert, nicht mit Bundle-/Köder-Box-Rabatt kombinierbar (steht im Pop-up).
  - Alte App-Bundles „Starter Set“ und „Combo Deal“ werden nicht übernommen.
  - Telefon 0176 41450088 steht im Footer.
  - FAQ-Antworten „Anfänger“ und „Spinn- oder Casting-Rute“ freigegeben.
  - Studio-Fotos kommen mit dem CSV-Import (`bilder/produkte/`, Anleitung in `import/ANLEITUNG.md`).
