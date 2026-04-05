"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type ValidationErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const PROJECT_TYPES = [
  "აირჩიეთ პროექტის ტიპი",
  "საცხოვრებელი კომპლექსი",
  "კომერციული ობიექტი",
  "საოფისე შენობა",
  "ინდივიდუალური პროექტი",
  "სხვა",
];

// EmailJS config — get these from https://emailjs.com
const EMAILJS_SERVICE_ID = "service_107lnat";
const EMAILJS_TEMPLATE_ID = "template_qswkq8s";
const EMAILJS_PUBLIC_KEY = "ofojXS6WW7cWYJ8pI";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

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

  const validate = (name: string, phone: string, email: string, message: string): ValidationErrors => {
    const errs: ValidationErrors = {};
    if (!name.trim() || name.trim().length < 2) errs.name = "სახელი სავალდებულოა (მინ. 2 სიმბოლო)";
    if (!phone.trim()) errs.phone = "ტელეფონი სავალდებულოა";
    else if (!/^[+\d\s()-]{9,}$/.test(phone.trim())) errs.phone = "არასწორი ტელეფონის ფორმატი";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = "არასწორი ელ-ფოსტის ფორმატი";
    if (!message.trim() || message.trim().length < 5) errs.message = "შეტყობინება სავალდებულოა (მინ. 5 სიმბოლო)";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const title = formData.get("title") as string;
    const msg = formData.get("message") as string;

    const validationErrors = validate(name, phone, email, msg);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSending(true);
    setError(false);

    try {
      const fullMessage = [
        email ? `ელ-ფოსტა: ${email}` : null,
        title ? `პროექტის ტიპი: ${title}` : null,
        msg ? `\n${msg}` : null,
      ].filter(Boolean).join("\n");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          phone,
          message: fullMessage,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (_err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div className="reveal" style={styles.header}>
          <span style={styles.label}>
            <span style={styles.labelLine} />
            CONTACT
          </span>
          <h2 style={styles.title}>დაგვიკავშირდით</h2>
          <p style={styles.subtitle}>
            გაქვთ შეკითხვა ან გსურთ თანამშრომლობა? დაგვიკავშირდით ნებისმიერი
            ხელმისაწვდომი არხით.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Contact info */}
          <div className="reveal-left" style={styles.infoCol}>
            {/* Phone */}
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span style={styles.infoLabel}>ტელეფონი</span>
                <a href="tel:+995597977833" style={styles.infoValue}>(+995) 597 977 833</a>
                <br />
                <a href="tel:+995500502029" style={styles.infoValue}>(+995) 500 502 029</a>
              </div>
            </div>

            {/* Email */}
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span style={styles.infoLabel}>ელ-ფოსტა</span>
                <a href="mailto:alugraphcontact@gmail.com" style={styles.infoValue}>
                  alugraphcontact@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span style={styles.infoLabel}>მისამართი</span>
                <span style={styles.infoValue}>ქ. რუსთავი, მშვიდობის ქუჩა</span>
              </div>
            </div>

            {/* Facebook */}
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0ea5e9">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <span style={styles.infoLabel}>Facebook</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61587741965966"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.infoValue}
                >
                  ALUGRAPH / ალუგრაფი
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal-right">
            <div style={styles.formCard}>
              <h3 style={styles.formTitle}>ტექნიკური კონსულტაცია</h3>
              <p style={styles.formSubtitle}>
                შეავსეთ ფორმა და ჩვენი სპეციალისტი დაგიკავშირდებათ მოკლე დროში.
              </p>

              {submitted ? (
                <div style={styles.success}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p style={{ color: "#ffffff", fontWeight: 600, margin: "12px 0 0" }}>
                    შეტყობინება გაგზავნილია!
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: 14, margin: "8px 0 0" }}>
                    ჩვენი გუნდი მალე დაგიკავშირდებათ.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} style={styles.form} noValidate>
                  <div className="contact-form-row" style={styles.row}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="სახელი / კომპანია *"
                        className="contact-input"
                        style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
                        onChange={() => errors.name && setErrors(prev => ({ ...prev, name: undefined }))}
                      />
                      {errors.name && <p style={styles.errorText}>{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="ტელეფონი *"
                        className="contact-input"
                        style={{ ...styles.input, ...(errors.phone ? styles.inputError : {}) }}
                        onChange={() => errors.phone && setErrors(prev => ({ ...prev, phone: undefined }))}
                      />
                      {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="ელ-ფოსტა"
                      className="contact-input"
                      style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
                      onChange={() => errors.email && setErrors(prev => ({ ...prev, email: undefined }))}
                    />
                    {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                  </div>
                  <select name="title" className="contact-input" style={styles.input} defaultValue="">
                    {PROJECT_TYPES.map((t, i) => (
                      <option key={i} value={i === 0 ? "" : t} disabled={i === 0}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <div>
                    <textarea
                      name="message"
                      placeholder="შეტყობინება *"
                      rows={4}
                      className="contact-input"
                      style={{ ...styles.input, resize: "vertical" as const, ...(errors.message ? styles.inputError : {}) }}
                      onChange={() => errors.message && setErrors(prev => ({ ...prev, message: undefined }))}
                    />
                    {errors.message && <p style={styles.errorText}>{errors.message}</p>}
                  </div>
                  {error && (
                    <p style={{ color: "#ef4444", fontSize: 14, margin: "0 0 12px" }}>
                      შეცდომა. გთხოვთ სცადოთ თავიდან.
                    </p>
                  )}
                  <button type="submit" className="contact-submit" style={styles.submitBtn} disabled={sending}>
                    {sending ? "იგზავნება..." : "გაგზავნა"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 18px;
          color: #ffffff;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease;
          font-family: inherit;
          box-sizing: border-box;
        }

        .contact-input::placeholder {
          color: #64748b;
        }

        .contact-input:focus {
          border-color: #0ea5e9;
        }

        .contact-input option {
          background: #0f172a;
          color: #ffffff;
        }

        .contact-submit {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0ea5e9, #1d4ed8);
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
          font-family: inherit;
        }

        .contact-submit:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
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
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    lineHeight: 1.7,
    marginTop: 16,
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
  },
  infoCol: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    paddingTop: 16,
  },
  infoItem: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  },
  infoIcon: {
    width: 48,
    height: 48,
    minWidth: 48,
    borderRadius: 12,
    background: "rgba(14,165,233,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoLabel: {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 6,
  },
  infoValue: {
    fontSize: 15,
    color: "#e2e8f0",
    textDecoration: "none",
    lineHeight: 1.8,
  },
  formCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24,
    padding: 40,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 8px 0",
  },
  formSubtitle: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: "0 0 28px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  input: {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderStyle: "solid" as const,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "14px 18px",
    color: "#ffffff",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
  },
  submitBtn: {
    width: "100%",
    padding: 16,
    background: "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 16,
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  inputError: {
    borderColor: "#ef4444",
    boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.15)",
  },
  errorText: {
    color: "#ef4444",
    fontSize: 12,
    margin: "6px 0 0",
    fontWeight: 500,
  },
  success: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    padding: "48px 20px",
  },
};
