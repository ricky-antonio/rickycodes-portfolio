import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#9333ea",
            opacity: 0.15,
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#ec4899",
            opacity: 0.12,
            filter: "blur(100px)",
          }}
        />

        {/* RM. logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <span
            style={{
              color: "#f5f5ff",
              fontWeight: 800,
              fontSize: 28,
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            RM
          </span>
          <span
            style={{
              color: "#9333ea",
              fontWeight: 800,
              fontSize: 28,
              fontFamily: "sans-serif",
            }}
          >
            .
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-2px",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #9333ea, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Ricardo Monterrosa
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#94a3b8",
            fontFamily: "sans-serif",
            marginBottom: 40,
          }}
        >
          Full-Stack Software Engineer
        </div>

        {/* Divider + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 3,
              background: "linear-gradient(to right, #9333ea, #ec4899)",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              color: "#94a3b8",
              fontSize: 22,
              fontFamily: "sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            rickycodes.dev
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
