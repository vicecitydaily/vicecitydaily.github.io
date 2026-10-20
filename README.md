# Vice City Daily

A static, fictional neon-80s newspaper site, hosted on GitHub Pages.

- `index.html` — front page: lead story, section filters, search, classifieds, newsletter signup (demo only)
- `article.html?id=<story-id>` — individual stories
- `assets/js/data.js` — all stories, ticker, horoscopes, quotes, classifieds and forecast. Add a story by appending to `ARTICLES`.
- `assets/js/app.js` — rendering; daily features (most read, quote, horoscopes) rotate by date
- `assets/css/style.css` — styles, with day/night editions (follows system theme, toggle in the top bar)

Run locally: `python3 -m http.server` and open http://localhost:8000.
Deploys via `.github/workflows/pages.yml` on pushes to `main`.
