import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D14",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
        }}
      >
        <span
          style={{
            color: "#F5F5FF",
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
          }}
        >
          RM
        </span>
        <span
          style={{
            color: "#A855F7",
            fontWeight: 800,
            fontSize: 15,
            fontFamily: "sans-serif",
            marginLeft: "1px",
          }}
        >
          .
        </span>
      </div>
    ),
    { ...size }
  );
}
