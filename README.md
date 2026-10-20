# Vice City Daily

Unofficial GTA VI fan site with a live launch countdown and real, sourced news.
Live at https://vicecitydaily.github.io/ · Instagram: [@vicecity.daily6](https://www.instagram.com/vicecity.daily6/)

- `index.html` — countdown hero (to midnight local time, Nov 19, 2026), key facts, news feed with category filters, launch timeline, Instagram promo
- `article.html?id=<story-id>` — story pages with photo credit and source links
- `assets/js/scene.js` — the animated canvas skyline/sun/grid behind the countdown
- `assets/js/data.js` — all content: stories, facts, timeline, launch dates
- `VCD.VIDEOS` in `data.js` — official Rockstar YouTube videos for the Trailers section (add a story's `video` field to embed one in it)
- `assets/img/` — story photos (real-world Miami/Florida, Wikimedia Commons, credited per story)

## Adding a news story

1. Add a landscape photo to `assets/img/` (about 1400px wide, JPEG). Use only images you're allowed to use, and note the credit.
2. Add an object at the top of `ARTICLES` in `assets/js/data.js` with `id`, `category`, `date`, `title`, `dek`, `image`, `credit`, `body` and `sources`. Only real reporting, with links.
3. Update `VCD.UPDATED`, and bump the `?v=` number on the CSS/JS links in `index.html` and `article.html` so visitors don't get a stale cached copy. Push to `main` and GitHub Pages republishes in about a minute.

Run locally: `python3 -m http.server` and open http://localhost:8000.
