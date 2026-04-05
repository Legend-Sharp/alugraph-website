"use client";

export default function CTA() {
  return (
    <section style={styles.section}>
      {/* Background */}
      <div style={styles.bg}>
        <div style={styles.pattern} />
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h2 style={styles.title}>
          მზად ხართ წარმატებული თანამშრომლობისთვის?
        </h2>
        <p style={styles.subtitle}>
          დაგვიკავშირდით დღესვე და მიიღეთ ინდივიდუალური შეთავაზება თქვენი
          დეველოპერული პროექტისთვის. პირველი კონსულტაცია უფასოა.
        </p>
        <div style={styles.buttons}>
          <a href="#contact" style={styles.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            შეთავაზების მოთხოვნა
          </a>
          <a href="tel:+995597977833" className="cta-phone-btn" style={styles.btnGlass}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (+995) 597 977 833
          </a>
        </div>
      </div>

      <style jsx global>{`
        .cta-phone-btn:hover {
          background: rgba(255, 255, 255, 0.25) !important;
        }
      `}</style>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 0",
    position: "relative",
    overflow: "hidden",
  },
  bg: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #0ea5e9, #4f46e5)",
    zIndex: 0,
  },
  pattern: {
    position: "absolute",
    inset: 0,
    opacity: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
  content: {
    position: "relative",
    zIndex: 10,
    maxWidth: 700,
    margin: "0 auto",
    padding: "0 24px",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(24px, 3vw, 34px)",
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: 1.3,
    margin: "0 0 20px 0",
  },
  subtitle: {
    fontSize: 17,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.7,
    margin: "0 0 36px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 32px",
    background: "#ffffff",
    color: "#1e293b",
    fontWeight: 700,
    fontSize: 15,
    borderRadius: 12,
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  btnGlass: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 32px",
    background: "rgba(255,255,255,0.15)",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 15,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.3)",
    textDecoration: "none",
    transition: "background 0.2s ease",
  },
};
