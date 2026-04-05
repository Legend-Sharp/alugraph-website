"use client";

import { useEffect } from "react";

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    title: "ფასადის სისტემები",
    desc: "თანამედროვე შენობების სრული შემინვა და ალუმინის ფასადებით მოპირკეთება. სტრუქტურული და ნახევრად-სტრუქტურული სისტემები.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M12 2v20" />
        <path d="M18 10h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
        <circle cx="8" cy="12" r="1" fill="#0ea5e9" />
      </svg>
    ),
    title: "კარ-ფანჯრები",
    desc: "თერმო და არათერმო ალუმინის კარ-ფანჯრების დამზადება და მონტაჟი. ენერგოეფექტური გადაწყვეტილებები.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12H3" />
        <path d="M21 12l-4-4" />
        <path d="M21 12l-4 4" />
        <path d="M3 12l4-4" />
        <path d="M3 12l4 4" />
        <rect x="7" y="4" width="10" height="16" rx="1" />
      </svg>
    ),
    title: "სლაიდერული სისტემები",
    desc: "სივრცის დამზოგავი, გრანდიოზული გასაწევი სისტემები პანორამული ხედებისთვის. Lift & Slide ტექნოლოგია.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "მინის ტიხრები",
    desc: "საოფისე და კომერციული სივრცეების თანამედროვე ზონირება. ელეგანტური და ფუნქციონალური გადაწყვეტა.",
  },
];

export default function Services() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={styles.section}>
      {/* Top divider */}
      <div style={styles.divider} />

      <div style={styles.container}>
        {/* Section header */}
        <div className="reveal" style={styles.header}>
          <span style={styles.label}>
            <span style={styles.labelLine} />
            SERVICES
          </span>
          <h2 style={styles.title}>
            რას ვთავაზობთ{" "}
            <span style={styles.accentText}>პარტნიორებს</span>
          </h2>
          <p style={styles.subtitle}>
            სრული ციკლის სერვისი — პროექტირებიდან მონტაჟამდე. ერთი პარტნიორი
            ყველა ამოცანისთვის.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-grid" style={styles.grid}>
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className={`reveal service-card`}
              style={{
                ...styles.card,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="card-accent-line" />
              <div style={styles.iconBox}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card {
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease, border-color 0.35s ease,
            transform 0.35s ease, box-shadow 0.35s ease, opacity 0.7s ease,
            translateY 0.7s ease;
        }

        .service-card .card-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            #0ea5e9,
            transparent
          );
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .service-card:hover .card-accent-line {
          opacity: 1;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(14, 165, 233, 0.15) !important;
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(14, 165, 233, 0.08);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: "#080c14",
    padding: "90px 0",
    position: "relative",
  },

  divider: {
    width: "80%",
    height: 1,
    margin: "0 auto",
    marginBottom: 60,
    background:
      "linear-gradient(90deg, transparent, rgba(14,165,233,0.2), transparent)",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },

  header: {
    textAlign: "center" as const,
    marginBottom: 60,
  },

  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "#0ea5e9",
    marginBottom: 16,
  },

  labelLine: {
    display: "inline-block",
    width: 40,
    height: 2,
    background: "#0ea5e9",
    borderRadius: 1,
  },

  title: {
    fontSize: "clamp(26px, 3.5vw, 38px)",
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: 1.3,
    margin: "16px 0 0 0",
  },

  accentText: {
    background: "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    lineHeight: 1.7,
    marginTop: 16,
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    marginTop: 60,
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: "36px 28px",
    cursor: "default",
  },

  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    background: "rgba(14,165,233,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 10px 0",
  },

  cardDesc: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: 0,
  },
};
