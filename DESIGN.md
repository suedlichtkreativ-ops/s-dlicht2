# Köderdepot – Designsystem

Logo: im Shopify-Editor unter *Theme-Einstellungen → Logo* hochladen (PNG mit Transparenz oder SVG). Ohne Logo zeigt das Theme eine schräge Wortmarke.

Richtung: **Tackle-Laden, kräftig** – abgeleitet aus dem Logo (Hecht-Wobbler mit Drillingen, Schriftzug auf schrägem gelbem Band).
CI-Farben: Schwarz, Köder-Gelb, Weiß. Sportlich, schräg, laut im Hero – ruhig und aufgeräumt im Sortiment.

## Farben (aus dem Logo)

| Token | Hex | Rolle |
|---|---|---|
| `--ink` | `#0D0D0D` | Logo-Schwarz: Text, Rahmen, Hero- und Footer-Fläche |
| `--signal` | `#FFCC00` | Logo-Gelb: Buttons (mit schwarzem Text, 14:1), schräge Bänder, Schnur-Linie |
| `--signal-shade` | `#E0A800` | Gelb-Schatten für Hover/gedrückt |
| `--paper` | `#F4F4F1` | Seitenhintergrund Sortiment |
| `--white` | `#FFFFFF` | Produktflächen, Drawer, Text auf Schwarz |
| `--stone` | `#D6D6D0` | Linien, Platzhalter (das Grau aus dem Schriftzug) |
| `--muted` | `#55554F` | Sekundärtext – 6:1 Kontrast |
| `--alert` | `#B3261E` | Fehler, Sale-Preis |

Regel: Gelb nie als Text auf hellem Grund (1,5:1). Gelb ist Fläche – Text darauf immer Schwarz. Auf Schwarz darf Gelb Text sein (13:1).

## Typografie

Eine Familie: **Archivo Variable** (wght 100–900, wdth 62–125), selbst gehostet (DSGVO – keine Google-Server).

- Display: wdth 62, wght 850, Versalien, schräg gestellt (skewX −9°) wie der Logo-Schriftzug, Zeilenabstand 0,86.
- Überschriften: wdth 75, wght 700.
- Fließtext: wdth 100, wght 400, 16–17 px, Zeilenabstand 1,55, max. 68 Zeichen.
- Preise: `font-variant-numeric: tabular-nums`, wdth 87, wght 650.
- Keine Versalien-Labels über Überschriften, keine Pfeile in Buttontexten.

## Layout

- Linksbündig, 12-Spalten-Raster, Außenabstand `clamp(1rem, 4vw, 3rem)`, max. 1440 px.
- Bilder und Karten ohne Rundung; Buttons und Eingabefelder mit 2 px Ink-Rahmen – wie Etiketten.
- Markenelement: das **schräge gelbe Band** aus dem Logo (−9°, ohne zusätzliche Drehung) – im Hero hinter den Buttons und als Ansage-Leiste. Sonst nirgends.
- Tiefe entsteht durch Rahmen und Flächen, nicht durch Schatten.
- **Buttons:** Werbe-Buttons in Abschnitten (`.btn--slant`) stehen im Logo-Winkel −9°, wie Band, Navigation und Überschriften. Kauf-, Kassen- und Formular-Buttons bleiben gerade, weil sie neben geraden Eingabefeldern stehen. Im gelben Band gilt: gleicher Winkel, gleicher Innenabstand rundum, gleich breite Buttons.

```
┌ Ansage: Versand · Abholung in Landsberg ───────────────┐
│ [LOGO]       Raubfisch Karpfen Friedfisch …   ⌕ ◯ ◫  │  ← Mega-Menü
├────────────────────────────────────────────────────────┤
│ KÖDER.                                   │              │
│ RUTEN.                                   │  Schnur +    │
│ RAT VOM LECH.                            │  Haken (SVG) │
│ [Sortiment ansehen] [Abholung im Laden]  │              │
├────────────────────────────────────────────────────────┤
│ RAUBFISCH │ KARPFEN │ FRIEDFISCH │ FORELLE & FLIEGE      │  Zielfisch-Kacheln
├────────────────────────────────────────────────────────┤
│ Neu im Depot   □ □ □ □                                  │  Produktraster
├────────────────────────────────────────────────────────┤
│ Im Laden in Landsberg: Adresse, Zeiten, Abholung        │
└────────────────────────────────────────────────────────┘
```

