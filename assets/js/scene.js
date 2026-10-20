// Animated synthwave Vice City scene drawn on a canvas: sky, stars, sun,
// skyline, ocean reflection and a flowing perspective grid. Pure 2D canvas,
// resolution-capped so it stays smooth on phones.
(function () {
  "use strict";
  const canvas = document.getElementById("scene");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, dpr = 1, horizon = 0;
  let stars = [], buildings = [], sparks = [];

  // Deterministic random so the skyline is the same on every visit.
  function rng(seed) { return () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }; }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    horizon = H * 0.62;

    const r = rng(1986);
    stars = Array.from({ length: Math.round(W / 6) }, () => ({
      x: r() * W, y: r() * horizon * 0.9, s: r() * 1.4 + 0.3, p: r() * Math.PI * 2, v: 0.5 + r() * 1.5
    }));

    // City silhouette: two layers, taller towers near the centre.
    buildings = [];
    for (let layer = 0; layer < 2; layer++) {
      let x = -20;
      while (x < W + 20) {
        const w = 14 + r() * (layer ? 40 : 26);
        const centre = 1 - Math.abs((x + w / 2) / W - 0.5) * 2;
        const h = (layer ? 30 : 60) + r() * (layer ? 60 : 130) * (0.35 + centre) ;
        const windows = [];
        for (let wy = 8; wy < h - 6; wy += 9) for (let wx = 4; wx < w - 4; wx += 7) if (r() < 0.45) windows.push([wx, wy]);
        buildings.push({ layer, x, w, h, windows, spire: r() < 0.18, neon: r() < 0.5 ? "#2de2e6" : "#ff2e88" });
        x += w + 2 + r() * 10;
      }
    }

    sparks = Array.from({ length: 28 }, () => ({
      x: r() * W, y: horizon - r() * horizon * 0.5, vx: (r() - 0.5) * 0.25, vy: -(0.1 + r() * 0.25), life: r()
    }));
  }

  const sunR = () => Math.min(Math.max(W * 0.26, 150), H * 0.26);

  function drawSky() {
    const g = ctx.createLinearGradient(0, 0, 0, horizon);
    g.addColorStop(0, "#07021a");
    g.addColorStop(0.45, "#2a0a4f");
    g.addColorStop(0.78, "#7a1b6e");
    g.addColorStop(1, "#ff5c6a");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, horizon + 2);
  }

  function drawStars(t) {
    for (const s of stars) {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.0012 * s.v + s.p));
      const fade = 1 - s.y / (horizon * 0.9);
      ctx.fillStyle = `rgba(255,255,255,${(a * fade).toFixed(3)})`;
      ctx.fillRect(s.x, s.y, s.s, s.s);
    }
  }

  function drawSun(t) {
    const cx = W / 2, R = sunR(), cy = horizon - R * 0.8;
    // Glow halo
    const halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 2.6);
    halo.addColorStop(0, "rgba(255,120,80,0.55)");
    halo.addColorStop(0.5, "rgba(255,46,136,0.18)");
    halo.addColorStop(1, "rgba(255,46,136,0)");
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, W, horizon);

    ctx.save();
    ctx.beginPath(); ctx.rect(0, 0, W, horizon); ctx.clip();
    const g = ctx.createLinearGradient(0, cy - R, 0, cy + R);
    g.addColorStop(0, "#fff1a8");
    g.addColorStop(0.45, "#ffb347");
    g.addColorStop(0.75, "#ff4f8b");
    g.addColorStop(1, "#c81e8f");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();

    // Horizontal cuts that drift downward, thicker near the bottom.
    ctx.fillStyle = "rgba(10,2,26,0.9)";
    const shift = reduce ? 0 : (t * 0.02) % 26;
    for (let i = 0; i < 9; i++) {
      const y = cy - R * 0.05 + i * 26 - 26 + shift;
      if (y > cy + R) break;
      const thick = 2 + i * 1.6;
      ctx.fillRect(cx - R - 2, y, R * 2 + 4, thick);
    }
    ctx.restore();
  }

  function drawSkyline() {
    for (const b of buildings) {
      const top = horizon - b.h;
      ctx.fillStyle = b.layer ? "#120528" : "#1f0a3f";
      ctx.fillRect(b.x, top, b.w, b.h + 2);
      if (b.spire) { ctx.fillRect(b.x + b.w / 2 - 1, top - 18, 2, 18); }
      if (!b.layer) {
        ctx.fillStyle = "rgba(255,214,140,0.75)";
        for (const [wx, wy] of b.windows) ctx.fillRect(b.x + wx, top + wy, 3, 4);
        // neon trim on rooftops
        ctx.fillStyle = b.neon;
        ctx.fillRect(b.x, top, b.w, 1.5);
      }
    }
    // horizon glow line
    const g = ctx.createLinearGradient(0, horizon - 3, 0, horizon + 6);
    g.addColorStop(0, "rgba(255,255,255,0)");
    g.addColorStop(0.5, "rgba(255,200,230,0.9)");
    g.addColorStop(1, "rgba(255,46,136,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, horizon - 3, W, 9);
  }

  function drawOcean(t) {
    const g = ctx.createLinearGradient(0, horizon, 0, H);
    g.addColorStop(0, "#3a0d5e");
    g.addColorStop(0.5, "#120526");
    g.addColorStop(1, "#07021a");
    ctx.fillStyle = g;
    ctx.fillRect(0, horizon, W, H - horizon);

    // Sun reflection: shimmering slices that widen toward the viewer.
    const cx = W / 2, R = sunR();
    for (let y = horizon + 2; y < H; y += 5) {
      const d = (y - horizon) / (H - horizon);
      const wob = reduce ? 0 : Math.sin(y * 0.15 + t * 0.004) * 10 * d + Math.sin(y * 0.05 - t * 0.002) * 6;
      const w = R * (0.9 + d * 1.6) * (0.75 + 0.25 * Math.sin(y * 0.3 + t * 0.006));
      const a = (1 - d) * 0.45 + 0.05;
      const rg = ctx.createLinearGradient(cx - w, 0, cx + w, 0);
      rg.addColorStop(0, "rgba(255,120,150,0)");
      rg.addColorStop(0.5, `rgba(255,170,120,${a})`);
      rg.addColorStop(1, "rgba(255,120,150,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(cx - w + wob, y, w * 2, 3);
    }

    // Perspective grid flowing toward the viewer
    ctx.strokeStyle = "rgba(255,46,136,0.55)";
    ctx.lineWidth = 1;
    const vanish = { x: cx, y: horizon };
    const cols = 22;
    for (let i = -cols; i <= cols; i++) {
      const xBottom = cx + (i / cols) * W * 1.9;
      ctx.beginPath(); ctx.moveTo(vanish.x, vanish.y); ctx.lineTo(xBottom, H); ctx.stroke();
    }
    const speed = reduce ? 0 : (t * 0.0006) % 1;
    for (let k = 0; k < 14; k++) {
      let z = ((k + speed) / 14);
      z = z * z; // ease so lines bunch toward the horizon
      const y = horizon + z * (H - horizon);
      ctx.globalAlpha = 0.25 + z * 0.75;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(45,226,230,0.35)";
    ctx.beginPath(); ctx.moveTo(cx, horizon); ctx.lineTo(cx, H); ctx.stroke();
  }

  function drawSparks(dt) {
    for (const s of sparks) {
      if (!reduce) { s.x += s.vx * dt; s.y += s.vy * dt; s.life += dt * 0.0004; }
      if (s.life > 1 || s.y < horizon * 0.3) { s.life = 0; s.y = horizon - 5; s.x = Math.random() * W; }
      const a = Math.sin(s.life * Math.PI);
      ctx.fillStyle = `rgba(255,220,180,${(a * 0.8).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2); ctx.fill();
    }
  }

  function drawVignette() {
    const g = ctx.createRadialGradient(W / 2, H * 0.55, H * 0.35, W / 2, H * 0.55, H);
    g.addColorStop(0, "rgba(7,2,26,0)");
    g.addColorStop(1, "rgba(7,2,26,0.75)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    const bottom = ctx.createLinearGradient(0, H * 0.7, 0, H);
    bottom.addColorStop(0, "rgba(10,4,24,0)");
    bottom.addColorStop(1, "rgba(10,4,24,1)");
    ctx.fillStyle = bottom;
    ctx.fillRect(0, H * 0.7, W, H * 0.3);
  }

  let last = 0, running = true;
  function frame(t) {
    const dt = Math.min(48, t - last || 16); last = t;
    ctx.clearRect(0, 0, W, H);
    drawSky(); drawStars(t); drawSun(t); drawSkyline(); drawOcean(t); drawSparks(dt); drawVignette();
    if (running && !reduce) requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", () => { resize(); if (reduce) frame(0); }, { passive: true });
  // Pause when the hero scrolls out of view or the tab is hidden.
  const start = () => { if (!running) { running = true; requestAnimationFrame(frame); } };
  const stop = () => { running = false; };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((e) => (e[0].isIntersecting ? start() : stop())).observe(canvas);
  }
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  requestAnimationFrame(frame);
})();
