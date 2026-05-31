// daf-coconception.jsx — Section "Co-conçu avec des DAF"
//   Message : Vyzor est façonné avec un panel de DAF qui testent l'outil
//   et remontent leurs retours sur les fonctionnalités.
//   Vocabulaire visuel identique au reste de la page :
//   or #f0c949, panneau verre, titres Inter (toute la section est en Inter).

const DAFCoConception = () => {
  const gold = "#f0c949";
  const text = "rgba(255,255,255,0.92)";
  const muted = "rgba(255,255,255,0.55)";
  const subtle = "rgba(255,255,255,0.08)";
  const goldGrad = "linear-gradient(135deg,#f9e08a 0%, #ebc85b 52%, #d8ac2f 100%)";
  const sans = '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';

  // La boucle de co-conception
  const loop = [
    {
      n: "01",
      t: "On leur fait tester l'outil",
      d: "Chaque DAF du panel a un accès complet et travaille sur ses propres chiffres, en conditions réelles.",
    },
    {
      n: "02",
      t: "On recueille leurs retours",
      d: "Échanges réguliers, sessions de revue et remontées fonctionnalité par fonctionnalité — ce qui manque, ce qui gêne, ce qui aide.",
    },
    {
      n: "03",
      t: "On intègre au produit",
      d: "Les retours qui font consensus passent en roadmap et reviennent en test au sprint suivant. La boucle recommence.",
    },
  ];

  // Profils DAF du panel — anonymisés (bêta), basés sur le rôle / contexte.
  const profils = [
    { i: "DG", role: "DAF · PME industrielle", ctx: "~40 collaborateurs" },
    { i: "TP", role: "DAF à temps partagé", ctx: "plusieurs PME accompagnées" },
    { i: "Sa", role: "Directrice financière · SaaS", ctx: "scale-up en croissance" },
    { i: "Ec", role: "Expert-comptable & DAF externalisé", ctx: "cabinet" },
  ];

  // Ce que les DAF ont concrètement façonné
  const faconne = [
    { f: "Un Vyzor Score lisible en 5 secondes", tag: "Demandé en test terrain" },
    { f: "Des alertes triées par impact en euros", tag: "Retour DAF · PME" },
    { f: "Un export PDF prêt pour le conseil", tag: "Co-conçu avec un DAF de groupe" },
    { f: "Zéro re-saisie : import direct du FEC", tag: "Ajusté après feedback" },
  ];

  return (
    <section id="co-conception" style={{ position: "relative", marginBottom: 112 }}>
      {/* Header — éditorial, asymétrique (aligné sur la méthodo) */}
      <div className="vz-daf-header" style={{
        display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end",
        gap: 32, marginBottom: 44,
        borderBottom: `1px solid ${subtle}`, paddingBottom: 24,
      }}>
        <div>
          <h2 style={{
            fontSize: 52, margin: 0, letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.02,
          }}>
            Conçu avec des DAF.<br />
            <span style={{ color: muted, fontWeight: 400, fontStyle: "italic" }}>Pas seulement pour eux.</span>
          </h2>
        </div>
        <p style={{
          fontSize: 14, color: muted, lineHeight: 1.6, maxWidth: 340, margin: 0,
          paddingLeft: 24, borderLeft: `1px solid ${subtle}`,
        }}>
          Vyzor n'est pas pensé en chambre. Un panel de directeurs financiers
          utilise l'outil au quotidien et nous remonte ses retours — fonctionnalité
          par fonctionnalité.
        </p>
      </div>

      {/* Corps — panneau verre scindé en deux */}
      <div className="vz-daf-panel" style={{
        display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 0,
        background: "linear-gradient(140deg, #0e1015, #0c0d11)",
        border: `1px solid ${subtle}`, borderTop: `1px solid rgba(240,201,73,0.20)`,
        borderRadius: 20, overflow: "hidden", position: "relative",
      }}>
        {/* Gauche — la boucle de co-conception */}
        <div className="vz-daf-loop" style={{
          padding: "40px 44px", borderRight: `1px solid ${subtle}`,
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 4 }}>
            {/* rail vertical reliant les étapes */}
            <div aria-hidden="true" style={{
              position: "absolute", left: 21, top: 22, bottom: 22, width: 1,
              background: "linear-gradient(180deg, rgba(240,201,73,0.45), rgba(255,255,255,0.06))",
            }} />
            {loop.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 18, padding: "10px 0", position: "relative" }}>
                <span style={{
                  width: 44, height: 44, flexShrink: 0, borderRadius: 999,
                  display: "grid", placeItems: "center",
                  fontFamily: sans, fontSize: 13, fontWeight: 700,
                  color: "#111", background: goldGrad,
                  border: "1px solid #f2d782",
                  boxShadow: "0 8px 20px rgba(216,172,47,0.28), inset 0 1px 0 rgba(255,255,255,0.45)",
                  position: "relative", zIndex: 1,
                }}>{s.n}</span>
                <div style={{ paddingTop: 2 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", color: text }}>{s.t}</div>
                  <div style={{ fontSize: 13.5, color: muted, lineHeight: 1.6, marginTop: 5, maxWidth: 380 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Droite — ce que les DAF ont façonné */}
        <div className="vz-daf-shaped" style={{
          padding: "40px 40px",
          background: "radial-gradient(circle at 75% 15%, rgba(240,201,73,0.08), transparent 55%)",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
            {faconne.map((it, i) => (
              <li key={it.f} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "15px 0",
                borderTop: i === 0 ? "none" : `1px solid ${subtle}`,
              }}>
                <span style={{
                  width: 24, height: 24, flexShrink: 0, borderRadius: 7,
                  display: "grid", placeItems: "center",
                  background: "rgba(240,201,73,0.12)", border: "1px solid rgba(240,201,73,0.30)",
                  color: gold, fontSize: 12,
                }}>✓</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14.5, color: text, letterSpacing: "-0.005em", lineHeight: 1.35 }}>{it.f}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* Panel DAF — profils anonymisés */}
          <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${subtle}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <div style={{ display: "flex" }}>
                {profils.map((p, i) => (
                  <span key={p.i} title={`${p.role} — ${p.ctx}`} style={{
                    width: 38, height: 38, borderRadius: 999,
                    display: "grid", placeItems: "center",
                    fontFamily: sans, fontSize: 12, fontWeight: 600, color: text,
                    background: "#15171d",
                    border: "1px solid rgba(240,201,73,0.30)",
                    marginLeft: i === 0 ? 0 : -10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    position: "relative", zIndex: profils.length - i,
                  }}>{p.i}</span>
                ))}
              </div>
              <div style={{ fontSize: 12.5, color: muted, lineHeight: 1.5 }}>
                DAF de PME, à temps partagé, de scale-up<br />
                et experts-comptables — sur le terrain.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DAFCoConception });
