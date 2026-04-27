"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8" style={{ background: "#080c14" }}>
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <span className="text-[22px] font-black" style={{ fontFamily: "Inter, sans-serif" }}>
            Alu<span style={{ background: "linear-gradient(135deg, #0284c7, #1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Graph</span>
          </span>
          <span className="text-sm text-[#94a3b8]">&copy; 2026 AluGraph. ყველა უფლება დაცულია.</span>
        </div>
        <div className="flex gap-3">
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61587741965966",
              label: "AluGraph Facebook",
              external: true,
              icon: (
                <svg className="w-4 h-4" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              ),
            },
            {
              href: "mailto:alugraphcontact@gmail.com",
              label: "გაგზავნე ელ-ფოსტა AluGraph-ს",
              external: false,
              icon: (
                <svg className="w-4 h-4" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              ),
            },
            {
              href: "tel:+995597977833",
              label: "დაურეკე AluGraph-ს",
              external: false,
              icon: (
                <svg className="w-4 h-4" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              ),
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              aria-label={social.label}
              {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="w-[42px] h-[42px] rounded-xl flex items-center justify-center text-[#94a3b8] transition-all duration-300 hover:text-white"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0ea5e9"; e.currentTarget.style.borderColor = "#0ea5e9"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
