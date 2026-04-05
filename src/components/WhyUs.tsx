"use client";

import { useEffect } from "react";
import Image from "next/image";

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "ვადების დაცვა",
    desc: "პროექტის ყოველი ეტაპი გათვლილია და ვიცავთ შეთანხმებულ ვადებს. დროში ჩაბარება ჩვენი პრიორიტეტია.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "გარანტირებული ხარისხი",
    desc: "ვიყენებთ მხოლოდ სერტიფიცირებულ მასალებს და ევროპულ ტექნოლოგიებს. ხარისხის კონტროლი ყოველ ეტაპზე.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "პროფესიონალი გუნდი",
    desc: "გამოცდილი ინჟინრები და მონტაჟის სპეციალისტები. მუდმივი კვალიფიკაციის ამაღლება.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "მოქნილი პირობები",
    desc: "ინდივიდუალური მიდგომა ყოველი პროექტისთვის. ადაპტირებული გადახდის პირობები და მხარდაჭერა.",
  },
];

export default function WhyUs() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" style={styles.section}>
      <div style={styles.container}>
        <div className="whyus-grid">
          {/* Left — Image */}
          <div className="reveal-left" style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <Image
                src="/images/3-original.jpg"
                alt="Alugraph project"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              {/* Stat card top-left */}
              <div className="whyus-stat" style={{ ...styles.statCard, top: 24, left: -20 }}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>პროექტი</span>
              </div>
              {/* Stat card bottom-right */}
              <div className="whyus-stat" style={{ ...styles.statCard, bottom: 24, right: -20 }}>
                <span style={styles.statNumber}>100%</span>
                <span style={styles.statLabel}>ვადების დაცვა</span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal-right">
            <span style={styles.label}>
              <span style={styles.labelLine} />
              WHY ALUGRAPH
            </span>
            <h2 style={styles.title}>
              რატომ გვირჩევენ{" "}
              <span style={styles.accentText}>დეველოპერები?</span>
            </h2>
            <p style={styles.subtitle}>
              ჩვენ ვქმნით გრძელვადიან პარტნიორობას, რომელიც დაფუძნებულია
              ხარისხზე, სანდოობასა და პროფესიონალიზმზე.
            </p>

            <div style={styles.features}>
              {FEATURES.map((f, i) => (
                <div key={i} style={styles.featureItem}>
                  <div style={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <h4 style={styles.featureTitle}>{f.title}</h4>
                    <p style={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .whyus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .whyus-stat {
          animation: float 6s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .whyus-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
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
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },
  imageCol: {
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    height: 700,
    borderRadius: 16,
    overflow: "visible",
  },
  statCard: {
    position: "absolute" as const,
    background: "rgba(15,23,42,0.8)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    zIndex: 2,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 800,
    color: "#0ea5e9",
  },
  statLabel: {
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: 500,
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
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
    maxWidth: 500,
  },
  features: {
    marginTop: 36,
    display: "flex",
    flexDirection: "column",
    gap: 28,
  },
  featureItem: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  },
  featureIcon: {
    width: 48,
    height: 48,
    minWidth: 48,
    borderRadius: 12,
    background: "rgba(14,165,233,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 6px 0",
  },
  featureDesc: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: 0,
  },
};
