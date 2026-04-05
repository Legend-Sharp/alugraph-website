"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const COUNTER_DATA = [
  { target: 50, suffix: "+", label: "დასრულებული პროექტი" },
  { target: 15000, suffix: " მ²", label: "შემინული ფართობი", format: true },
  { target: 6, suffix: "+", label: "ევროპული ბრენდი" },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const countersStarted = useRef(false);
  const [counts, setCounts] = useState<number[]>(COUNTER_DATA.map(() => 0));

  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;

            setTimeout(() => {
              const duration = 2000;
              const startTime = performance.now();

              const animate = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeOutCubic(progress);

                setCounts(
                  COUNTER_DATA.map((item) =>
                    Math.round(eased * item.target)
                  )
                );

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            }, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsEl);
    return () => observer.disconnect();
  }, []);

  const formatNumber = (n: number) => n.toLocaleString("en-US").replace(",", ",");

  return (
    <section className="hero-section" style={styles.section}>
      {/* Background Image */}
      <div style={styles.imageWrapper}>
        <Image
          src="/images/eastpoint.png"
          alt="Aluminum facade background"
          fill
          priority
          style={styles.bgImage}
        />
        <div style={styles.overlay} />
      </div>

      {/* Decorative Orbs */}
      <div style={styles.orbTopRight} />
      <div style={styles.orbBottomLeft} />

      {/* Content */}
      <div className="hero-container" style={styles.container}>
        <div className="hero-content" style={styles.content}>
          <h1 className="hero-title" style={styles.title}>
            <span style={{ display: "block" }}>ალუმინის ფასადები.</span>
            <span style={{ display: "block" }}>მინის სისტემები.</span>
            <span style={{ display: "block", ...styles.gradientText }}>
              ევროპული ხარისხი.
            </span>
          </h1>

          <p className="hero-desc" style={styles.description}>
            ფასადის სისტემები, კარ-ფანჯრები და ვიტრაჟები. თქვენი სანდო
            პარტნიორი მშენებლობაში.
          </p>

          <div className="hero-buttons" style={styles.buttons}>
            <a
              href="#contact"
              style={styles.primaryButton}
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 googletag492.4 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.4-16-0.9-21.9s-16.7-5.4-22.4 0.8L121.3 362.8 16.7 317.5C6.4 312.7 0 302.4 0 291.2s6.4-21.5 16.7-26.2l448-192c10.1-4.4 21.9-2.7 30.4 4.3l3 2.3z"/>
              </svg>
              შეთავაზების მოთხოვნა
            </a>
            <a
              href="#projects"
              style={styles.outlineButton}
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor">
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM288 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
              </svg>
              ნამუშევრების ნახვა
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="hero-stats" style={styles.stats}>
            {COUNTER_DATA.map((item, i) => (
              <div key={i} style={styles.statItem}>
                <span className="hero-stat-number" style={styles.statNumber}>
                  {item.format ? formatNumber(counts[i]) : counts[i]}
                  <span style={styles.statSuffix}>{item.suffix}</span>
                </span>
                <span style={styles.statLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(15px);
          }
        }


        @media (max-width: 768px) {
          .hero-section {
            padding-top: 80px !important;
            min-height: 100vh;
          }
          .hero-container {
            padding: 0 20px !important;
            align-items: flex-start !important;
          }
          .hero-content {
            max-width: 100% !important;
          }
          .hero-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }
          .hero-desc {
            font-size: 14px !important;
            max-width: 100% !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-buttons a {
            justify-content: center;
            width: 100%;
          }
          .hero-stats {
            flex-direction: row !important;
            gap: 24px !important;
            margin-top: 32px !important;
            justify-content: flex-start !important;
          }
          .hero-stat-number {
            font-size: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Noto Sans Georgian', 'Inter', sans-serif",
  },

  imageWrapper: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },

  bgImage: {
    objectFit: "cover",
    objectPosition: "center 40%",
    filter: "brightness(0.3) saturate(0.9)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(8,12,20,0.92) 0%, rgba(8,12,20,0.6) 50%, rgba(8,12,20,0.8) 100%)",
    zIndex: 1,
  },

  orbTopRight: {
    position: "absolute",
    top: "-200px",
    right: "-100px",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "rgba(14, 165, 233, 0.12)",
    filter: "blur(120px)",
    pointerEvents: "none" as const,
    zIndex: 1,
    animation: "float 8s ease-in-out infinite",
  },

  orbBottomLeft: {
    position: "absolute",
    bottom: "-100px",
    left: "-100px",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "rgba(37, 99, 235, 0.08)",
    filter: "blur(120px)",
    pointerEvents: "none" as const,
    zIndex: 1,
    animation: "float 10s ease-in-out infinite reverse",
  },

  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },

  content: {
    maxWidth: 720,
    textAlign: "left" as const,
  },

  title: {
    fontSize: "clamp(32px, 4.5vw, 52px)",
    fontWeight: 900,
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: "#ffffff",
    margin: 0,
    marginBottom: 24,
    animation: "fadeInUp 0.8s ease-out 0.4s both",
  },

  gradientText: {
    background: "linear-gradient(135deg, #0284c7, #1d4ed8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  description: {
    fontSize: 16,
    color: "#94a3b8",
    maxWidth: 480,
    lineHeight: 1.7,
    marginBottom: 36,
    marginTop: 0,
    animation: "fadeInUp 0.8s ease-out 0.6s both",
  },

  buttons: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap" as const,
    animation: "fadeInUp 0.8s ease-out 0.8s both",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 28px",
    background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
    color: "#ffffff",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Noto Sans Georgian', 'Inter', sans-serif",
    boxShadow: "0 4px 24px rgba(14, 165, 233, 0.3)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textDecoration: "none",
  },

  outlineButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 28px",
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1.5px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Noto Sans Georgian', 'Inter', sans-serif",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textDecoration: "none",
  },

  stats: {
    position: "relative" as const,
    zIndex: 2,
    display: "flex",
    gap: 56,
    marginTop: 60,
    paddingTop: 32,
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    flexWrap: "wrap" as const,
    animation: "fadeInUp 0.8s ease-out 1s both",
  },

  statItem: {
    display: "flex",
    flexDirection: "column" as const,
  },

  statNumber: {
    fontFamily: "'Inter', 'Noto Sans Georgian', sans-serif",
    fontSize: 32,
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: 1,
    marginBottom: 6,
  },

  statSuffix: {
    color: "#0ea5e9",
  },

  statLabel: {
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: 500,
  },
};
