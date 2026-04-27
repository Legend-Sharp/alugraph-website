"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "\u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D4\u10D1\u10D8", href: "services" },
  { label: "\u10DE\u10E0\u10DD\u10D4\u10E5\u10E2\u10D4\u10D1\u10D8", href: "projects" },
  { label: "\u10E0\u10D0\u10E2\u10DD\u10DB \u10E9\u10D5\u10D4\u10DC", href: "why-us" },
  { label: "\u10DE\u10D0\u10E0\u10E2\u10DC\u10D8\u10DD\u10E0\u10D4\u10D1\u10D8", href: "partners" },
  { label: "\u10D9\u10DD\u10DC\u10E2\u10D0\u10E5\u10E2\u10D8", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full"
        style={{
          zIndex: 1000,
          padding: scrolled ? "12px 0" : "20px 0",
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(8,12,20,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex items-center justify-between px-6 max-w-7xl">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="AluGraph — მთავარი გვერდი"
            className="select-none"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 900, textDecoration: "none" }}
          >
            <span className="text-white">Alu</span>
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7, #1d4ed8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Graph
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center md:flex" style={{ gap: 28 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className="group relative"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#94a3b8",
                  transition: "color 0.3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "#0ea5e9" }}
                />
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="cursor-pointer transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
                color: "#fff",
                WebkitTextFillColor: "#fff",
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 8,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(14, 165, 233, 0.4)",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #0284c7, #2563eb)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(14, 165, 233, 0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #0ea5e9, #3b82f6)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(14, 165, 233, 0.4)";
              }}
            >
              {"\u10E8\u10D4\u10D7\u10D0\u10D5\u10D0\u10D6\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10D7\u10EE\u10DD\u10D5\u10DC\u10D0"}
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer p-2 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 flex flex-col items-center justify-center transition-all duration-300 md:hidden"
        style={{
          zIndex: 999,
          background: "rgba(8,12,20,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(href);
              }}
              className="cursor-pointer text-[#94a3b8] hover:text-white transition-colors duration-300"
              style={{ fontSize: 18, fontWeight: 500, textDecoration: "none" }}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="cursor-pointer mt-4 transition-all duration-300"
            style={{
              background: "#0284c7",
              color: "#fff",
              WebkitTextFillColor: "#fff",
              padding: "12px 28px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 8,
              whiteSpace: "nowrap",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {"\u10E8\u10D4\u10D7\u10D0\u10D5\u10D0\u10D6\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10D7\u10EE\u10DD\u10D5\u10DC\u10D0"}
          </a>
        </div>
      </div>
    </>
  );
}
