# Portfolio — Luca Eletto

Portfolio statico responsive in italiano, creato con **HTML5, CSS3 e JavaScript vanilla**. Pronto per **GitHub Pages**, senza build, framework o dipendenze esterne.

## Contenuti

- Street Art / East Side Gallery (2023) — progetto scolastico
- Falcone e Borsellino (2022) — progetto scolastico
- La Rinascente — rebranding concept (2023) — progetto scolastico non ufficiale
- IIS Enzo Ferrari — identità visiva e merchandising (2022) — progetto scolastico
- JA Italia — infografiche per Bilancio Sociale 2021/2022 — collaborazione

Il testo e le immagini derivano dai PDF forniti. Le tavole `ja-1` e `ja-2` risultano visivamente duplicate nel materiale di origine: vengono comunque conservate entrambe.

## Pubblicazione su GitHub Pages

1. Crea una repository **pubblica** denominata `TUO-USERNAME.github.io` per ottenere il sito alla radice del dominio, oppure crea `portfolio` per pubblicarlo su `https://TUO-USERNAME.github.io/portfolio/`.
2. Carica **tutto il contenuto di questa cartella** nella root della repository (compresi `index.html`, `css/`, `js/`, `assets/`).
3. In GitHub apri **Settings → Pages → Build and deployment**.
4. Seleziona **Deploy from a branch**, scegli `main`, cartella `/ (root)`, poi salva.
5. Attendi che GitHub mostri il link pubblico: potrebbe richiedere qualche minuto dopo il commit.

### Test locale

Apri `index.html` nel browser oppure esegui nella cartella:

```sh
python -m http.server 8000
```

Poi visita `http://localhost:8000/`.

## Personalizzazione

- Testi e struttura: `index.html`
- Colori, spaziature, responsive: `css/style.css` (variabili CSS in alto)
- Filtri, menu, lightbox, animazioni: `js/main.js`
- Immagini ottimizzate: `assets/images/*.webp`
- Tavole PDF: `assets/documents/`
- Email contatto: cambia `eletto.luca@gmail.com` nell'HTML se necessario

### Note di utilizzo

Le immagini sono derivate dalle opere presenti nei documenti consegnati. Prima di pubblicare una repository **pubblica**, verifica di avere il diritto di mostrare materiali relativi a terze parti e progetti professionali, in particolare JA Italia, e che non ci siano informazioni riservate. Il concept La Rinascente è esplicitamente indicato come esercizio non ufficiale. Non sono stati inventati progetti web non documentati nei file allegati.

Il sito è completamente statico: non raccoglie dati e non impiega cookie, analytics, CDN o servizi esterni. I filtri e le gallerie funzionano direttamente nel browser.
