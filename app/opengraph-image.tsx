import { ImageResponse } from "next/og";
import { profile } from "@/src/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — personal website`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#fdfdfc",
          color: "#1c1c1a",
        }}
      >
        <div style={{ fontSize: 78, fontWeight: 600, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 28, fontSize: 36, color: "#57534e" }}>
          {profile.tagline}
        </div>
        <div
          style={{ marginTop: 48, height: 8, width: 180, background: "#1e40af" }}
        />
      </div>
    ),
    size,
  );
}
