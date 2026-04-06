"use client";

import { useEffect } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    span: 7,
    height: 480,
    image: "/images/eastpoint.png",
    objectPosition: "center",
    tag: "მეგა პროექტი",
    year: "2013",
    name: "სავაჭრო ქალაქი Eastpoint",
    desc: "ღია კონცეფციის სავაჭრო ცენტრი — კომპლექსური ფასადური სისტემები და კომერციული ვიტრაჟები.",
    services: ["კომპლექსური შემინვა", "ფასადური სისტემები", "კომერციული ვიტრაჟები"],
  },
  {
    span: 5,
    height: 480,
    image: "/images/5.jpg",
    objectPosition: "center 60%",
    tag: "კომერციული",
    year: "2012",
    name: "Mate Motors",
    desc: "ავტოსალონი და სერვის ცენტრი — ფასადის შემინვა და ალუმინის ვიტრაჟები.",
    services: ["ფასადის შემინვა", "ალუმინის ვიტრაჟები"],
  },
  {
    span: 6,
    height: 400,
    image: "/images/4.jpeg",
    objectPosition: "center",
    tag: "პრემიუმ კლასი",
    year: "2018",
    name: "Panorama Kvariati",
    desc: "ზღვისპირა პრემიუმ კომპლექსი — აივნების მინის მოაჯირები და პანორამული ვიტრაჟები.",
    services: ["მინის მოაჯირები", "პანორამული ვიტრაჟები"],
  },
  {
    span: 6,
    height: 400,
    image: "/images/7.jpeg",
    objectPosition: "center 70%",
    tag: "დასრულებული",
    year: "2014",
    name: "სასტუმრო Tbilisi Tower",
    desc: "მასშტაბური კომერციული პროექტი — ფასადის სრული შემინვა და ალუმინის კონსტრუქციები.",
    services: ["ფასადის შემინვა", "ალუმინის კონსტრუქციები"],
  },
];

const GALLERY = [
  [
    { src: "/images/1.jpg", position: "center 20%" },
    { src: "/images/6.jpeg", position: "center 20%" },
    { src: "/images/2.jpg", position: "center 20%" },
  ],
  [
    { src: "/images/9.jpeg", position: "center 40%" },
    { src: "/images/8.jpeg", position: "center 10%" },
    { src: "/images/10.jpeg", position: "center 40%" },
  ],
];

