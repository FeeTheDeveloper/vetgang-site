import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Vet Gang";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)",
          color: "#ffffff",
          fontFamily: "'Inter', sans-serif",
          textAlign: "center",
          padding: "80px",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          VET GANG
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.78)" }}>
          Veteran-Owned Exclusive Network
        </div>
      </div>
    ),
    size
  );
}
