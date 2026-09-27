# Offene Punkte

Stand 27.09.2026. Mit eurer Freigabe ist die unsichtbare Vorbereitung im Live-Store erledigt (Theme unveröffentlicht, Inhalte als Entwurf/geplant). Am sichtbaren Shop hat sich nichts geändert. Stand und nächste Schritte: `umstellung.md`. Details zu einzelnen Themen stehen in den verlinkten Dateien.

## Vor Go-live zu entscheiden (Stand 27.09.2026 abends)

- [ ] **Produktfotos freigeben:** Übersicht in `bilder/pruefung/` (vorher/nachher und alle 439).
- [ ] **Kategorie-Texte prüfen:** Entwürfe in `kategorie-texte.md` (gehen erst nach Freigabe in den Shop). Hintergrund: 21 Menü-Kategorien haben im Shop keinen Einleitungstext (u. a. Köder, Hechtköder, Zanderköder, Barschköder, Forellenköder, Wobbler, Crankbaits, Jerkbaits, Popper, Swimbaits, Blinker, Angelruten, Wirbel, Bundles, Spinner, Metal Jigs, Tail Spinner, Gummiwürmer, Lösezangen, Zielfisch Forelle). **„Frösche & Topwater“ zeigt fälschlich den Gummifisch-Text.**
- [x] **Stahl-/Titanvorfach-Tipp** entfernt (Köderberatung Hecht, Bundles Starter und Hecht, FAQ „Anfänger“).
- [x] **Widerruf-Seite** auf „du“ umgestellt (Widerrufsbelehrung der Kanzlei unverändert).

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

## B. Umschalten (Checkliste, Stand 27.09.2026 abends)

Schon im Shop, unsichtbar (erledigt):
- [x] Metafeld-Definitionen (13, u. a. `custom.gewicht`, `custom.wurfgewicht`)
- [x] Dateien hochgeladen (Hero, Stimmung, Fänge, Bundle-Bilder, `widerrufsformular.pdf`)
- [x] 5 neue Kollektionen (unveröffentlicht), 3 neue Menüs
- [x] Blog „Fangberichte“ mit 5 Beiträgen (unveröffentlicht, mit Metafeldern)
- [x] 5 Bundles als Entwurf, Bestandteile verknüpft
- [x] Rabatte WILLKOMMEN10 und Köder-Box 3/5/8 (geplant ab 2030) und Kundensegment „Noch keine Bestellung“
- [x] Seiten-Vorlagen: Köderberatung, Zahlung, Versand & Lieferung, Über uns
- [x] Seiten- und Kategorietexte von Kopier-Resten bereinigt, Widerruf auf „du“
- [x] Produkt-Backup, 439 Studio-Fotos neu belichtet (warten auf Freigabe)

Beim Umschalten, von mir (erst nach „Online“):
1. [ ] Produkte (91): Studio-Fotos, lesbare Farbnamen, deutsche Produkttypen, Gewicht/Wurfgewicht. Alte Bilder abhängen, nicht löschen.
2. [ ] Lagerbestände abgleichen (CSV-Stand 26.09.2026).
3. [ ] Kollektionsregeln auf die neuen Produkttypen umstellen, manuelle Kollektionen befüllen, 5 neue veröffentlichen.
4. [ ] Kategorie-Texte eintragen (nach Freigabe, inkl. Korrektur „Frösche & Topwater“).
5. [ ] Fangberichte veröffentlichen, Bundles aktiv schalten und ins Menü `kd-hauptmenue`.
6. [ ] Rabatte: Startdatum auf den Starttag.
7. [ ] Versand: 4,99 €, kostenlos ab 59 €, Sperrgut 9,99 € (Ruten ab 115 cm), Abholung vor Ort aktivieren.
8. [ ] Rechtstexte unter Richtlinien (`rechtliches/*.html`).
9. [ ] Vorlagen zuweisen: Newsletter → `page.newsletter`, Kontakt → `page.contact`, Widerruf → `page.widerruf`.
10. [ ] Grundpreis pro Meter bei Uferleine, Silberleine, Vorratsleine.

Nur ihr im Admin (die Schnittstelle erlaubt das nicht):
11. [ ] Theme „Köderdepot 2026 (Südlicht)“ veröffentlichen.
12. [ ] Kundenkonten auf „klassisch“ (Einstellungen → Kundenkonten).
13. [ ] Barzahlung bei Abholung (Einstellungen → Zahlungen → Manuelle Zahlungsmethoden).
14. [ ] Double-Opt-in und Cookie-Banner (Einstellungen → Kundendatenschutz).
15. [ ] App „EU Widerruf Button“ für die Widerruf-Seite.
16. [ ] Datenschutzerklärung ergänzen lassen (Newsletter, Cookies) – IT-Recht Kanzlei.

- [ ] **Sonderangebote:** Der alte Menüpunkt zeigt auf eine leere Archiv-Kollektion (`sale`). Im neuen Menü weggelassen. Soll es eine Sale-Kollektion geben?

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
- **Versandkostenfrei ab 59 €** (vorher 100 €) überall angepasst: Ansage-Leiste, Produktseiten, Bundles, FAQ, Versandseite, Warenkorb-Fortschritt, Versandrichtlinie.
