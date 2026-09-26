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
- **Hero-Bild:** Der Live-Shop nutzt Werbebanner mit eingebranntem Text (10 %-Rabatt, Topwater, Kurzläufer). Für den neuen Hero braucht es ein Foto ohne Text.
- **Seiten ohne Text:** „Newsletter“ (leer, Inhalt aus App/Vorlage) und „Widerruf“ (nur ein Satz, Formular aus einer App).
- **Seitentexte „Versand & Lieferung“ und „Zahlung“** sind nur Einleitungen ohne Fakten. Die Fakten stehen in den Richtlinien.
- **Menü „Blechköder → Spinnerbaits“** zeigt auf „#“ (kein Ziel). Kollektion `spinnerbaits` (8 Produkte) existiert.
- **Menülinks mit falschem Ziel:** „Gummifische“ zeigt auf `/collections/frosche`, „Twister / Grub“ auf `/collections/wirbel`, „Spinner“ auf `/collections/spinnerbait`. Bitte prüfen.

## Bilder

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
- 48 Produkte sind Entwürfe (DRAFT), 2 nicht gelistet (UNLISTED), 91 aktiv. 48 Produkte haben kein Bild.

## Aufräumen im Sortiment (Empfehlung, nicht umgesetzt)

- 24 Kollektionen sind als „ARCHIV“ markiert oder leer. Drei Kopien von „Willkommen bei Köderdepot – 10 % Rabatt“. Die Smart-Filter-Kollektion „globofilter…“ nicht löschen, sie gehört zu einer App.
- Tags uneinheitlich (z. B. „suchköder“ klein, „Monofyle Angelschnur“ als Produkttyp).
- Marke „juliusstrobl“ bei 4 Produkten statt „Köderdepot“.

## Bundles (Easy Bundles App)

- „Starter Set“ und „Combo Deal“ sind Produkte der App **Easy Bundles** (Preis 0,00 € im Produkt, Rabatt und Inhalt steuert die App). Die Zusammensetzung steht in der App, nicht im Store-Katalog, und ließ sich deshalb nicht auslesen.
- Die Vorlage `product.bundle` im neuen Theme ist jetzt leer: Bestandteile und Zielgruppe tragt ihr pro Bundle im Theme-Editor ein. Ohne Bestandteile wird der Abschnitt ausgeblendet.
- Klären: Soll das neue Theme die Easy-Bundles-App weiter nutzen (dann deren App-Block auf der Produktseite einsetzen) oder die eigene Bundle-Vorlage?

## Produktdaten

- Farbvarianten heißen im Store wie technische Kürzel, z. B. „red-phantom-head“, „aurora-flash“. Für Kundinnen und Kunden lesbarer wäre „Red Phantom Head“. Das ist im Store zu ändern, nicht im Theme.
- 48 Produkte sind Entwürfe. Sie erscheinen erst nach dem Aktivieren im neuen Shop.