export default function Projects() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-scale");

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
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        {/* Section header */}
        <div className="reveal-scale" style={styles.header}>
          <span style={styles.label}>
            <span style={styles.labelLine} />
            PORTFOLIO
          </span>
          <h2 style={styles.title}>
            გამორჩეული{" "}
            <span style={styles.accentText}>პროექტები</span>
          </h2>
          <p style={styles.subtitle}>
            ნდობა, რომელიც აშენებს — ჩვენი პროექტები მოწმობენ ხარისხზე.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="projects-grid" style={styles.grid}>
          {/* Row 1 */}
          {PROJECTS.slice(0, 2).map((project, i) => (
            <div
              key={i}
              className="reveal-scale project-card"
              style={{
                gridColumn: `span ${project.span}`,
                height: project.height,
                ...styles.card,
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              <div className="project-image-wrapper" style={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: project.objectPosition,
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
              <div style={styles.cardOverlay} />
              <div className="project-content" style={styles.cardContent}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={styles.tag}>{project.tag}</span>
                  <span style={styles.year}>{project.year}</span>
                </div>
                <h3 style={styles.cardName}>{project.name}</h3>
                <p style={styles.cardDesc}>{project.desc}</p>
                <div className="project-services" style={styles.servicesRow}>
                  {project.services.map((s, j) => (
                    <span key={j} style={styles.serviceTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Row 2 */}
          {PROJECTS.slice(2, 4).map((project, i) => (
            <div
              key={i + 2}
              className="reveal-scale project-card"
              style={{
                gridColumn: `span ${project.span}`,
                height: project.height,
                marginTop: 24,
                ...styles.card,
                transitionDelay: `${(i + 2) * 0.15}s`,
              }}
            >
              <div className="project-image-wrapper" style={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: project.objectPosition,
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
              <div style={styles.cardOverlay} />
              <div className="project-content" style={styles.cardContent}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={styles.tag}>{project.tag}</span>
                  <span style={styles.year}>{project.year}</span>
                </div>
                <h3 style={styles.cardName}>{project.name}</h3>
                <p style={styles.cardDesc}>{project.desc}</p>
                <div className="project-services" style={styles.servicesRow}>
                  {project.services.map((s, j) => (
                    <span key={j} style={styles.serviceTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery divider */}
        <div style={{ marginTop: 60, marginBottom: 40, textAlign: "center" as const }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 40, height: 2, background: "#0ea5e9" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#0ea5e9" }}>More Projects</span>
            <div style={{ width: 40, height: 2, background: "#0ea5e9" }} />
          </div>
          <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#fff" }}>
            სხვა <span style={{ color: "#0ea5e9" }}>პროექტები</span>
          </h3>
        </div>

        {/* Gallery */}
        <div style={styles.gallerySection}>
          {GALLERY.map((row, rowIdx) => (
            <div key={rowIdx} className="gallery-row" style={styles.galleryRow}>
              {row.map((item, colIdx) => (
                <div
                  key={colIdx}
                  className="reveal-scale gallery-item"
                  style={{
                    ...styles.galleryItem,
                    transitionDelay: `${(rowIdx * 3 + colIdx) * 0.1}s`,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`Project gallery ${rowIdx * 3 + colIdx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: item.position,
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .project-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .project-card:hover .project-image-wrapper img {
          transform: scale(1.08) !important;
        }

        .project-card .project-services {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .project-card:hover .project-services {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-item {
          border-radius: 16px;
          overflow: hidden;
          height: 260px;
          position: relative;
        }

        .gallery-item:hover img {
          transform: scale(1.06) !important;
        }

        .gallery-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(12, 1fr) !important;
          }

          .projects-grid > div {
            grid-column: span 12 !important;
            height: 360px !important;
            margin-top: 0 !important;
          }

          .gallery-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .projects-grid > div {
            height: 300px !important;
          }

          .gallery-row {
            grid-template-columns: 1fr !important;
          }

          .gallery-item {
            height: 220px !important;
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
    marginTop: 0,
  },

  card: {
    position: "relative" as const,
    borderRadius: 16,
    overflow: "hidden" as const,
    cursor: "pointer",
  },

  imageWrapper: {
    position: "absolute" as const,
    inset: 0,
    zIndex: 0,
  },

  cardOverlay: {
    position: "absolute" as const,
    inset: 0,
    background:
      "linear-gradient(to top, rgba(8,12,20,0.95) 0%, rgba(8,12,20,0.5) 35%, rgba(0,0,0,0.05) 70%)",
    zIndex: 1,
  },

  cardContent: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    padding: "24px",
    zIndex: 2,
  },

  tag: {
    display: "inline-block",
    padding: "5px 14px",
    backgroundColor: "#0284c7",
    color: "#ffffff",
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    borderRadius: 50,
    letterSpacing: "0.05em",
  },

  year: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.05em",
  },

  cardName: {
    fontSize: 24,
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 8px 0",
    lineHeight: 1.3,
  },

  cardDesc: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.6,
    margin: 0,
  },

  servicesRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 8,
    marginTop: 14,
  },

  serviceTag: {
    display: "inline-block",
    padding: "4px 12px",
    fontSize: 12,
    fontWeight: 500,
    color: "#e2e8f0",
    background: "rgba(255,255,255,0.1)",
    borderRadius: 6,
    border: "1px solid rgba(255,255,255,0.08)",
  },

  gallerySection: {
    marginTop: 48,
    display: "flex",
    flexDirection: "column" as const,
    gap: 24,
  },

  galleryRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
  },

  galleryItem: {
    borderRadius: 16,
    overflow: "hidden" as const,
    height: 260,
    position: "relative" as const,
  },
};
