# Bundles & Köder-Box – Einrichtung im neuen Shop

Alle Daten stehen in `inhalte/bundles.json` (Bestandteile mit Handle, Variante, Menge, Einzelpreis). Bilder: `inhalte/bilder/bundles/` (aus den echten Studiofotos der Bestandteile zusammengesetzt).

## Feste Bundles (je 10 % Nachlass)

| Bundle | Handle | Vorlage | Einzelwert | Bundle-Preis |
|---|---|---|---|---|
| Starter-Bundle Allround-Einstieg | `starter-bundle-allround` | `product.bundle-starter` | 161,30 € | 145,17 € |
| Hecht-Köder-Set | `hecht-koeder-set` | `product.bundle-hecht` | 70,92 € | 63,83 € |
| Zander-Köder-Set | `zander-koeder-set` | `product.bundle-zander` | 45,92 € | 41,33 € |
| Barsch-Köder-Set | `barsch-koeder-set` | `product.bundle-barsch` | 42,03 € | 37,83 € |
| Forellen-Köder-Set | `forellen-koeder-set` | `product.bundle-forelle` | 45,43 € | 40,89 € |

So anlegen:

1. App **Shopify Bundles** (kostenlos, von Shopify) installieren.
2. Pro Bundle „Bundle erstellen“ → Bestandteile laut `bundles.json` mit der genannten Variante und Menge wählen. Der Lagerbestand wird dann bei den Einzelprodukten abgebucht.
3. Titel, Handle und Preis wie oben. **Keinen Vergleichspreis** (durchgestrichenen Preis) setzen: Das Bundle ist neu und hatte nie einen höheren Preis; die Ersparnis zeigt das Theme als „Du sparst … gegenüber Einzelkauf“.
4. Bild aus `inhalte/bilder/bundles/<handle>.jpg` hochladen, Produkttyp „Bundle“.
5. Unter „Theme-Vorlage“ die Vorlage aus der Tabelle wählen. Sie enthält die Stückliste „Das steckt drin“.
6. Kollektion **„Bundles“** (Handle `bundles`, manuell) anlegen und die fünf Bundles hinzufügen. Die Startseite zeigt sie unter „Starter & Zielfisch-Sets“.
7. Starter: Schnur liegt bei, wird **nicht** aufgespult (steht so in der Stückliste).

Stahl-/Titanvorfach: wird nicht ins Sortiment aufgenommen und auch nicht mehr empfohlen (Entscheidungen 27.09.2026).

## Köder-Box (selbst zusammenstellen, Staffelrabatt)

Rabatte in Shopify unter **Rabatte → Rabatt erstellen → Betrag auf Produkte** als **automatische Rabatte** anlegen:

| Name (sieht der Kunde) | Gilt für | Mindestanforderung | Rabatt |
|---|---|---|---|
| Köder-Box 5 % | Kollektion „Köder“ | Mindestmenge 3 Artikel | 5 % |
| Köder-Box 10 % | Kollektion „Köder“ | Mindestmenge 5 Artikel | 10 % |
| Köder-Box 15 % | Kollektion „Köder“ | Mindestmenge 8 Artikel | 15 % |

- Kombinationen: bei allen dreien **nicht** mit anderen Produkt-, Bestell- oder Versandrabatten kombinierbar. Shopify wendet dann automatisch den besten Rabatt an (auch gegenüber WILLKOMMEN10).
- Die Bundles liegen nicht in der Kollektion „Köder“ und bekommen daher keinen zusätzlichen Staffelrabatt.
- Theme: Einstellungen → „Köder-Box“ (Kollektion „Köder“, Stufen 3/5/8 und 5/10/15 %). Der Warenkorb zeigt „Noch 2 Köder bis 10 %“, die Köder-Kategorien zeigen den Hinweis. Wer die Stufen ändert, ändert sie an beiden Stellen.
