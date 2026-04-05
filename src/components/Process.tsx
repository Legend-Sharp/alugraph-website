"use client";

import { useEffect } from "react";

const STEPS = [
  {
    num: "01",
    title: "კონსულტაცია",
    desc: "პროექტის მოთხოვნების განხილვა, ტექნიკური კონსულტაცია და ოპტიმალური გადაწყვეტის შერჩევა.",
  },
  {
    num: "02",
    title: "პროექტირება",
    desc: "დეტალური ტექნიკური ნახაზების მომზადება, მასალების შერჩევა და ხარჯთაღრიცხვის შედგენა.",
  },
  {
    num: "03",
    title: "წარმოება",
    desc: "თანამედროვე აღჭურვილობით ალუმინის კონსტრუქციების მაღალხარისხიანი დამზადება.",
  },
  {
    num: "04",
    title: "მონტაჟი",
    desc: "პროფესიონალური გუნდის მიერ მონტაჟი, ხარისხის კონტროლი და გარანტიით უზრუნველყოფა.",
  },
];

export default function Process() {
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
    <section id="process" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div className="reveal" style={styles.header}>
          <span style={styles.label}>
            <span style={styles.labelLine} />
            HOW WE WORK
          </span>
          <h2 style={styles.title}>
            თანამშრომლობის{" "}
            <span style={styles.accentText}>პროცესი</span>
          </h2>
          <p style={styles.subtitle}>
            გამჭვირვალე და ეფექტური პროცესი — ყოველი ეტაპი გათვლილია თქვენი
            პროექტის წარმატებისთვის.
          </p>
        </div>

        {/* Steps grid */}
        <div className="process-grid" style={styles.grid}>
          {/* Connecting line */}
          <div className="process-line" />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="reveal process-step"
              style={{ ...styles.step, transitionDelay: `${i * 0.15}s` }}
            >
              <div className="step-number">{step.num}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .process-grid {
          position: relative;
        }

        .process-line {
          position: absolute;
          top: 40px;
          left: 60px;
          right: 60px;
          height: 2px;
          background: linear-gradient(
            90deg,
            #0ea5e9,
            rgba(14, 165, 233, 0.1)
          );
          z-index: 0;
        }

        .process-step {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .step-number {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid #0ea5e9;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-inter), "Inter", sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #0ea5e9;
          margin: 0 auto 20px;
          transition: background 0.35s ease, color 0.35s ease;
        }

        .step-number:hover {
          background: #0ea5e9;
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .process-line {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-line {
            display: none;
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
  },
  step: {
    textAlign: "center",
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 10px 0",
  },
  stepDesc: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: 0,
  },
};
