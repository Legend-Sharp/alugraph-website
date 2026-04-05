"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setHidden(true);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) {
    return null;
  }

  const aluLetters = "Alu".split("");
  const graphLetters = "Graph".split("");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#080c14",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        opacity: hidden ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      {/* Building SVG */}
      <svg
        className="w-[120px] h-[140px] mx-auto mb-4 block"
        viewBox="0 0 140 160"
        fill="none"
      >
        <defs>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="rgba(56,189,248,0.18)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.06)" />
          </linearGradient>
          <linearGradient id="shimmerGrad" x1="0" y1="0" x2="0.7" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <clipPath id="buildingClip">
            <path d="M25,145 L25,30 L70,12 L115,30 L115,145 Z" />
          </clipPath>
        </defs>

        {/* Ground shadow */}
        <ellipse
          className="fill-[rgba(14,165,233,0.06)] opacity-0"
          style={{ animation: "shadowFade 0.5s ease 1.5s both" }}
          cx="70"
          cy="150"
          rx="50"
          ry="4"
        />

        {/* Building outline */}
        <path
          className="stroke-[rgba(148,163,184,0.7)]"
          style={{
            strokeDasharray: 350,
            strokeDashoffset: 350,
            animation: "lineDraw 0.7s ease-out both",
          }}
          d="M25,145 L25,30 L70,12 L70,145"
          strokeWidth="1.8"
        />
        <path
          className="stroke-[rgba(148,163,184,0.7)]"
          style={{
            strokeDasharray: 350,
            strokeDashoffset: 350,
            animation: "lineDraw 0.7s ease-out 0.25s both",
          }}
          d="M70,12 L115,30 L115,145"
          strokeWidth="1.8"
        />
        <line
          className="stroke-[rgba(148,163,184,0.7)]"
          style={{
            strokeDasharray: 350,
            strokeDashoffset: 350,
            animation: "lineDraw 0.7s ease-out 0.45s both",
          }}
          x1="25"
          y1="145"
          x2="115"
          y2="145"
          strokeWidth="1.8"
        />

        {/* Rooftop */}
        <rect
          className="stroke-[rgba(148,163,184,0.5)] fill-none opacity-0"
          style={{ animation: "detailFade 0.3s ease 0.5s both" }}
          x="62"
          y="5"
          width="16"
          height="7"
          rx="1"
          strokeWidth="1"
        />
        <line
          className="stroke-[rgba(148,163,184,0.5)]"
          style={{
            strokeDasharray: 10,
            strokeDashoffset: 10,
            animation: "lineDraw 0.3s ease-out 0.55s both",
          }}
          x1="70"
          y1="1"
          x2="70"
          y2="5"
          strokeWidth="1.2"
        />

        {/* Floor slabs */}
        {[50, 70, 90, 110, 130].map((y, i) => (
          <line
            key={y}
            className="stroke-[rgba(148,163,184,0.35)]"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animation: `lineDraw 0.4s ease-out ${0.45 + i * 0.07}s both`,
            }}
            x1="25"
            y1={y}
            x2="115"
            y2={y}
            strokeWidth="2"
          />
        ))}

        {/* Vertical mullions */}
        {[
          { x: 43, d: 0.55 },
          { x: 61, d: 0.62 },
          { x: 79, d: 0.69 },
          { x: 97, d: 0.76 },
        ].map((m) => (
          <line
            key={m.x}
            className="stroke-[rgba(148,163,184,0.2)]"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: 150,
              animation: `lineDraw 0.5s ease-out ${m.d}s both`,
            }}
            x1={m.x}
            y1={m.x < 50 ? 22 : 15}
            x2={m.x}
            y2="145"
            strokeWidth="0.8"
          />
        ))}

        {/* Glass panels - Row 1 (varied heights) */}
        {[
          { x: 26, y: 30, h: 19, d: 0.85 },
          { x: 44, y: 23, h: 26, d: 0.88 },
          { x: 62, y: 16, h: 33, d: 0.91 },
          { x: 80, y: 16, h: 33, d: 0.94 },
          { x: 98, y: 23, h: 26, d: 0.97 },
        ].map((p, i) => (
          <rect
            key={`r1-${i}`}
            fill="url(#glassGrad)"
            style={{
              opacity: 0,
              animation: `glassFill 0.25s ease ${p.d}s both`,
            }}
            x={p.x}
            y={p.y}
            width="16"
            height={p.h}
            rx="1"
          />
        ))}

        {/* Glass panels - Rows 2-5 (uniform) */}
        {[51, 71, 91, 111].map((rowY, ri) =>
          [26, 44, 62, 80, 98].map((colX, ci) => (
            <rect
              key={`r${ri + 2}-${ci}`}
              fill="url(#glassGrad)"
              style={{
                opacity: 0,
                animation: `glassFill 0.25s ease ${1.0 + ri * 0.15 + ci * 0.03}s both`,
              }}
              x={colX}
              y={rowY}
              width="16"
              height="18"
              rx="1"
            />
          ))
        )}

        {/* Entrance */}
        <rect
          style={{
            opacity: 0,
            animation: "detailFade 0.3s ease 1.5s both",
          }}
          fill="rgba(14,165,233,0.12)"
          stroke="rgba(14,165,233,0.3)"
          strokeWidth="0.8"
          x="56"
          y="131"
          width="28"
          height="14"
          rx="2"
        />
        <line
          style={{
            opacity: 0,
            animation: "detailFade 0.3s ease 1.55s both",
          }}
          stroke="rgba(14,165,233,0.25)"
          x1="70"
          y1="131"
          x2="70"
          y2="145"
          strokeWidth="0.8"
        />
        <line
          stroke="#0ea5e9"
          strokeLinecap="round"
          style={{
            strokeDasharray: 40,
            strokeDashoffset: 40,
            animation: "lineDraw 0.4s ease-out 1.45s both",
          }}
          x1="50"
          y1="131"
          x2="90"
          y2="131"
          strokeWidth="2.5"
        />

        {/* Shimmer */}
        <rect
          style={{
            animation: "bldShimmer 0.9s ease-in-out 1.6s both",
          }}
          x="-60"
          y="0"
          width="60"
          height="160"
          fill="url(#shimmerGrad)"
          clipPath="url(#buildingClip)"
        />

        {/* Corner accents */}
        <line
          stroke="#0ea5e9"
          style={{
            strokeDasharray: 20,
            strokeDashoffset: 20,
            animation: "lineDraw 0.4s ease-out 1.6s both",
          }}
          x1="25"
          y1="30"
          x2="25"
          y2="45"
          strokeWidth="2"
        />
        <line
          stroke="#0ea5e9"
          style={{
            strokeDasharray: 20,
            strokeDashoffset: 20,
            animation: "lineDraw 0.4s ease-out 1.65s both",
          }}
          x1="115"
          y1="30"
          x2="115"
          y2="45"
          strokeWidth="2"
        />
      </svg>

      {/* AluGraph text */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          marginBottom: "0.25rem",
        }}
      >
        {aluLetters.map((letter, i) => (
          <span
            key={`alu-${i}`}
            style={{
              color: "#ffffff",
              display: "inline-block",
              opacity: 0,
              animation: `letterReveal 0.4s ease ${0.7 + i * 0.07}s both`,
            }}
          >
            {letter}
          </span>
        ))}
        {graphLetters.map((letter, i) => (
          <span
            key={`graph-${i}`}
            style={{
              color: "#0ea5e9",
              display: "inline-block",
              opacity: 0,
              animation: `letterReveal 0.4s ease ${0.7 + (i + 3) * 0.07}s both`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <div
        style={{
          color: "rgba(148,163,184,0.7)",
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          opacity: 0,
          animation: "detailFade 0.5s ease 1.2s both",
          marginBottom: "1.5rem",
        }}
      >
        ALUMINUM &amp; GLASS SOLUTIONS
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "120px",
          height: "2px",
          backgroundColor: "rgba(148,163,184,0.15)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "0%",
            height: "100%",
            backgroundColor: "#0ea5e9",
            borderRadius: "9999px",
            animation: "progressFill 1.8s ease 1.1s both",
          }}
        />
      </div>
    </div>
  );
}
