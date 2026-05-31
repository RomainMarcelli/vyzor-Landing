// footer-glass.jsx — Footer "Liquid Glass" pour VYZOR
// Reprend la DA cinématique : fond #070a14, accent or #f0c949, surfaces glass,
// halo refractif, bordures lumineuses, typo Inter + JetBrains Mono.

const VyzorFooterGlass = ({ fullWidth = false }) => {
  const gold = "#f0c949";
  const text = "rgba(255,255,255,0.92)";
  const muted = "rgba(255,255,255,0.55)";
  const faint = "rgba(255,255,255,0.32)";
  const subtle = "rgba(255,255,255,0.08)";
  const cardRef = React.useRef(null);

  // Effet "spotlight" qui suit la souris dans le footer (desktop uniquement)
  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: none), (pointer: coarse)").matches
    ) {
      return; // pas de mousemove sur touch
    }
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--fx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--fy", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const navColumns = [
    {
      title: "Produit",
      links: [
        { label: "Cockpit financier", href: "#produit" },
        { label: "Vyzor Score", href: "#score" },
        { label: "Prévisions 90 j.", href: "#forecast" },
        { label: "Alertes & recommandations", href: "#alertes" },
      ],
    },
    {
      title: "Méthode",
      links: [
        { label: "Passé · Présent · Futur", href: "#methode" },
        { label: "Pour les DAF", href: "#daf" },
        { label: "Pour les experts-comptables", href: "#ec" },
        { label: "Sécurité & RGPD", href: "securite.html" },
      ],
    },
    {
      title: "Société",
      links: [
        { label: "À propos", href: "#about" },
        { label: "FAQ", href: "faq.html" },
        { label: "Manifeste", href: "#manifeste" },
        { label: "Presse", href: "#presse" },
        { label: "Nous contacter", href: "mailto:admin@vyzor.fr" },
      ],
    },
  ];

  // Petit badge social — carré glass avec icône monochrome
  const SocialIcon = ({ label, path, href = "#" }) => (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 38, height: 38, borderRadius: 10,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${subtle}`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: muted,
        textDecoration: "none",
        transition: "transform 220ms ease, color 220ms ease, border-color 220ms ease, background 220ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.color = gold;
        e.currentTarget.style.borderColor = "rgba(240,201,73,0.45)";
        e.currentTarget.style.background = "rgba(240,201,73,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.color = muted;
        e.currentTarget.style.borderColor = subtle;
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {path}
      </svg>
    </a>
  );

  return (
    <footer
      ref={cardRef}
      style={{
        position: "relative",
        marginTop: fullWidth ? 0 : 96,
        borderRadius: fullWidth ? 0 : 28,
        overflow: "hidden",
        width: "100%",
        // Glass surface
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.01) 100%)",
        border: `1px solid ${subtle}`,
        backdropFilter: "blur(24px) saturate(140%)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",
        color: text,
        fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(255,255,255,0.02) inset, 0 40px 100px -40px rgba(0,0,0,0.6)",
      }}
    >
      {/* Halo refractif animé suivant la souris */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(420px circle at var(--fx, 80%) var(--fy, 0%), rgba(240,201,73,0.10), transparent 60%)",
          pointerEvents: "none",
          transition: "background 80ms linear",
        }}
      />
      {/* Halo statique en haut à gauche, ton sarcelle */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: -120, left: -80,
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,191,0.16), transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      {/* Filet lumineux haut */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(240,201,73,0.55), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Bloc principal — 2 colonnes : brand + nav */}
      <div className="vz-footer-main" style={{
        position: "relative",
        padding: "56px 56px 40px",
        display: "grid",
        gridTemplateColumns: "1.4fr 2fr",
        gap: 56,
      }}>
        {/* Colonne brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <VyzorLogo size={44} color={gold} bg="rgba(15,15,18,0.6)" ring={subtle} />
            <div>
              <div style={{
                fontSize: 22, fontWeight: 800, letterSpacing: "0.18em",
                color: "#fff",
              }}>VYZOR</div>
              <div style={{
                fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: 10, letterSpacing: "0.22em",
                color: gold, textTransform: "uppercase", marginTop: 2,
              }}>
                Cockpit financier · v0.9 · bêta
              </div>
            </div>
          </div>

          <p style={{
            fontSize: 14, lineHeight: 1.65, color: muted,
            maxWidth: 380, margin: "0 0 28px",
            textWrap: "pretty",
          }}>
            Vyzor donne aux dirigeants de PME, DAF et experts-comptables une lecture limpide de leur santé financière — passé, présent, futur — au sein d'un cockpit unique.
          </p>

          {/* Mini-CTA bêta */}
          <a
            href="#beta"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "12px 18px", borderRadius: 999,
              background: "rgba(240,201,73,0.10)",
              border: "1px solid rgba(240,201,73,0.45)",
              color: gold, textDecoration: "none",
              fontSize: 13, fontWeight: 600, letterSpacing: "0.02em",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition: "background 220ms ease, transform 220ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(240,201,73,0.18)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(240,201,73,0.10)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: gold,
              boxShadow: `0 0 0 4px rgba(240,201,73,0.18)`,
            }} />
            Rejoindre la bêta
            <span style={{ fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace', fontSize: 11, color: faint }}>
              · 10 places
            </span>
          </a>

          {/* Sociaux */}
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <SocialIcon
              label="LinkedIn"
              path={
                <>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </>
              }
            />
            <SocialIcon
              label="X"
              path={
                <>
                  <path d="M4 4l16 16M20 4L4 20" />
                </>
              }
            />
            <SocialIcon
              label="Email"
              href="mailto:admin@vyzor.fr"
              path={
                <>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </>
              }
            />
            <SocialIcon
              label="GitHub"
              path={
                <>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.4 13.4 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </>
              }
            />
          </div>
        </div>

        {/* Colonnes nav */}
        <div className="vz-footer-nav" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
        }}>
          {navColumns.map((col) => (
            <div key={col.title}>
              <div style={{
                fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: 10, letterSpacing: "0.22em",
                color: gold, textTransform: "uppercase",
                marginBottom: 18,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: 1,
                  background: gold, opacity: 0.7,
                }} />
                {col.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      style={{
                        color: text, textDecoration: "none",
                        fontSize: 14, fontWeight: 400,
                        display: "inline-flex", alignItems: "center", gap: 8,
                        transition: "color 220ms ease, transform 220ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = gold;
                        const arrow = e.currentTarget.querySelector(".arrow");
                        if (arrow) {
                          arrow.style.opacity = "1";
                          arrow.style.transform = "translateX(2px)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = text;
                        const arrow = e.currentTarget.querySelector(".arrow");
                        if (arrow) {
                          arrow.style.opacity = "0";
                          arrow.style.transform = "translateX(-4px)";
                        }
                      }}
                    >
                      {l.label}
                      <span
                        className="arrow"
                        style={{
                          fontSize: 12, opacity: 0,
                          transform: "translateX(-4px)",
                          transition: "opacity 220ms ease, transform 220ms ease",
                        }}
                      >→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bandeau bas — séparateur lumineux + status + légal */}
      <div className="vz-footer-bottom" style={{
        position: "relative",
        borderTop: `1px solid ${subtle}`,
        padding: "20px 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 24,
        background: "rgba(255,255,255,0.015)",
      }}>
        {/* Filet lumineux qui longe le séparateur */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: -1, left: "20%", right: "20%", height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
          }}
        />

        <div style={{
          display: "flex", alignItems: "center", gap: 18,
          fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
          fontSize: 11, color: faint, letterSpacing: "0.04em",
        }}>
          <span>© 2026 Vyzor</span>
          <span style={{ color: subtle }}>·</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#2dd4bf",
              boxShadow: "0 0 0 3px rgba(45,212,191,0.20)",
              animation: "vyzorPulse 2s ease-in-out infinite",
            }} />
            <span style={{ color: muted }}>Tous systèmes opérationnels</span>
          </span>
          <span style={{ color: subtle }}>·</span>
          <span>Hébergé en France 🇫🇷</span>
        </div>

        <div style={{
          display: "flex", gap: 22,
          fontSize: 12, color: muted,
        }}>
          {[
            { label: "Mentions légales", href: "#legal" },
            { label: "Confidentialité", href: "#privacy" },
            { label: "CGU", href: "#cgu" },
            { label: "admin@vyzor.fr", href: "mailto:admin@vyzor.fr" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: muted, textDecoration: "none",
                transition: "color 220ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
            >{l.label}</a>
          ))}
        </div>
      </div>

      {/* Mot-marque immense en bas, ultra-discret — signature graphique */}
      <div
        aria-hidden="true"
        className="vz-footer-signature"
        style={{
          position: "relative",
          height: 120,
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          overflow: "hidden",
          paddingBottom: 0,
        }}
      >
        <div style={{
          fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
          fontSize: "clamp(120px, 18vw, 240px)",
          fontWeight: 900,
          letterSpacing: "0.04em",
          lineHeight: 0.85,
          background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(240,201,73,0.10) 60%, transparent 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          whiteSpace: "nowrap",
          userSelect: "none",
          transform: "translateY(18%)",
        }}>
          VYZOR
        </div>
      </div>

      {/* Keyframes inline */}
      <style>{`
        @keyframes vyzorPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(45,212,191,0.20); }
          50%      { box-shadow: 0 0 0 6px rgba(45,212,191,0.05); }
        }
      `}</style>
    </footer>
  );
};

Object.assign(window, { VyzorFooterGlass });
