(function () {
  "use strict";

  if (!window.VCD || !window.VCD.ARTICLES) {
    // Usually a stale cached copy of data.js; a reload fetches the fresh one.
    document.body.insertAdjacentHTML("afterbegin", '<p style="padding:90px 16px;text-align:center">Loading the latest edition… <a href="" style="color:#ff2e88">Tap to refresh</a></p>');
    return;
  }
  const { CATEGORIES, ARTICLES, FACTS, TIMELINE, INSTAGRAM, LAUNCH, PRELOAD } = window.VCD;
  const VIDEOS = window.VCD.VIDEOS || [];
  const REELS = window.VCD.REELS || [];
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

  const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || id;
  const articleUrl = (a) => `article.html?id=${encodeURIComponent(a.id)}`;
  const parseDay = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const fmtDate = (s, opts) => parseDay(s).toLocaleDateString("en-US", opts || { month: "short", day: "numeric", year: "numeric" });
  const byNewest = (a, b) => parseDay(b.date) - parseDay(a.date);

  // The game unlocks at midnight in each time zone, so count down to local midnight.
  const launchAt = new Date(LAUNCH.year, LAUNCH.month, LAUNCH.day);
  const preloadAt = new Date(PRELOAD.year, PRELOAD.month, PRELOAD.day);
  const trailerOne = new Date(2023, 11, 5);

  const IG_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;

  const ytThumb = (id) => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg`;
  const usesStill = (a) => a.video && !a.photoInsteadOfVideoStill;
  const cardImg = (a) => (usesStill(a) ? ytThumb(a.video) : `assets/img/${a.image}`);
  const PLAY = `<svg viewBox="0 0 68 48" aria-hidden="true"><path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 12.9.1 24 .1 24s0 11.1 1.4 16.3a8.5 8.5 0 0 0 6 6c5.2 1.4 26.5 1.4 26.5 1.4s21.3 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35.1 67.9 24 67.9 24s0-11.1-1.4-16.3z" fill="#ff2e88"/><path d="M45 24 27 14v20z" fill="#fff"/></svg>`;

  // Click-to-play YouTube player: shows the thumbnail until tapped, so pages stay fast.
  // Big players carry the title over the image; small ones put it underneath.
  function videoHtml(id, title, size, label) {
    const big = size === "big";
    return `
      <div class="vid">
        <button class="yt ${big ? "big" : ""}" type="button" data-yt="${esc(id)}" aria-label="Play ${esc(title)}">
          <img src="${ytThumb(id)}" alt="" loading="lazy" decoding="async">
          <span class="yt-play">${PLAY}</span>
          ${big ? `<span class="yt-title"><b>${esc(label || title)}</b><small>Rockstar Games · YouTube</small></span>` : ""}
        </button>
        ${big ? "" : `<span class="vid-cap">${esc(title)}<small>Rockstar Games · YouTube</small></span>`}
      </div>`;
  }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button.yt");
    if (!btn) return;
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(btn.dataset.yt)}?autoplay=1&rel=0&playsinline=1`;
    frame.title = btn.getAttribute("aria-label").replace(/^Play /, "");
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.className = btn.className.replace("yt", "yt-frame");
    btn.replaceWith(frame);
  });

  function safely(fn) {
    try { fn(); } catch (err) { console.error(err); }
  }

  function remaining(now) {
    const ms = Math.max(0, launchAt - now);
    return {
      ms,
      d: Math.floor(ms / 86400000),
      h: Math.floor(ms / 3600000) % 24,
      m: Math.floor(ms / 60000) % 60,
      s: Math.floor(ms / 1000) % 60
    };
  }

  // ---------- Shared chrome ----------
  function renderChrome() {
    $("#chrome-top").innerHTML = `
      <header class="site-header" id="site-header">
        <div class="wrap">
          <a class="brand" href="./" aria-label="Vice City Daily home"><span class="vi">VI</span>CE CITY <span>DAILY</span></a>
          <nav class="site-nav" aria-label="Main">
            <a class="link" href="./#news">News</a>
            <a class="link" href="./#watch">Trailers</a>
            <a class="link" href="./#timeline">Timeline</a>
            <span class="mini-count" id="mini-count" aria-label="Time until GTA VI launch"></span>
            <a class="reels-pill" href="reels.html">▶ Reels</a>
            <a class="ig-btn" href="${INSTAGRAM.url}" target="_blank" rel="noopener">${IG_ICON}<span class="ig-label">@${esc(INSTAGRAM.handle)}</span></a>
          </nav>
        </div>
      </header>`;

    $("#chrome-bottom").innerHTML = `
      <footer>
        <div class="wrap">
          <div>
            <a class="brand" href="./"><span class="vi">VI</span>CE CITY <span>DAILY</span></a>
            <p style="margin-top:10px">Real GTA VI news, every day. Follow <a href="${INSTAGRAM.url}" target="_blank" rel="noopener">@${esc(INSTAGRAM.handle)}</a> on Instagram.</p>
          </div>
          <div>
            <p>Vice City Daily is an unofficial fan site. It is not affiliated with or endorsed by Rockstar Games or Take-Two Interactive. Grand Theft Auto and GTA are trademarks of Take-Two Interactive.</p>
            <p>Every story links to its original sources. Photos are real-world Miami and Florida locations from Wikimedia Commons, credited on each story. Last updated ${esc(fmtDate(window.VCD.UPDATED, { month: "long", day: "numeric", year: "numeric" }))}.</p>
          </div>
        </div>
      </footer>`;

    const header = $("#site-header");
    const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const mini = $("#mini-count");
    const tickMini = () => {
      const r = remaining(new Date());
      mini.textContent = r.ms ? `GTA VI in ${r.d}d ${r.h}h ${r.m}m` : "GTA VI is out now";
    };
    tickMini();
    setInterval(tickMini, 30000);
  }

  function cardHtml(a) {
    return `
      <a class="card reveal" href="${articleUrl(a)}">
        <div class="img">
          <img src="${esc(cardImg(a))}" alt="" loading="lazy" decoding="async">
          <span class="badge ${esc(a.category)}">${esc(catName(a.category))}</span>
          ${a.video ? `<span class="card-play">${PLAY}</span>` : ""}
        </div>
        <div class="txt">
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.dek)}</p>
          <div class="meta"><time datetime="${a.date}">${esc(fmtDate(a.date))}</time><span>· ${a.sources.length} source${a.sources.length > 1 ? "s" : ""}</span></div>
        </div>
      </a>`;
  }

  function instaHtml() {
    return `
      <div class="insta reveal">
        <h3>Follow the countdown</h3>
        <span class="handle">@${esc(INSTAGRAM.handle)}</span>
        <p>Daily GTA VI news, launch updates and Vice City vibes, straight to your feed.</p>
        <div class="hero-ctas" style="justify-content:flex-start;margin-top:0">
          <a class="btn" href="${INSTAGRAM.url}" target="_blank" rel="noopener">${IG_ICON} Follow on Instagram</a>
          <a class="btn btn-ghost" href="reels.html">Watch the reels</a>
        </div>
      </div>`;
  }

  function observeReveals() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  }

  const fmtViews = (n) => (n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "K" : String(n));
  function reelHtml(r, eager) {
    return `
      <article class="reel reveal">
        <div class="reel-frame">
          <iframe src="https://www.instagram.com/reel/${encodeURIComponent(r.code)}/embed/" title="Instagram reel" loading="${eager ? "eager" : "lazy"}" allow="encrypted-media; clipboard-write" allowfullscreen scrolling="no"></iframe>
        </div>
        <div class="reel-row">
          ${r.views ? `<span class="reel-views">▶ ${fmtViews(r.views)} views</span>` : "<span></span>"}
          <a class="reel-link" href="https://www.instagram.com/reel/${encodeURIComponent(r.code)}/" target="_blank" rel="noopener">${IG_ICON} Open on Instagram</a>
        </div>
      </article>`;
  }
  // ---------- Home ----------
  function renderCountdown() {
    const nums = { d: $("#cd-d"), h: $("#cd-h"), m: $("#cd-m"), s: $("#cd-s") };
    const note = $("#launch-note");
    const fill = $("#hype-fill");
    const pct = $("#hype-pct");
    let last = {};
    let timer = null;

    function update() {
      const now = new Date();
      const r = remaining(now);
      if (!r.ms) {
        $("#countdown").outerHTML = `<p class="out-now grad-text">Out now</p>`;
        note.innerHTML = `Grand Theft Auto VI is available on PS5 and Xbox Series X|S.`;
        fill.style.width = "100%"; pct.textContent = "100%";
        clearInterval(timer);
        return;
      }
      ["d", "h", "m", "s"].forEach((k) => {
        const v = k === "d" ? String(r[k]) : String(r[k]).padStart(2, "0");
        if (last[k] !== v) {
          nums[k].textContent = v;
          nums[k].classList.remove("tick"); void nums[k].offsetWidth; nums[k].classList.add("tick");
        }
      });
      last = { d: String(r.d), h: String(r.h).padStart(2, "0"), m: String(r.m).padStart(2, "0"), s: String(r.s).padStart(2, "0") };

      const preloadDays = Math.ceil((preloadAt - now) / 86400000);
      const preloadText = preloadAt > now
        ? `Digital preloads open in ${preloadDays} day${preloadDays === 1 ? "" : "s"} (Nov 12).`
        : "Preloads are open now on PS5 and Xbox Series X|S.";
      note.innerHTML = `Thursday, November 19, 2026 · Unlocks at midnight your local time<small>${preloadText}</small>`;

      const p = Math.min(100, ((now - trailerOne) / (launchAt - trailerOne)) * 100);
      fill.style.width = p.toFixed(2) + "%";
      pct.textContent = p.toFixed(1) + "% of the wait done";
    }
    timer = setInterval(update, 1000);
    update();
  }

  function renderHome() {
    renderChrome();
    safely(renderCountdown);

    if (VIDEOS.length) {
      $("#watch-main").innerHTML = videoHtml(VIDEOS[0].id, VIDEOS[0].title, "big");
      $("#watch-list").innerHTML = VIDEOS.slice(1).map((v) => videoHtml(v.id, v.title)).join("") +
        `<a class="watch-more" href="https://www.youtube.com/@RockstarGames" target="_blank" rel="noopener">More on Rockstar's YouTube ↗</a>`;
    }

    $("#facts").innerHTML = FACTS.map(([k, v]) => `<div class="fact"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");

    const now = new Date();
    let nextMarked = false;
    $("#timeline-list").innerHTML = TIMELINE.map(([d, label]) => {
      const done = parseDay(d) <= now;
      let cls = done ? "done" : "";
      if (!done && !nextMarked) { cls = "next"; nextMarked = true; }
      return `<li class="${cls}"><time datetime="${d}">${esc(fmtDate(d, { month: "long", day: "numeric", year: "numeric" }))}${cls === "next" ? " · Up next" : ""}</time><span>${esc(label)}</span></li>`;
    }).join("");
    $("#insta-slot").innerHTML = instaHtml();

    // Home page reels teaser: the three most watched, as tappable cards.
    const reels = REELS.map((r) => (Array.isArray(r) ? { code: r[0], views: r[1] || 0 } : { code: r, views: 0 }));
    if (reels.length) {
      const top = reels.slice().sort((x, y) => y.views - x.views).slice(0, 3);
      const totalViews = reels.reduce((n, r) => n + r.views, 0);
      $("#reels-teaser").innerHTML = `
        <div class="sec-head">
          <div><h2>Vice City <span class="grad-text">Reels</span></h2><p>${reels.length} reels · ${fmtViews(totalViews)} views on Instagram. Watch them all in one place.</p></div>
          <a class="btn btn-primary" href="reels.html">All ${reels.length} reels →</a>
        </div>
        <div class="reels-grid">${top.map((r) => reelHtml(r, false)).join("")}</div>`;
    }

    const chips = $("#chips");
    chips.innerHTML = [`<button class="chip" type="button" data-cat="" aria-pressed="true">All</button>`]
      .concat(CATEGORIES.filter((c) => ARTICLES.some((a) => a.category === c.id))
        .map((c) => `<button class="chip" type="button" data-cat="${c.id}" aria-pressed="false">${esc(c.name)}</button>`))
      .join("");

    const sorted = ARTICLES.slice().sort(byNewest);
    function draw(cat) {
      const list = sorted.filter((a) => !cat || a.category === cat);
      const feat = (!cat && list.find((a) => a.featured)) || list[0];
      const rest = list.filter((a) => a !== feat);
      $("#feed").innerHTML = !feat ? `<div class="empty">No stories here yet.</div>` : `
        <a class="featured reveal" href="${articleUrl(feat)}">
          <div class="img"><img src="${esc(cardImg(feat))}" alt="" fetchpriority="high">${feat.video ? `<span class="card-play">${PLAY}</span>` : ""}</div>
          <div class="txt">
            <div><span class="badge ${esc(feat.category)}">${esc(catName(feat.category))}</span></div>
            <h3>${esc(feat.title)}</h3>
            <p>${esc(feat.dek)}</p>
            <div class="meta"><time datetime="${feat.date}">${esc(fmtDate(feat.date))}</time></div>
            <span class="read-more">Read the story →</span>
          </div>
        </a>
        <div class="cards">${rest.map(cardHtml).join("")}</div>`;
      observeReveals();
    }

    chips.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
      draw(btn.dataset.cat);
    });
    draw("");
  }

  // ---------- Article ----------
  function renderArticle() {
    renderChrome();
    const id = new URLSearchParams(location.search).get("id");
    const a = ARTICLES.find((x) => x.id === id);
    const root = $("#article");

    if (!a) {
      document.title = "Story not found | Vice City Daily";
      root.innerHTML = `
        <div class="a-body" style="padding-top:140px">
          <h1>This story drifted out to sea.</h1>
          <p>We couldn't find that article.</p>
          <a class="btn btn-primary" href="./">Back to the latest news</a>
        </div>`;
      return;
    }

    document.title = `${a.title} | Vice City Daily`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", a.dek);

    const more = ARTICLES.filter((x) => x !== a).sort(byNewest).slice(0, 3);
    root.innerHTML = `
      <div class="a-hero">
        <img src="${esc(cardImg(a))}" alt="" fetchpriority="high">
        <div class="wrap">
          <a class="back" href="./#news">← All GTA VI news</a>
          <div style="margin-top:16px"><span class="badge ${esc(a.category)}">${esc(catName(a.category))}</span></div>
          <h1>${esc(a.title)}</h1>
          <p class="dek">${esc(a.dek)}</p>
          <div class="meta"><time datetime="${a.date}">${esc(fmtDate(a.date, { weekday: "long", month: "long", day: "numeric", year: "numeric" }))}</time></div>
        </div>
      </div>
      <article class="a-body">
        ${a.video ? `<div class="a-video">${videoHtml(a.video, a.title, "big", "Watch the video")}</div>` : ""}
        ${a.body.map((p) => `<p>${esc(p)}</p>`).join("")}
        <p class="photo-credit">${a.video ? `Video: <a href="https://www.youtube.com/watch?v=${esc(a.video)}" target="_blank" rel="noopener">Rockstar Games on YouTube</a>. ` : ""}${usesStill(a)
          ? ""
          : `Photo: <a href="${esc(a.credit.page)}" target="_blank" rel="noopener">${esc(a.credit.artist)}</a>, ${esc(a.credit.license)}, via Wikimedia Commons. Real-world Miami/Florida photo, not from the game.`}</p>
        <div class="sources">
          <h2>Sources</h2>
          <ul>${a.sources.map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a></li>`).join("")}</ul>
        </div>
        <div class="a-actions">
          <button class="btn btn-ghost" type="button" id="share">Share story</button>
          <a class="btn btn-primary" href="./">See the countdown</a>
        </div>
      </article>
      <section class="block wrap">
        <div class="sec-head"><h2>More <span class="grad-text">News</span></h2></div>
        <div class="cards">${more.map(cardHtml).join("")}</div>
      </section>
      <section class="block wrap">${instaHtml()}</section>`;

    $("#share").addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      try {
        if (navigator.share) await navigator.share({ title: a.title, url: location.href });
        else { await navigator.clipboard.writeText(location.href); btn.textContent = "Link copied!"; }
      } catch (err) { /* user cancelled or clipboard blocked */ }
      setTimeout(() => { btn.textContent = "Share story"; }, 1800);
    });
    observeReveals();
  }

  // ---------- Reels ----------
  // Instagram's embedded player tells the parent page its real height; size each frame to match.
  window.addEventListener("message", (e) => {
    if (e.origin !== "https://www.instagram.com") return;
    let d; try { d = typeof e.data === "string" ? JSON.parse(e.data) : e.data; } catch (err) { return; }
    if (!d || d.type !== "MEASURE" || !d.details || !d.details.height) return;
    document.querySelectorAll(".reel-frame iframe").forEach((f) => {
      if (f.contentWindow === e.source) { f.parentElement.style.height = d.details.height + "px"; f.parentElement.classList.add("measured"); }
    });
  });

  function renderReels() {
    renderChrome();
    document.title = "Reels | Vice City Daily";
    const root = $("#reels");
    const all = REELS.map((r, i) => (Array.isArray(r) ? { code: r[0], views: r[1] || 0, order: i } : { code: r, views: 0, order: i }));
    if (!all.length) {
      root.innerHTML = `<div class="empty">Reels are on their way. In the meantime, watch them on <a href="${INSTAGRAM.url}reels/" target="_blank" rel="noopener" style="color:var(--pink)">Instagram</a>.</div>`;
      $("#insta-slot").innerHTML = instaHtml();
      return;
    }
    const total = all.reduce((n, r) => n + r.views, 0);
    $("#reel-stats").innerHTML = `<b>${all.length}</b> reels · <b>${fmtViews(total)}</b> views and counting`;

    // Top performers first, as a hook.
    const top = all.slice().sort((x, y) => y.views - x.views).slice(0, 3);
    $("#reels-top").innerHTML = top.map((r) => reelHtml(r, true)).join("");

    const PAGE = 9;
    let sort = "views", shown = PAGE;
    const sorted = () => (sort === "views" ? all.slice().sort((x, y) => y.views - x.views) : all);
    function draw() {
      const list = sorted().slice(0, shown);
      root.innerHTML = list.map((r) => reelHtml(r, false)).join("");
      const more = $("#reels-more");
      more.hidden = shown >= all.length;
      more.textContent = `Load more (${Math.min(PAGE, all.length - shown)} of ${all.length - shown} left)`;
      observeReveals();
    }
    $("#reels-more").addEventListener("click", () => { shown += PAGE; draw(); });
    $("#reel-sort").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip"); if (!btn) return;
      sort = btn.dataset.sort; shown = PAGE;
      document.querySelectorAll("#reel-sort .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
      draw();
      $("#all-reels").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    draw();
    $("#insta-slot").innerHTML = instaHtml();
    observeReveals();
  }

  if (document.body.dataset.page === "reels") renderReels();
  else if (document.body.dataset.page === "article") renderArticle();
  else renderHome();
  // Never leave content hidden if the scroll animation can't run.
  setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
  }), 1200);
})();
