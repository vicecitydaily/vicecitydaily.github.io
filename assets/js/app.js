(function () {
  "use strict";

  const { SECTIONS, ARTICLES, TICKER, HOROSCOPES, QUOTES, CLASSIFIEDS, WEATHER } = window.VCD;
  const $ = (sel, root = document) => root.querySelector(sel);

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
  const sectionName = (id) => (SECTIONS.find((s) => s.id === id) || {}).name || id;
  const articleUrl = (a) => `article.html?id=${encodeURIComponent(a.id)}`;

  // A number that changes once per day, used to rotate daily features.
  const today = new Date();
  const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  function seededShuffle(list, seed) {
    const out = list.slice();
    let s = seed;
    for (let i = out.length - 1; i > 0; i--) {
      s = (s * 9301 + 49297) % 233280;
      const j = Math.floor((s / 233280) * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  // ---------- Theme ----------
  const THEME_KEY = "vcd-theme";
  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  function currentTheme() {
    const t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(storedTheme());

  // ---------- Shared chrome ----------
  function renderChrome(activeSection) {
    const dateStr = today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const issueNo = Math.floor((today - new Date(1986, 0, 1)) / 86400000);
    const w = WEATHER[0];

    $("#chrome-top").innerHTML = `
      <div class="topbar">
        <div class="wrap">
          <span>${esc(dateStr)}</span>
          <span class="weather-mini">${w.icon} ${w.hi}°F · ${esc(w.note)}</span>
          <button class="theme-toggle" type="button" id="theme-toggle"></button>
        </div>
      </div>
      <header class="masthead">
        <div class="wrap">
          <div class="kicker">
            <span>Vol. XL · No. ${issueNo.toLocaleString("en-US")}</span>
            <span>Est. 1986</span>
            <span>Free on the boardwalk</span>
          </div>
          <a href="./" class="logo" aria-label="Vice City Daily home">
            <span class="neon">Vice City</span>
            <span class="daily">Daily</span>
          </a>
          <p class="tagline">All the neon that's fit to print.</p>
        </div>
      </header>
      <nav class="nav" aria-label="Sections">
        <div class="wrap">
          <ul>
            <li><a href="./" data-sec="">Front Page</a></li>
            ${SECTIONS.map((s) => `<li><a href="./?s=${s.id}" data-sec="${s.id}">${esc(s.name)}</a></li>`).join("")}
          </ul>
          <form class="search" role="search" action="./">
            <label class="visually-hidden" for="q">Search stories</label>
            <input id="q" name="q" type="search" placeholder="Search" autocomplete="off">
          </form>
        </div>
      </nav>
      <div class="ticker" aria-label="Breaking news">
        <div class="wrap">
          <strong>Breaking</strong>
          <div class="ticker-track"><div class="ticker-inner">
            ${TICKER.concat(TICKER).map((t) => `<span>${esc(t)}</span>`).join("")}
          </div></div>
        </div>
      </div>`;

    $("#chrome-bottom").innerHTML = `
      <footer>
        <div class="wrap">
          <span class="logo-small">Vice City Daily</span>
          <p>A work of fiction. Any resemblance to real flamingos is coincidental.</p>
          <p>© ${today.getFullYear()} Vice City Daily</p>
        </div>
      </footer>`;

    setActiveNav(activeSection);

    const btn = $("#theme-toggle");
    const label = () => { btn.textContent = currentTheme() === "dark" ? "☀ Day edition" : "☾ Night edition"; };
    label();
    btn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* storage unavailable */ }
      label();
    });
  }

  function setActiveNav(section) {
    document.querySelectorAll(".nav a[data-sec]").forEach((a) => {
      if (a.dataset.sec === (section || "")) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  // ---------- Pieces ----------
  function art(a, small) {
    return `<div class="art${small ? " small" : ""}" style="--from:${a.art.from};--to:${a.art.to}" aria-hidden="true"><span class="icon">${a.art.icon}</span></div>`;
  }
  function storyCard(a) {
    return `
      <article class="story">
        <a href="${articleUrl(a)}">
          ${art(a, true)}
          <span class="tag">${esc(sectionName(a.section))}</span>
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.dek)}</p>
        </a>
        <span class="byline">By ${esc(a.author)} · ${a.minutes} min read</span>
      </article>`;
  }

  function sidebar() {
    const mostRead = seededShuffle(ARTICLES, daySeed).slice(0, 5);
    const [quote, quoteBy] = QUOTES[daySeed % QUOTES.length];
    const month = today.getMonth();
    // Rough sunrise/sunset for a subtropical city through the year.
    const sunrise = ["7:07", "6:55", "7:30", "7:05", "6:35", "6:30", "6:40", "6:55", "7:10", "7:20", "6:40", "6:58"][month];
    const sunset = ["5:55", "6:20", "7:35", "7:50", "8:05", "8:15", "8:15", "7:55", "7:25", "6:55", "5:35", "5:35"][month];

    return `
      <div class="box">
        <h4>Most Read Today</h4>
        <ol class="most-read">
          ${mostRead.map((a) => `<li><a href="${articleUrl(a)}">${esc(a.title)}</a></li>`).join("")}
        </ol>
      </div>
      <div class="box">
        <h4>Five-Day Forecast</h4>
        <div class="forecast">
          ${WEATHER.map((d) => `<div><span class="ico" aria-hidden="true">${d.icon}</span><b>${esc(d.day)}</b>${d.hi}° / ${d.lo}°</div>`).join("")}
        </div>
        <div class="sun-times"><span>🌅 Sunrise ${sunrise} am</span><span>🌇 Sunset ${sunset} pm</span></div>
      </div>
      <div class="box">
        <h4>Quote of the Day</h4>
        <blockquote class="quote">“${esc(quote)}”</blockquote>
        <cite>— ${esc(quoteBy)}</cite>
      </div>
      <div class="box horoscope">
        <h4>Daily Horoscope</h4>
        <label class="visually-hidden" for="sign">Your sign</label>
        <select id="sign">
          ${HOROSCOPES.map(([s], i) => `<option value="${i}">${esc(s)}</option>`).join("")}
        </select>
        <p id="reading"></p>
      </div>`;
  }

  function wireHoroscope() {
    const sel = $("#sign");
    if (!sel) return;
    const KEY = "vcd-sign";
    // Rotate readings daily so each sign gets a new one every day.
    const readings = seededShuffle(HOROSCOPES.map((h) => h[1]), daySeed);
    const show = () => { $("#reading").textContent = readings[Number(sel.value)]; };
    try { const saved = localStorage.getItem(KEY); if (saved !== null) sel.value = saved; } catch (e) { /* ignore */ }
    show();
    sel.addEventListener("change", () => {
      show();
      try { localStorage.setItem(KEY, sel.value); } catch (e) { /* ignore */ }
    });
  }

  // ---------- Front page ----------
  function renderHome() {
    const params = new URLSearchParams(location.search);
    let section = params.get("s") || "";
    let query = params.get("q") || "";

    renderChrome(section);
    $("#sidebar").innerHTML = sidebar();
    wireHoroscope();

    $("#classifieds").innerHTML = `
      <h2 class="section-title">Classifieds</h2>
      <div class="cols">${CLASSIFIEDS.map(([k, v]) => `<p class="ad"><b>${esc(k)}</b>${esc(v)}</p>`).join("")}</div>`;

    const input = $("#q");
    input.value = query;

    function draw() {
      const q = query.trim().toLowerCase();
      let list = ARTICLES.filter((a) => !section || a.section === section);
      if (q) {
        list = list.filter((a) => [a.title, a.dek, a.author, a.body.join(" ")].join(" ").toLowerCase().includes(q));
      }
      const feed = $("#feed");

      if (!list.length) {
        feed.innerHTML = `<div class="empty">No stories match “${esc(query)}”. Try another word, or check the classifieds.</div>`;
        return;
      }

      const lead = (!section && !q && list.find((a) => a.lead)) || list[0];
      const rest = list.filter((a) => a !== lead);
      const heading = q ? `Results for “${esc(query)}”` : section ? esc(sectionName(section)) : "Top Stories";

      feed.innerHTML = `
        <section class="lead">
          <a href="${articleUrl(lead)}">${art(lead)}</a>
          <div>
            <span class="tag">${esc(sectionName(lead.section))}</span>
            <a href="${articleUrl(lead)}"><h2>${esc(lead.title)}</h2></a>
            <p class="dek">${esc(lead.dek)}</p>
            <span class="byline">By ${esc(lead.author)} · ${lead.minutes} min read</span>
          </div>
        </section>
        ${rest.length ? `<h2 class="section-title">${heading}</h2><div class="grid">${rest.map(storyCard).join("")}</div>` : ""}`;
    }

    function update(push) {
      const p = new URLSearchParams();
      if (section) p.set("s", section);
      if (query) p.set("q", query);
      const url = p.toString() ? `?${p}` : location.pathname;
      history[push ? "pushState" : "replaceState"](null, "", url);
      setActiveNav(query ? null : section);
      document.title = section ? `${sectionName(section)} — Vice City Daily` : "Vice City Daily";
      draw();
    }

    // Section links switch in place instead of reloading.
    document.querySelectorAll(".nav a[data-sec]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        section = a.dataset.sec;
        query = "";
        input.value = "";
        update(true);
        window.scrollTo({ top: $(".nav").offsetTop, behavior: "smooth" });
      });
    });
    input.addEventListener("input", () => { query = input.value; update(false); });
    $(".search").addEventListener("submit", (e) => { e.preventDefault(); query = input.value; update(true); });
    window.addEventListener("popstate", () => {
      const p = new URLSearchParams(location.search);
      section = p.get("s") || "";
      query = p.get("q") || "";
      input.value = query;
      setActiveNav(query ? null : section);
      draw();
    });

    $("#newsletter-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("#email").value.trim();
      $("#newsletter-msg").textContent = email
        ? `Thanks! The morning edition will find you at ${email}. (This is a demo — nothing was sent.)`
        : "Enter an email address first.";
      e.target.reset();
    });

    if (section || query) setActiveNav(query ? null : section);
    draw();
  }

  // ---------- Article page ----------
  function renderArticle() {
    const id = new URLSearchParams(location.search).get("id");
    const a = ARTICLES.find((x) => x.id === id);
    renderChrome(a ? a.section : null);
    const root = $("#article");

    if (!a) {
      document.title = "Story not found — Vice City Daily";
      root.innerHTML = `
        <div class="article">
          <a class="back" href="./">← Front page</a>
          <h1>This story has drifted out to sea.</h1>
          <p class="dek">We couldn't find that article. It may have been moved, or never existed.</p>
        </div>`;
      return;
    }

    document.title = `${a.title} — Vice City Daily`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", a.dek);

    const related = ARTICLES.filter((x) => x.section === a.section && x !== a)
      .concat(seededShuffle(ARTICLES.filter((x) => x.section !== a.section), daySeed))
      .slice(0, 3);

    root.innerHTML = `
      <article class="article">
        <a class="back" href="./?s=${a.section}">← ${esc(sectionName(a.section))}</a>
        <span class="tag">${esc(sectionName(a.section))}</span>
        <h1>${esc(a.title)}</h1>
        <p class="dek">${esc(a.dek)}</p>
        <div class="meta">
          <span class="byline">By <b>${esc(a.author)}</b></span>
          <span class="byline">${esc(today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))}</span>
          <span class="byline">${a.minutes} min read</span>
        </div>
        ${art(a)}
        <div class="body">${a.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <div class="share">
          <button class="btn" type="button" id="copy-link">Copy link</button>
        </div>
      </article>
      <section class="related">
        <h2 class="section-title">Keep Reading</h2>
        <div class="grid">${related.map(storyCard).join("")}</div>
      </section>`;

    $("#copy-link").addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      try {
        await navigator.clipboard.writeText(location.href);
        btn.textContent = "Copied!";
      } catch (err) {
        btn.textContent = "Copy failed";
      }
      setTimeout(() => { btn.textContent = "Copy link"; }, 1800);
    });
  }

  if (document.body.dataset.page === "article") renderArticle();
  else renderHome();
})();
