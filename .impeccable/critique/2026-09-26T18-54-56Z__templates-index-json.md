---
target: gesamte Vorschau (Kunden-Wege)
total_score: 25
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
target_identity: "file:/home/user/s-dlicht2/templates/index.json"
target_fingerprint: "sha256:93668e88364b3cbc4a7c478f1b0c1d3840cf162d760a0595e3c1459a50862271"
target_path: /home/user/s-dlicht2/templates/index.json
timestamp: 2026-09-26T18-54-56Z
slug: templates-index-json
---
DEGRADED: single-context (Sub-Agenten nur auf ausdrückliche Anfrage). Ziel: gesamte Vorschau (Start, Mega-Menü, Köder, Produkt; Desktop + Handy).

Scores: 1:3 2:2 3:3 4:2 5:2 6:2 7:3 8:3 9:3 10:2 = 25/40 (Brauchbar).

Priority issues:
- [P1] Menü/Kategorien falsch verlinkt oder leer (Twister->Wirbel, Metal Jig->alle Blechköder, Bundles leer), keine Unterkategorie-Leiste auf Kategorieseiten, Breadcrumb nach Zielfisch statt Kategorie. layout + clarify
- [P1] Sortierung: Bestseller = Anlagereihenfolge (8 Ruten auf Startseite), Köder ungeordnet. layout
- [P1] Packshots uneinheitlich skaliert (Köder 25-90 % der Fläche), 2px-Rahmen im Raster. polish
- [P1] Farbwahl als Slug-Text statt Bild, Sticky-Buy-Bar überdeckt Optionen auf Handy, doppelte Beschreibung. clarify + adapt
- [P2] Karten: Marke + Titel doppelt "Köderdepot", keine Köderart/Farbanzahl/Zielfisch. distill

Minor: Hero-Schnur fehlt bei Foto; Mega-Menü-Fotos generisch; Blog-Titel Versalien eng; Label-Abstand Größe|Gewicht; Preisfilter wirkt willkürlich.
Detector: 111 Treffer, 84 Fehlalarme (buried-raster = Einblend-Animation, cramped-padding = vollflächige Sektionen); echt: all-caps/tight-leading Blog-Titel, flat hierarchy Karten, skipped heading, Toast-Streifen.
