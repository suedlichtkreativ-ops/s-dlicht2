# Offene Punkte

Stand 27.09.2026. Am Live-Shop „Köderdepot neu“ wurde nichts verändert: nur lesende Abfragen, kein Theme-Upload, keine Einstellungen. Details zu einzelnen Themen stehen in den verlinkten Dateien.

## A. Von euch zu klären oder zu liefern

### Entscheidungen

Alle entschieden (siehe D). Empfehlung:

- [ ] **AGB 5.5** habe ich selbst angepasst (`rechtliches/agb.html`). Empfehlung: im Mandantenportal der IT-Recht Kanzlei trotzdem „Selbstabholung möglich“, E-Mail `info@koederdepot.de` und Anschrift „Schwaighofstraße 18 h“ hinterlegen, sonst überschreibt das nächste Kanzlei-Update die Änderung. (`rechtliches/README.md`)

### Fangberichte & Köderberatung

- [ ] **Fangberichte (optional):** beide fertig. Wer mag, ergänzt bei den Forellen Länge, Datum und Köderfarben sowie bei beiden den Link zum Instagram-Post. (`fangberichte.md`)
- [ ] **Texte der Köderberatung prüfen** (Zielfisch- und Wassertiefen-Tipps sind meine Entwürfe; der Einleitungstext stammt von eurer bisherigen Seite „Köderberatung“).

### Bilder

- [ ] **Hero-Fotos in voller Größe** (mind. 2880 px breit): Angler 1983 px, Topwater 2400 px, 10 %-Motiv 1672 px, Kurzläufer nur 1254 px. Wirken auf Retina-Bildschirmen weich.
- [ ] **Größere Produktfotos** für Kompaktblitz (Bild 1 und 2, 600 px) und Silberstreif (Bild 2, 500 px).
- [ ] **Titelbild Blog „Köderwahl“** ist nur 1200 px breit.

## B. Beim Einrichten des neuen Shops (Checkliste)

Reihenfolge und Details: `import/ANLEITUNG.md`, `bundles.md`, `rechtliches/README.md`.

