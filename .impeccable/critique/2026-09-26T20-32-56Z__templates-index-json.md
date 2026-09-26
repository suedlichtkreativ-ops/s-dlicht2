---
target: gesamte Vorschau (3. Durchlauf, Fokus Qualitätskontrolle)
total_score: 32
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 1
target_identity: "file:/home/user/s-dlicht2/templates/index.json"
target_fingerprint: "sha256:b28937e2888ef4a5d12da109d2ccb3c11030bac2a07f5f45c3c72b62e1009a02"
target_path: /home/user/s-dlicht2/templates/index.json
timestamp: 2026-09-26T20-32-56Z
slug: templates-index-json
---
DEGRADED: single-context. 3. Durchlauf, alle 278 Seitenaufrufe per QC-Skript (Desktop + Handy, 2x-Pixeldichte), Stichproben Start, Hechtköder, Fernläufer.

Scores: 1:3 2:4 3:3 4:4 5:3 6:4 7:3 8:3 9:3 10:2 = 32/40 (Gut). Verlauf 25 → 29 → 32.

QC: 0 JS-Fehler, 0 kaputte Bilder, 0 horizontales Scrollen, 0 tote Links. Unscharf nur noch die Hero-Fotos (Originale max. 2400 px, Kurzläufer 1254 px).
Detector: 1 Warnung (Layout-Transition Galerie-Punkte) behoben; buried-raster = Hover-Zweitbild (gewollt); clipped-overflow = overflow-x am Header (gewollt, Logo-Schräge); flat-type = Fußzeilen-Labels, Überschriften 68/104 px.

Behoben seit 29:
- Produktbild verpixelt: Vorschau nahm 192-px-Farbmuster als Hauptbild. Jetzt 1400-px-Studiobilder, Farbmuster 360x240.
- Doppelrahmen in der Galerie (Innenabstand um Studiobild) entfernt.
- Fisch-Symbole als SVG (gestochen scharf in jeder Größe).
- Galerie-Punkte 44 px Tippfläche.
- Hero-Slider mit echtem Köder an der Schnur, deutsche Produkttypen, Scroll-Hinweis, Schriftstufe Beschreibung.

Priority issues:
- [P1] Rabattcode WILLKOMMEN10 wird im Hero beworben, existiert im Shop aber nicht. Vor Livegang anlegen oder Slide entfernen. clarify
- [P2] Hero-Fotos auf Retina/4K weich (Originale 1254–2400 px, gebraucht ≥2880 px); Handy-Motiv fehlt auf dem CDN. Neue Exporte nötig. polish
- [P3] Kugelblitz als "Metal Jig" typisiert, ist ein Jigkopf. Datenkorrektur im Abgleich. clarify
- [P3] Kompaktblitz (2 Bilder) und Silberstreif (1 Bild) nur 500–600 px im Original. polish
