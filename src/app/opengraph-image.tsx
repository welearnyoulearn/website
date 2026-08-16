import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "WeLearnYouLearn — School Management Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const iconData = await readFile(
    join(process.cwd(), "public/logos/wlyl-icon.png")
  );
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(79,70,229,0.55), transparent 55%), radial-gradient(circle at 80% 10%, rgba(245,158,11,0.28), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#ffffff" }}>
            WLYL
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 40,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Smart school management, one platform
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 24,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
          }}
        >
          Built for CBSE and State Board schools across India
        </div>
      </div>
    ),
    { ...size }
  );
}