## Bewegung

Ein inszenierter Moment, der Rest reagiert nur auf Aktionen.

- **Hero beim Laden:** Die drei Zeilen steigen aus einer Maske (transform), die gelbe Angelschnur zeichnet sich ein (stroke-dashoffset), der Haken pendelt aus. Einmalig, ca. 1,4 s.
- **Bilder:** blenden weich ein, sobald sie geladen sind – kein Aufblitzen.
- **Reaktionen:** Mega-Menü, Warenkorb-Drawer, Mobilmenü, Filter gleiten/blenden (180–320 ms, `cubic-bezier(.2,.7,0,1)`), Schließen schneller als Öffnen.
- **Seitenwechsel:** View Transitions (Crossfade 200 ms) wo der Browser es kann.
- Nur `transform` und `opacity`. `prefers-reduced-motion`: alles sofort im Endzustand.

## Grundsätze

1. Die Beschriftung ist das Design – große, schmale Versalien tragen die Marke.
2. Gelb ist Signal, keine Dekoration: Buttons, das schräge Band, die Schnur.
3. Alles, was ein Händler ändert (Texte, Bilder, Menüs, Laden-Infos), ist im Shopify-Editor pflegbar.

## Referenzen und was daraus übernommen wurde

| Referenz | Übernommen | Bewusst nicht übernommen |
|---|---|---|
| **Sage** (sageflyfish.com) | Schräges schwarzes Logo-Feld links im Header; Navigation in schmalen, kursiven Versalien; großes Landschaftsfoto im Hero mit schmaler Headline | Bild-Slider mit Zähler (lädt langsam, wird selten durchgeklickt) |
| **Okains Bay** | Viel Ruhe um die Headline; dezenter vertikaler Scroll-Hinweis unten rechts | Zentrierte, weit gesperrte Serifenschrift – passt nicht zur sportlichen Logo-Schrift |
| **Ryby Tábor** | Freigestellte Produkte auf ruhiger Fläche (bei uns: helle schräge Fläche hinter jedem Produkt); Einstieg über Fischarten | Runde Kreise, verspielte Farben, Karussell |

## Bildrichtlinien für die Pflege

- **Produktbilder:** freigestellt (PNG mit transparentem Hintergrund) oder auf reinem Weiß, quadratisch, mind. 1200 × 1200 px. Das Produkt füllt ca. 80 % der Fläche.
- **Kategorie-Kacheln (Zielfisch):** freigestellter Fisch oder Köder als PNG, quer, mind. 1000 px breit. Er liegt vor dem gelben Band.
- **Hero:** stimmungsvolles Foto (Lech, Morgennebel, Ufer), mind. 2400 × 1400 px. Das Motiv sollte rechts liegen, links unten wird für die Schrift abgedunkelt.
- **Logo:** PNG mit Transparenz oder SVG, mind. 600 px breit.

## Übernommen von der bisherigen koederdepot.de

| Inhalt | Umsetzung im neuen Theme |
|---|---|
| Versprechen-Leiste (5 Punkte mit Haken) | Gelbe Ansage-Leiste, Haken-Symbol, auf dem Handy wischbar |
| Menü Köder · Angelrollen · Angelruten · Zubehör · Bundles · FAQ | Mega-Menü für „Köder“ (Zielfisch, Softbaits, Hardbaits, Blechköder), kompakte Listen für die übrigen |
| „Welchen Zielfisch willst du angeln?“ (Hecht, Zander, Barsch, Forelle) | Schwarze Kreise mit weißen Fisch-Linien; beim Überfahren wird der Kreis gelb und der Fisch schwimmt ein Stück nach vorn. Die Symbole tauchen auch im Mega-Menü auf |
| FAQs | Eigene Seite, Akkordeon, als FAQ für Google ausgezeichnet |
| News, Bundles & Empfehlungen | Blog-Abschnitt auf der Startseite plus Einstieg „Starter Bundle“ |
| Slogan „Von Anglern für Angler!“ | Leitsatz auf der Startseite und in der Ansage-Leiste |

Bewusst nicht übernommen: Beige/Taupe-Farben und die geometrische Schrift der alten Seite. Sie passen nicht zum schwarz-gelben Logo.
