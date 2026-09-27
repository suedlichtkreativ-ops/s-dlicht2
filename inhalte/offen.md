# Offene Punkte

Stand 27.09.2026. Mit eurer Freigabe ist die unsichtbare Vorbereitung im Live-Store erledigt (Theme unveröffentlicht, Inhalte als Entwurf/geplant). Am sichtbaren Shop hat sich nichts geändert. Stand und nächste Schritte: `umstellung.md`. Details zu einzelnen Themen stehen in den verlinkten Dateien.

## Vor Go-live zu entscheiden (Stand 27.09.2026 abends)

- [x] **Produktfotos freigegeben** und im Shop (27.09.2026).
- [x] **Kategorie-Texte freigegeben** und im Shop (27.09.2026). Vorher: Entwürfe in `kategorie-texte.md` (gehen erst nach Freigabe in den Shop). Hintergrund: 21 Menü-Kategorien haben im Shop keinen Einleitungstext (u. a. Köder, Hechtköder, Zanderköder, Barschköder, Forellenköder, Wobbler, Crankbaits, Jerkbaits, Popper, Swimbaits, Blinker, Angelruten, Wirbel, Bundles, Spinner, Metal Jigs, Tail Spinner, Gummiwürmer, Lösezangen, Zielfisch Forelle). **„Frösche & Topwater“ zeigt fälschlich den Gummifisch-Text.**
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

## B. Umschalten (Stand 27.09.2026, abends)

Erledigt (Details in `umstellung.md`): Produkte, Fotos, Farbnamen, Kategorien und Texte, Bundles, Fangberichte, Menü, Rabatte, Abholung vor Ort, Grundpreise.

**Nur ihr im Admin – in dieser Reihenfolge:**
1. [x] **Theme veröffentlichen:** erledigt 27.09.2026, 23:23 Uhr. Onlineshop → Themes → „Köderdepot 2026 (Südlicht)“ → Veröffentlichen.
2. [x] **Versand:** erledigt (27.09.). Neues Profil „Standardversand“: Deutschland 4,99 €, ab 59 € kostenlos; EU 13,99 €; International 19,99 €. Alle 594 Varianten zugeordnet, Angelruten bleiben im Sperrgut-Profil (9,99 €). Das allgemeine Profil (5,99 €, frei ab 150 €) greift nur noch für **neu angelegte** Produkte: dort ebenfalls auf 4,99 € / ab 59 € stellen oder neue Produkte dem Profil „Standardversand“ zuordnen.
3. [x] **Sperrgut**: erledigt (eigenes Profil, 11 Ruten, 9,99 €).
4. [ ] **Rechtstexte** (Einstellungen → Richtlinien): Inhalte aus `rechtliches/impressum.html`, `agb.html`, `widerrufsbelehrung.html`, `datenschutz.html`, `versand.html` einfügen (HTML-Ansicht „<>“). Die Schnittstelle darf das nicht.
5. [x] **Kundenkonten:** klassische Konten bietet Shopify nicht mehr an. Stattdessen legen Pop-up, Preisschild und Newsletter-Seite den Code WILLKOMMEN10 direkt in den Warenkorb; der Rabatt gilt für alle Kunden, einmal pro Kunde.
6. [ ] **Barzahlung bei Abholung** (Einstellungen → Zahlungen → Manuelle Zahlungsmethoden).
7. [x] **Double-Opt-in** erledigt; **Cookie-Banner** automatisiert, sichtbar in Deutschland (einziger Markt, daher vollständig). Alt: (Einstellungen → Kundendatenschutz). Einwilligung ist bisher nur für Deutschland Pflicht: für alle EU-/EWR-Länder einschalten (die Schnittstelle hat dafür keine Berechtigung).
8. [x] App **„EU Widerruf Button“** installiert und auf der Seite „Widerruf“ eingesetzt (28.09.). Noch offen: im Theme-Editor auf der Seite „Widerruf“ den App-Block einsetzen (Werte in `templates/page.widerruf.json`).
9. [ ] **Datenschutzerklärung** um Newsletter und Cookies ergänzen lassen (IT-Recht Kanzlei).
10. [x] Abholzeit „innerhalb von 24 Stunden“ bestätigt.

### Checkout im Köderdepot-Design (entschieden 27.09.2026)

Die Schnittstelle darf das Checkout-Design nur bei Shopify Plus ändern; im Basic-Tarif geht es im Admin: **Einstellungen → Checkout → Anpassen** (Checkout-Editor) → Zahnrad „Einstellungen“:

| Einstellung | Wert |
|---|---|
| Logo | `LOGOKOeDER.png` (liegt schon unter Inhalte → Dateien), Größe „Mittel“, Position links |
| Hintergrund Hauptbereich | `#FFFFFF` |
| Hintergrund Bestellübersicht | `#F4F4F1` (Papier) |
| Akzentfarbe (Links, Auswahl) | `#0D0D0D` (Tinte) |
| Schaltflächen | `#FFCC00` (Signalgelb), Text schwarz |
| Schriftart Überschriften und Text | **Archivo** |
| Eckenradius | keiner / eckig (wie im Shop) |

Das gilt automatisch auch für die Shopify-Anmeldeseite. Mit **klassischen Kundenkonten** (siehe Punkt 5) nutzt der Shop für Anmeldung und Registrierung aber ohnehin die eigene, gestaltete Seite.

- [ ] **Währungsformat** für Kasse und E-Mails: Einstellungen → Allgemein → Shop-Standardeinstellungen → Währungsanzeige → „Formatierung ändern“: alle vier Felder auf `{{amount_with_comma_separator}} €` bzw. `{{amount_with_comma_separator}} EUR` (Zahl vor dem €). Im Theme ist das schon umgestellt.
- [ ] **Shopname** auf „Köderdepot“ ändern (Einstellungen → Allgemein → Shopname; steht im Checkout und in Kunden-E-Mails).
- [x] Abholort umbenannt in „Köderdepot Landsberg“, Adresse ohne Doppelung (27.09.2026).

- [x] **Sonderangebote:** entschieden 27.09.2026: weglassen.

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
