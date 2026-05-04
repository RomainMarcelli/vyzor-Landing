// shared.jsx — assets et primitives communes aux 3 variantes VYZOR

// Logo VYZOR (placeholder typographique premium — V monogram)
const VyzorLogo = ({ size = 32, color = "#f0c949", bg = "#0f0f12", ring = "rgba(255,255,255,0.08)" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block" }}>
    <rect x="1" y="1" width="62" height="62" rx="14" fill={bg} stroke={ring} strokeWidth="1" />
    <path d="M16 18 L32 46 L48 18" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" />
    <circle cx="32" cy="50" r="2" fill={color} />
  </svg>
);

// Mock dashboard — réutilisable, prend une "skin" pour s'adapter au thème de la variante
const MockDashboard = ({ skin = "dark", scale = 1 }) => {
  const dark = skin === "dark";
  const editorial = skin === "editorial";
  const bg = dark ? "#0f0f12" : editorial ? "#f7f3ec" : "#ffffff";
  const surface = dark ? "rgba(255,255,255,0.04)" : editorial ? "#ffffff" : "#f8fafc";
  const border = dark ? "rgba(255,255,255,0.08)" : editorial ? "rgba(40,30,20,0.12)" : "rgba(15,23,42,0.10)";
  const text = dark ? "rgba(255,255,255,0.92)" : "#0f1115";
  const muted = dark ? "rgba(255,255,255,0.55)" : editorial ? "rgba(60,50,40,0.65)" : "#64748b";
  const gold = dark ? "#f0c949" : editorial ? "#b8862a" : "#b8862a";
  const emerald = dark ? "#2dd4bf" : "#0f766e";
  const crimson = dark ? "#fb7185" : "#9f1239";

  return (
    <div style={{
      width: "100%",
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 16,
      padding: 18,
      color: text,
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
      boxShadow: dark ? "0 30px 80px -20px rgba(0,0,0,0.6)" : "0 30px 80px -20px rgba(15,23,42,0.18)",
    }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <VyzorLogo size={26} color={gold} bg={dark ? "#0f0f12" : "#fff"} ring={border} />
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", color: muted, textTransform: "uppercase" }}>Vyzor</div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Cockpit financier · ACME SAS</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["Passé", "Présent", "Futur"].map((t, i) => (
            <div key={t} style={{
              fontSize: 11, padding: "5px 10px", borderRadius: 999,
              border: `1px solid ${i === 1 ? gold : border}`,
              background: i === 1 ? (dark ? "rgba(240,201,73,0.12)" : "rgba(184,134,42,0.10)") : "transparent",
              color: i === 1 ? gold : muted,
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Score + KPIs row */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
        {/* Score ring */}
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: 14, position: "relative", overflow: "hidden" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.16em", color: muted, textTransform: "uppercase", marginBottom: 8 }}>Vyzor Score</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="86" height="86" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke={border} strokeWidth="6" />
              <circle cx="50" cy="50" r="42" fill="none" stroke={gold} strokeWidth="6"
                strokeDasharray="263" strokeDashoffset="73" strokeLinecap="round"
                transform="rotate(-90 50 50)" />
              <text x="50" y="48" textAnchor="middle" fontSize="22" fontWeight="700" fill={text} style={{ fontVariantNumeric: "tabular-nums" }}>72</text>
              <text x="50" y="62" textAnchor="middle" fontSize="8" fill={muted} letterSpacing="1">/ 100</text>
            </svg>
            <div style={{ fontSize: 11, lineHeight: 1.5, color: muted }}>
              <div>Solide<span style={{ color: emerald }}> ↑ 4 pts</span></div>
              <div>vs. trimestre précédent</div>
              <div style={{ marginTop: 6, color: text, fontWeight: 600 }}>Risque maîtrisé</div>
            </div>
          </div>
        </div>

        {/* KPI tiles */}
        {[
          { label: "Trésorerie", value: "318 k€", delta: "+12,4 %", up: true },
          { label: "Marge nette", value: "14,2 %", delta: "−0,8 pt", up: false },
        ].map((k) => (
          <div key={k.label} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", color: muted, textTransform: "uppercase", marginBottom: 8 }}>{k.label}</div>
            <div style={{ fontSize: 24, fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>{k.value}</div>
            <div style={{ fontSize: 11, marginTop: 6, color: k.up ? emerald : crimson, fontWeight: 600 }}>{k.delta}</div>
            {/* sparkline */}
            <svg width="100%" height="28" viewBox="0 0 120 28" style={{ marginTop: 8 }}>
              <polyline
                points={k.up ? "0,22 15,18 30,20 45,14 60,16 75,10 90,12 105,6 120,8" : "0,8 15,12 30,10 45,16 60,14 75,18 90,16 105,22 120,20"}
                fill="none" stroke={k.up ? emerald : crimson} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Forecast chart */}
      <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", color: muted, textTransform: "uppercase" }}>Prévision · 90 jours</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>Trésorerie projetée</div>
          </div>
          <div style={{ fontSize: 11, color: muted, display: "flex", gap: 10 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 2, background: gold }}/>Réel</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 2, background: emerald, opacity: 0.6, borderTop: `1px dashed ${emerald}` }}/>Projection</span>
          </div>
        </div>
        <svg width="100%" height="90" viewBox="0 0 400 90" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`g-${skin}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={gold} stopOpacity="0.25" />
              <stop offset="100%" stopColor={gold} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map(y => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke={border} strokeWidth="0.5" />
          ))}
          <path d="M0,70 L40,62 L80,66 L120,52 L160,58 L200,44 L200,90 L0,90 Z" fill={`url(#g-${skin})`} />
          <polyline points="0,70 40,62 80,66 120,52 160,58 200,44" fill="none" stroke={gold} strokeWidth="1.8" />
          <polyline points="200,44 240,38 280,42 320,30 360,34 400,22" fill="none" stroke={emerald} strokeWidth="1.8" strokeDasharray="4 3" />
          <circle cx="200" cy="44" r="3" fill={gold} />
        </svg>
      </div>

      {/* Alerts row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
        <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `2px solid ${crimson}`, borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.14em", color: crimson, textTransform: "uppercase", fontWeight: 600 }}>Alerte</div>
          <div style={{ fontSize: 12, marginTop: 3 }}>BFR en hausse — délai client &gt; 60 j.</div>
        </div>
        <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `2px solid ${emerald}`, borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.14em", color: emerald, textTransform: "uppercase", fontWeight: 600 }}>Recommandation</div>
          <div style={{ fontSize: 12, marginTop: 3 }}>Renégocier 2 contrats fournisseur (≈ 14 k€).</div>
        </div>
      </div>
    </div>
  );
};

// Animated tick — entrée
const tickStyle = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  width: 18, height: 18, borderRadius: 999, fontSize: 10, fontWeight: 700,
};

Object.assign(window, { VyzorLogo, MockDashboard, tickStyle });
