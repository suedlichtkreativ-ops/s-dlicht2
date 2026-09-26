# Köderdepot – Shopify-Theme

Eigenes Online-Store-2.0-Theme für den Angelshop **Köderdepot** aus Landsberg am Lech.
Ohne externe Bibliotheken, Schrift selbst gehostet (DSGVO), alle Inhalte im Shopify-Editor pflegbar.

Design und Regeln: [DESIGN.md](DESIGN.md)

## Theme mit Shopify verbinden

1. Shopify-Admin → **Onlineshop → Themes → Theme hinzufügen → Über GitHub verbinden**.
2. Repository `s-dlicht2` und den Branch wählen. Shopify übernimmt ab dann jeden Push automatisch.
3. Theme zuerst **nicht veröffentlichen**, sondern über „Anpassen“ einrichten und prüfen.

Alternativ lokal mit der Shopify CLI:

```bash
npx @shopify/cli theme dev --store <shop>.myshopify.com   # Vorschau mit echten Daten
npx @shopify/cli theme check                               # Prüfung (aktuell ohne Befund)
```

## Einrichtung nach dem Verbinden

| Schritt | Wo | Was |
|---|---|---|
| Logo | Theme anpassen → Theme-Einstellungen → Logo & Favicon | Logo als PNG (transparent) oder SVG hochladen |
| Laden-Daten | Theme-Einstellungen → Laden & Kontakt | Adresse, Öffnungszeiten, Telefon, E-Mail, Karten-Link |
| Hauptmenü | Onlineshop → Navigation → `main-menu` | Köder · Angelrollen · Angelruten · Zubehör · Bundles · FAQ. Menüpunkte mit **3 Ebenen** (Köder → Zielfisch/Softbaits/Hardbaits/Blechköder → Unterpunkte) öffnen das Mega-Menü; Menüpunkte mit **2 Ebenen** (Angelrollen, Angelruten, Bundles) eine kompakte Liste. Unterpunkte mit „Hecht“, „Zander“, „Barsch“, „Forelle“ oder „Karpfen“ im Namen bekommen automatisch ihr Fisch-Symbol |
| Mega-Menü-Bilder | Theme anpassen → Header → Block „Mega-Menü: Bild“ | Menüpunkt (z. B. „Köder“) eintragen und Bild wählen, mehrere Bilder möglich |
| Footer-Menüs | Navigation | `footer` (Sortiment) und ein Menü „Rechtliches“ (im Footer-Abschnitt auswählen) |
| Filter | App **Search & Discovery** (kostenlos von Shopify) | Filter anlegen: Verfügbarkeit, Preis, Marke, Köderart, Gewicht … |
| Abholung | Einstellungen → Versand und Zustellung → Abholung vor Ort | Laden aktivieren. Die Produktseite zeigt dann automatisch „Abholung möglich in …“ |
| Rechtstexte | Einstellungen → Richtlinien + Seiten | Impressum, Datenschutz, AGB, Widerruf, Versand. Texte müssen von euch bzw. eurem Rechtsdienst kommen |
| Kontaktseite | Seite „Kontakt“ anlegen | Vorlage `page.contact` wählen |
| FAQ | Seite „FAQ“ anlegen | Vorlage `page.faq` wählen. Die 7 Fragen sind vorbefüllt, die Antworten sind Entwürfe und müssen geprüft werden |
| News & Empfehlungen | Onlineshop → Blogbeiträge | Blog anlegen und im Startseiten-Abschnitt „Blog-Beiträge“ auswählen |
| Zielfisch | Startseite → „Zielfisch-Auswahl“ | Je Fisch eine Kollektion wählen. Eigene Fisch-Zeichnungen können das Symbol ersetzen |
| Über-uns-Seite | Seite anlegen | Vorlage `page.about` wählen |
| Ausrüstungs-Kacheln | Startseite → „Oder nach Ausrüstung“ | Je Kachel eine Kollektion und ein freigestelltes Bild wählen |
| Starter Bundle | Startseite → „Neu dabei?“ | Bild und Link zur Bundles-Kollektion setzen |
| Bundle-Produkte | Produkt → Theme-Vorlage `product.bundle` | Im Abschnitt „Bundle-Inhalt“ die enthaltenen Produkte und Mengen wählen. Die Ersparnis gegenüber Einzelkauf wird automatisch berechnet |
| Versandkostenfrei-Anzeige | Theme-Einstellungen → Warenkorb | Schwelle in € (Standard 100). Der Warenkorb zeigt „Noch X € bis zum kostenlosen Versand“ |

## Aufbau

```
layout/      theme.liquid, password.liquid
sections/    Header (Mega-Menü), Hero, Kategorie-Kacheln, Produktauswahl, Laden, Text,
             Bild mit Text, Footer, Kollektion (Filter), Produkt, Warenkorb (Drawer + Seite),
             Suche, Seiten, Blog, 404, Passwort
snippets/    Produktkarte, Preis, Bild (responsive + Einblenden), Icons, Filter, Pagination
templates/   JSON-Vorlagen (OS 2.0) + Kundenkonto-Vorlagen
assets/      base.css, theme.js, archivo-var.woff2
locales/     de.default.json
```

Ordner wie `.claude/`, `licenses/` und die Markdown-Dateien gehören nicht zum Theme und werden von Shopify ignoriert.

## Lizenzen

- Schrift **Archivo** (Omnibus-Type): SIL Open Font License 1.1, siehe [licenses/archivo-OFL.txt](licenses/archivo-OFL.txt).
