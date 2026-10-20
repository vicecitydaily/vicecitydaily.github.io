(function () {
  "use strict";

  const { CATEGORIES, ARTICLES, FACTS, TIMELINE, INSTAGRAM, LAUNCH, PRELOAD } = window.VCD;
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
          <a class="brand" href="./" aria-label="Vice City Daily home">VICE CITY <span>DAILY</span></a>
          <nav class="site-nav" aria-label="Main">
            <a class="link" href="./#news">News</a>
            <a class="link" href="./#timeline">Timeline</a>
            <span class="mini-count" id="mini-count" aria-label="Time until GTA VI launch"></span>
            <a class="ig-btn" href="${INSTAGRAM.url}" target="_blank" rel="noopener">${IG_ICON}<span class="ig-label">@${esc(INSTAGRAM.handle)}</span></a>
          </nav>
        </div>
      </header>`;

    $("#chrome-bottom").innerHTML = `
      <footer>
        <div class="wrap">
          <div>
            <a class="brand" href="./">VICE CITY <span>DAILY</span></a>
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
          <img src="assets/img/${esc(a.image)}" alt="" loading="lazy" decoding="async">
          <span class="badge ${esc(a.category)}">${esc(catName(a.category))}</span>
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
        <a class="btn" href="${INSTAGRAM.url}" target="_blank" rel="noopener">${IG_ICON} Follow on Instagram</a>
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
    renderCountdown();

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
          <div class="img"><img src="assets/img/${esc(feat.image)}" alt="" fetchpriority="high"></div>
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
        <img src="assets/img/${esc(a.image)}" alt="" fetchpriority="high">
        <div class="wrap">
          <a class="back" href="./#news">← All GTA VI news</a>
          <div style="margin-top:16px"><span class="badge ${esc(a.category)}">${esc(catName(a.category))}</span></div>
          <h1>${esc(a.title)}</h1>
          <p class="dek">${esc(a.dek)}</p>
          <div class="meta"><time datetime="${a.date}">${esc(fmtDate(a.date, { weekday: "long", month: "long", day: "numeric", year: "numeric" }))}</time></div>
        </div>
      </div>
      <article class="a-body">
        ${a.body.map((p) => `<p>${esc(p)}</p>`).join("")}
        <p class="photo-credit">Photo: <a href="${esc(a.credit.page)}" target="_blank" rel="noopener">${esc(a.credit.artist)}</a>, ${esc(a.credit.license)}, via Wikimedia Commons. Real-world Miami/Florida photo, not from the game.</p>
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

  if (document.body.dataset.page === "article") renderArticle();
  else renderHome();
})();
