# Rechtstexte aus dem alten Shop

Stand der Übernahme: 27.09.2026, per Lesezugriff aus „Köderdepot neu“. Die Texte sind **wörtlich** übernommen (HTML, so wie sie in Shopify hinterlegt sind). Nichts wurde umformuliert.

| Datei | Shopify-Richtlinie | Stand im alten Shop |
|---|---|---|
| `impressum.html` | Impressum | 27.08.2026 |
| `agb.html` | AGB (Nutzungsbedingungen) | 27.08.2026 |
| `widerrufsbelehrung.html` | Widerrufsrecht (inkl. Muster-Widerrufsformular) | 27.08.2026 |
| `datenschutz.html` | Datenschutzerklärung | 27.08.2026 |
| `versand.html` | Versand | 21.09.2026 |

Eine lesbare Fassung aller Texte steht zusätzlich in `inhalte/richtlinien.md`.

## So kommen sie in den neuen Shop

1. Shopify-Admin → Einstellungen → Richtlinien.
2. Pro Richtlinie den Inhalt der passenden Datei einfügen (im Editor auf „<>“ / HTML umschalten, damit Überschriften und Tabelle erhalten bleiben).
3. Menü „Kundeninfo“ (Footer, Rechtliches) mit diesen Einträgen anlegen: Über uns, AGB, Widerrufsbelehrung, Datenschutz, Impressum, Widerruf (Seite `widerruf-formular`). Link-Typ jeweils „Richtlinien“ bzw. „Seiten“. Das Theme zeigt das Menü im Footer an; die Richtlinien-Seiten sind im Theme-Design gestaltet.

## Siegel „AGB by IT-Recht Kanzlei“

- In AGB, Widerrufsbelehrung und Datenschutz steht am Ende der Copyright-Block der IT-Recht Kanzlei (Logo + Link). Er ist in den Dateien enthalten und bleibt beim Einfügen erhalten.
- Zusätzlich zeigt das Theme das Siegel in der Fußzeile (Footer → „Siegel Rechtstexte“: Link, Bild-Adresse, Text). Das Bild wird vom Server der IT-Recht Kanzlei geladen; lädt es nicht, erscheint der Text „AGB by IT-Recht Kanzlei“.

## Widerrufsbutton (App)

Die Seite „Widerruf“ (`/pages/widerruf-formular`) nutzt im alten Shop die App **EU Widerruf Button** (Formular mit Bestellsuche). Im neuen Shop die App installieren, der Seite die Vorlage `page.widerruf` geben und im Editor den App-Block „form-inline“ einfügen. Die Vorlage liegt im Theme bereit.

## Beim Abgleich aufgefallen – entschieden am 27.09.2026

- **Selbstabholung:** bleibt (kostenlos in Landsberg). AGB 5.5 habe ich in `agb.html` selbst angepasst (Abholung möglich, Adresse, Abholzeiten 09:00–17:00 Uhr bzw. nach Vereinbarung); die Versandseite nennt dieselben Angaben. **Achtung:** Der Text stammt von der IT-Recht Kanzlei. Eine eigene Änderung fällt nicht unter deren Haftung/Update-Service und wird beim nächsten automatischen Update überschrieben. Sicherer: Im Mandantenportal „Selbstabholung möglich“ einstellen, dann liefert die Kanzlei eine passende Fassung.
- **Kauf auf Rechnung:** Hinweis aus der gelben Leiste entfernt. Auf der Produktseite steht jetzt „Sicher zahlen mit PayPal & Karte“.
- **E-Mail-Adresse:** überall `info@koederdepot.de`. In Impressum, Widerruf und Datenschutz ersetzt. Bitte auch im Mandantenportal der IT-Recht Kanzlei so hinterlegen, sonst kommt beim nächsten Update die alte Adresse zurück.
- **Anschrift:** überall „Schwaighofstraße 18 h“. In den Rechtstexten ersetzt, ebenfalls im Mandantenportal anpassen.
- **Datenschutz fehlt für Newsletter und Cookies:** Die Datenschutzerklärung behandelt Website-Besuch, Kontakt, Bestellung und Zahlungsdienste, aber nicht Newsletter (Anmeldung im Pop-up, Double-Opt-in, Shopify Email) und nicht Cookies/Cookie-Banner. Bitte beim Rechtstexte-Anbieter ergänzen lassen, bevor das Pop-up live geht.
- **Sperrgut:** Versandrichtlinie: 9,99 € Zuschlag für Ruten ab 115 cm Transportmaß oder Sendungen ab 30 kg. In Shopify muss das als eigene Versandrate (Versandprofil für Ruten) eingerichtet sein, damit der Checkout es korrekt berechnet.
- **Versanddienstleister:** Versandrichtlinie nennt DPD. Die gelbe Leiste sagte „Schnell geliefert mit DHL“ – im Theme auf DPD korrigiert.

Rechtlich verbindlich prüfen kann das nur euer Rechtstexte-Anbieter bzw. eine Kanzlei.
