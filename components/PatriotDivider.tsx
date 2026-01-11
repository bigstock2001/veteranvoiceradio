import type { CSSProperties, ReactNode } from "react";

const PATRIOT_GLASS: CSSProperties = {
  backgroundColor: "rgba(8,12,22,.78)",
  backgroundImage:
    "linear-gradient(90deg, rgba(220,38,38,.38), rgba(255,255,255,.16), rgba(37,99,235,.38))",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
};

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;

  /** For section headers like "Featured Artist" */
  variant?: "title" | "small" | "letter";

  /** Center text (great for A/B/C separators) */
  center?: boolean;
};

export default function PatriotDivider({
  children,
  className = "",
  style,
  variant = "title",
  center = false,
}: Props) {
  const radius =
    variant === "small" ? "12px" : variant === "letter" ? "999px" : "14px";

  const padding =
    variant === "small"
      ? "10px 12px"
      : variant === "letter"
      ? "10px 18px"
      : "10px 16px";

  const fontSize = variant === "letter" ? 18 : 14;
  const fontWeight = variant === "letter" ? 900 : 800;
  const letterSpacing = variant === "letter" ? "0.08em" : "0.02em";

  return (
    <div
      className={className}
      style={{
        ...PATRIOT_GLASS,
        borderRadius: radius,
        padding,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        textAlign: center ? "center" : "left",
        width: center ? "100%" : "auto",
        color: "rgba(255,255,255,.94)",
        fontSize,
        fontWeight,
        letterSpacing,
        textTransform: variant === "letter" ? "uppercase" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