1. [ ] Metafeld-Definitionen `custom.gewicht` und `custom.wurfgewicht` anlegen (Einzeiliger Text).
2. [ ] Studio-Fotos aus `bilder/produkte/` unter Inhalte → Dateien hochladen, dann Produkte importieren: `import/produkte-shopify-import.csv` (91 Produkte, lesbare Farbnamen, deutsche Produkttypen, Kugelblitz als Jigkopf). Entwürfe (`entwuerfe-nicht-importieren.csv`) nicht importieren.
3. [ ] Lagerbestände kurz vor dem Start abgleichen (CSV-Stand 26.09.2026).
4. [ ] Kollektionen und Menüs laut Anleitung anlegen (inkl. „Bundles“, „Köderberatung“ mit Unterpunkten und „Fänge“).
5. [ ] Seiten: der bestehenden Seite „Köderberatung“ (`/pages/koderberatung`) die Vorlage `page.koderberatung` geben; Blog „Fangberichte“ (Handle `fangberichte`) anlegen, „Widerruf“ (Vorlage `page.widerruf` + App **EU Widerruf Button**).
6. [ ] Rechtstexte unter Einstellungen → Richtlinien einfügen (`rechtliches/*.html`), Menü „Kundeninfo“ anlegen.
7. [ ] Datenschutzerklärung ergänzen lassen (Newsletter, Cookies, später KI-Chat) – IT-Recht Kanzlei.
8. [ ] App **Shopify Bundles**: 5 Bundles mit Bild und Vorlage anlegen, kein Vergleichspreis.
9. [ ] Rabatte: WILLKOMMEN10 (10 %, einmal pro Kunde, kein Mindestbestellwert, nicht kombinierbar, Berechtigung: Kundensegment „noch keine Bestellung“, damit nur Neukunden mit Konto ihn nutzen können); Köder-Box als 3 automatische Rabatte (Kollektion „Köder“, ab 3/5/8 Stück = 5/10/15 %, nicht kombinierbar).
10. [ ] Double-Opt-in für E-Mail-Marketing (Newsletter-Häkchen bei der Registrierung), Cookie-Banner (Einstellungen → Kundendatenschutz). Bis dahin das Pop-up im Editor ausschalten.
11. [ ] Abholung vor Ort am Standort aktivieren (sonst keine Option an der Kasse).
12. [ ] Versandprofil Sperrgut: 9,99 € für Ruten ab 115 cm / Sendungen ab 30 kg.
13. [ ] Grundpreis pro Meter bei Uferleine, Silberleine, Vorratsleine.
14. [ ] Dateien hochladen: `bilder/hero-topwater-ohne-text.jpg`, `bilder/hero-kurzlaeufer.jpg`, `bilder/hero-kurzlaeufer-mobile.jpg`, `bilder/hero-angler-mobile.jpg`, `bilder/stimmung/*.jpg`, `bilder/faenge/*.jpg` (genau diese Namen), Bundle-Bilder aus `bilder/bundles/`.
15. [ ] **Kundenkonten auf „klassisch“ stellen** (Einstellungen → Kundenkonten). Nur dann nutzt der Shop die eigene Registrierungs-/Login-Seite mit Name, Newsletter-Häkchen und automatischem 10-%-Rabatt. Mit den „neuen Kundenkonten“ (Login per Einmalcode) zeigt Shopify seine eigene Seite, dann den Pop-up-Modus im Editor auf „Per E-Mail nach Newsletter-Anmeldung“ stellen.
16. [ ] **Fangberichte**: Metafelder und die zwei Beiträge laut `fangberichte.md` anlegen.
17. [ ] **Seiten-Vorlagen zuweisen:** Zahlung → `page.zahlung`, Versand & Lieferung → `page.versand`, Newsletter → `page.newsletter`, Über uns → `page.about`, Kontakt → `page.contact`, Widerruf → `page.widerruf`. Menü „Shop-Service“: „Versandkosten“ auf `/pages/versand-lieferung`.
18. [ ] **Widerrufsformular** `rechtliches/widerrufsformular.pdf` unter Inhalte → Dateien hochladen (genau dieser Name); die Widerruf-Seite verlinkt es automatisch.
19. [ ] **Barzahlung bei Abholung** als manuelle Zahlungsart anlegen (Einstellungen → Zahlungen → Manuelle Zahlungsmethoden), nur für Abholung.

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
- **Umgesetzt 27.09.2026 (Nachmittag):** Köderkiste und Preisschild „−10 %“ im Hero, Kurzläufer-Hintergrund aus echten Kurzläufern, Registrierung/Login mit Willkommensrabatt, Köderberatung als eigene Seite und überall verlinkt, Fangberichte-Blog mit Ausrüstung, alle 439 Produktfotos nachgeschärft.
- **Google-Profil** (Route planen) und **TikTok** `@kderdepot` verlinkt; **Instagram** korrigiert auf `@koderdepot` (vorher falsch `koederdepot`); Fänge mit Instagram-Markierung („Zeig uns deinen Fang“, „Gefangen von @…“, Link zum Post).
- **Abholzeiten** 09:00–17:00 Uhr, nach Vereinbarung auch früher oder später (Footer, Kontakt, Laden-Abschnitt, AGB 5.5, Versandseite); **Route planen** führt zum Google-Maps-Eintrag.
- **Gestrichen:** Stahl-/Titanvorfach (kommt nicht ins Sortiment) und die fehlenden Gewichte (gibt es nicht; die Zeilen bleiben bei diesen Produkten einfach leer).
- **Handy-Motiv des Anglers** neu aus dem Desktop-Foto zugeschnitten (`bilder/hero-angler-mobile.jpg`), das alte war defekt.
- **Seiten fertig:** Zahlung (PayPal, Karte, Apple/Google Pay, bar bei Abholung), Versandkosten & Lieferung, Newsletter (ca. 1× im Monat, Neuheiten & Aktionen), Über uns („Unser Versprechen“), Support-Kontakt, Widerruf mit PDF-Formular zum Ausfüllen. Instagram bleibt als Link.
