import { ImageResponse } from "next/og";

export const alt = "Harsh full-stack engineer portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101313",
          color: "#f7f3ea",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#46d6c9",
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #46d6c9",
              background: "#17211f",
              fontSize: 24,
              letterSpacing: -1.5,
            }}
          >
            HS
          </div>
          Harsh
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ color: "#e6bb62", fontSize: 28, fontWeight: 800 }}>
            Full-stack engineer
          </div>
          <div style={{ maxWidth: 880, fontSize: 82, lineHeight: 0.98, fontWeight: 800 }}>
            Fast, reliable web products.
          </div>
          <div style={{ maxWidth: 840, color: "#b9b2a3", fontSize: 30, lineHeight: 1.35 }}>
            Frontend, backend, APIs, cloud infrastructure, and product engineering.
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", color: "#101313", fontSize: 22, fontWeight: 800 }}>
          <div style={{ background: "#46d6c9", padding: "14px 20px" }}>Next.js</div>
          <div style={{ background: "#f07f5f", padding: "14px 20px" }}>Node.js</div>
          <div style={{ background: "#e6bb62", padding: "14px 20px" }}>Cloud</div>
        </div>
      </div>
    ),
    size,
  );
}
