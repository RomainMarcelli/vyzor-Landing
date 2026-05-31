// faq-glass.jsx — Section "Questions fréquentes" (accordéon)
//   Vocabulaire visuel identique au reste de la page :
//   or #f0c949, panneaux verre, titres Inter, badges dégradé or.
//   Le contenu DOIT rester synchronisé avec le JSON-LD FAQPage
//   présent dans le <head> de index.html (Google exige la correspondance).

const VYZOR_FAQ = [
  {
    q: "Qu'est-ce que VYZOR ?",
    a: "VYZOR est un copilote financier intelligent pour dirigeants, DAF et experts-comptables. Il transforme vos chiffres en pilotage clair : reporting automatisé, prévisions de trésorerie et alertes triées par impact en euros, le tout résumé dans un Vyzor Score lisible en quelques secondes.",
  },
  {
    q: "À qui s'adresse VYZOR ?",
    a: "Avant tout aux experts-comptables qui veulent offrir à leurs clients un véritable pilotage financier et se positionner en conseil à forte valeur ajoutée. VYZOR s'adresse aussi aux dirigeants de PME qui veulent piloter sans être experts-comptables, et aux DAF — internes, externalisés ou à temps partagé — qui veulent gagner du temps sur le reporting. L'outil est d'ailleurs co-conçu avec un panel de professionnels du chiffre qui l'utilisent au quotidien.",
  },
  {
    q: "Comment VYZOR se connecte-t-il à ma comptabilité ?",
    a: "VYZOR importe directement votre FEC (Fichier des Écritures Comptables) — sans aucune re-saisie — et peut aussi se connecter via API à vos outils comptables. Vos données sont structurées automatiquement pour produire reporting, prévisions et alertes.",
  },
  {
    q: "Mes données financières sont-elles en sécurité ?",
    a: "Oui. Vos données sont chiffrées et hébergées sur une infrastructure conforme SOC 2 et ISO 27001. Le détail de nos engagements de sécurité et de confidentialité est disponible sur notre page Sécurité.",
  },
  {
    q: "Faut-il être expert en finance pour utiliser VYZOR ?",
    a: "Non. VYZOR est pensé pour être lisible en quelques secondes, même sans bagage financier : un score de santé synthétique, des alertes hiérarchisées par impact en euros et un export PDF prêt pour le conseil d'administration.",
  },
  {
    q: "Comment accéder à VYZOR ?",
    a: "VYZOR est actuellement en accès anticipé (bêta), façonné avec ses premiers utilisateurs. Vous pouvez demander votre accès directement depuis le formulaire en bas de page.",
  },
];

const VyzorFAQ = ({ showHeader = true } = {}) => {
  const gold = "#f0c949";
  const text = "rgba(255,255,255,0.92)";
  const muted = "rgba(255,255,255,0.55)";
  const subtle = "rgba(255,255,255,0.08)";
  const sans = '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" style={{ position: "relative", marginBottom: 112, scrollMarginTop: 110 }}>
      {/* Header éditorial (optionnel — masqué quand la page a déjà son H1) */}
      {showHeader && (
        <div style={{
          borderBottom: `1px solid ${subtle}`, paddingBottom: 24, marginBottom: 40,
        }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
            fontWeight: 700, color: gold, marginBottom: 14,
          }}>F.A.Q.</div>
          <h2 style={{
            fontSize: 52, margin: 0, letterSpacing: "-0.03em", fontWeight: 600, lineHeight: 1.02,
            fontFamily: sans,
          }}>
            Questions fréquentes.<br />
            <span style={{ color: muted, fontWeight: 400, fontStyle: "italic" }}>Tout ce qu'il faut savoir.</span>
          </h2>
        </div>
      )}

      {/* Accordéon */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {VYZOR_FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{
              background: isOpen
                ? "linear-gradient(140deg, #0e1015, #0c0d11)"
                : "rgba(255,255,255,0.02)",
              border: `1px solid ${isOpen ? "rgba(240,201,73,0.28)" : subtle}`,
              borderRadius: 16, overflow: "hidden",
              transition: "border-color 240ms ease, background 240ms ease",
            }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 18,
                  padding: "22px 26px", background: "transparent", border: "none",
                  cursor: "pointer", textAlign: "left", color: text,
                  fontFamily: sans,
                }}
              >
                <span style={{
                  flex: 1, minWidth: 0, fontSize: 18, fontWeight: 600,
                  letterSpacing: "-0.01em", lineHeight: 1.35,
                  color: isOpen ? text : "rgba(255,255,255,0.82)",
                }}>{item.q}</span>
                {/* Indicateur +/− */}
                <span aria-hidden="true" style={{
                  width: 32, height: 32, flexShrink: 0, borderRadius: 999,
                  display: "grid", placeItems: "center", position: "relative",
                  background: isOpen ? "rgba(240,201,73,0.14)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isOpen ? "rgba(240,201,73,0.34)" : subtle}`,
                  transition: "background 240ms ease, border-color 240ms ease",
                }}>
                  <span style={{
                    position: "absolute", width: 12, height: 2, borderRadius: 2,
                    background: isOpen ? gold : muted, transition: "background 240ms ease",
                  }} />
                  <span style={{
                    position: "absolute", width: 12, height: 2, borderRadius: 2,
                    background: isOpen ? gold : muted,
                    transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                    transition: "transform 280ms cubic-bezier(0.22,1,0.36,1), background 240ms ease",
                  }} />
                </span>
              </button>

              {/* Réponse — animation via grid 0fr/1fr */}
              <div style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 320ms cubic-bezier(0.22,1,0.36,1)",
              }}>
                <div style={{ overflow: "hidden" }}>
                  <p style={{
                    margin: 0, padding: "0 26px 24px", maxWidth: 760,
                    fontSize: 15.5, lineHeight: 1.65, color: muted,
                    fontFamily: sans,
                  }}>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Object.assign(window, { VyzorFAQ, VYZOR_FAQ });
