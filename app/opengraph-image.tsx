import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "linear-gradient(135deg, #0F1424 0%, #131A30 55%, #1B2444 100%)",
        color: "#F4F6FB",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#F4F6FB",
            color: "#0F1424",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          SZ
        </div>
        <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.5 }}>
          {siteConfig.name}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
        <span
          style={{
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1.5,
          }}
        >
          Building future-ready supply chains through leadership, technology &amp; AI.
        </span>
        <span style={{ fontSize: 26, color: "#9AA5C4", fontWeight: 500 }}>
          {siteConfig.role} · {siteConfig.location}
        </span>
      </div>
    </div>,
    { ...size },
  );
}
