"use client";

import { useEffect } from "react";
import Image from "next/image";

const PARTNERS = [
  { src: "/partners/shuko.png", alt: "Shuko" },
  { src: "/partners/roto.jpg", alt: "Roto" },
  { src: "/partners/maco.jpg", alt: "Maco" },
  { src: "/partners/asas.png", alt: "Asas" },
  { src: "/partners/reze.jpg", alt: "Reze" },
  { src: "/partners/download.png", alt: "Partner" },
];

export default function Partners() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
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
    <section id="partners" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div className="reveal" style={styles.header}>
          <span style={styles.label}>
            <span style={styles.labelLine} />
            TRUSTED BRANDS
          </span>
          <h2 style={styles.title}>
            ხარისხი, რომელსაც{" "}
            <span style={styles.accentText}>ვენდობით</span>
          </h2>
          <p style={styles.subtitle}>
            ჩვენ ვთანამშრომლობთ მსოფლიოში აღიარებულ ბრენდებთან, რომ
            უზრუნველვყოთ უმაღლესი ხარისხი.
          </p>
        </div>

        {/* Logos */}
        <div className="reveal partners-row" style={styles.logosRow}>
          {PARTNERS.map((p, i) => (
            <div key={i} className="partner-card" style={styles.logoCard}>
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={40}
                style={{
                  maxHeight: 40,
                  maxWidth: 120,
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .partners-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 48px;
        }

        .partner-card {
          opacity: 0.85;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .partner-card:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        @media (max-width: 640px) {
          .partners-row {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: "#0f172a",
    padding: "90px 0",
    position: "relative",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: 60,
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
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logosRow: {
    display: "flex",
    flexWrap: "nowrap" as const,
    justifyContent: "center",
    gap: 32,
  },
  logoCard: {
    width: 150,
    minWidth: 150,
    height: 80,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
